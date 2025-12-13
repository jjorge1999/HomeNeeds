import { Injectable, signal, computed, OnDestroy } from '@angular/core';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  onSnapshot,
  Firestore,
  Unsubscribe,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { GroceryItem, CategoryItem, DEFAULT_CATEGORIES } from './grocery.model';
import { PRODUCE_SEED_DATA } from './grocery-seed-data';
import { DAIRY_SEED_DATA } from './dairy-seed-data';
import { PANTRY_SEED_DATA } from './pantry-seed-data';
import { BABY_SEED_DATA } from './baby-seed-data';

@Injectable({
  providedIn: 'root',
})
export class GroceryService implements OnDestroy {
  private firestore: Firestore;
  private readonly GROCERIES_COLLECTION = 'groceries';
  private readonly CATEGORIES_COLLECTION = 'categories';

  private unsubGroceries: Unsubscribe | null = null;
  private unsubCategories: Unsubscribe | null = null;

  // Signals for reactive state management
  private groceriesSignal = signal<GroceryItem[]>([]);
  private categoriesSignal = signal<CategoryItem[]>([...DEFAULT_CATEGORIES]);
  private searchQuerySignal = signal<string>('');
  private selectedCategorySignal = signal<string | 'all'>('all');
  private sortBySignal = signal<'name' | 'category' | 'date'>('name');
  private isLoadingSignal = signal<boolean>(true);
  private errorSignal = signal<string | null>(null);
  private isSeededSignal = signal<boolean>(false);

  // Get all categories
  readonly categories = computed(() => this.categoriesSignal());

  // Get category IDs for iteration
  readonly categoryIds = computed(() => this.categoriesSignal().map((c) => c.id));

  // Loading state
  readonly isLoading = computed(() => this.isLoadingSignal());

  // Computed signals for filtered/sorted data
  readonly groceries = computed(() => {
    let items = this.groceriesSignal();
    const queryStr = this.searchQuerySignal().toLowerCase();
    const category = this.selectedCategorySignal();
    const sortBy = this.sortBySignal();

    // Filter by search query
    if (queryStr) {
      items = items.filter((item) => item.name.toLowerCase().includes(queryStr));
    }

    // Filter by category
    if (category === 'cart') {
      items = items.filter((item) => item.isInCart);
    } else if (category !== 'all') {
      items = items.filter((item) => item.category === category);
    }

    // Sort items
    items = [...items].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'date':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    return items;
  });

  readonly cartItems = computed(() => this.groceriesSignal().filter((item) => item.isInCart));

  readonly checkedItems = computed(() => this.cartItems().filter((item) => item.isChecked));

  readonly uncheckedItems = computed(() => this.cartItems().filter((item) => !item.isChecked));

  readonly searchQuery = computed(() => this.searchQuerySignal());
  readonly selectedCategory = computed(() => this.selectedCategorySignal());
  readonly sortBy = computed(() => this.sortBySignal());
  readonly error = computed(() => this.errorSignal());

  // Group groceries by category - dynamically based on available categories
  readonly groceriesByCategory = computed(() => {
    const items = this.groceries();
    const categories = this.categoriesSignal();
    const grouped: Record<string, GroceryItem[]> = {};

    // Initialize all categories with empty arrays
    categories.forEach((cat) => {
      grouped[cat.id] = [];
    });

    // Group items
    items.forEach((item) => {
      if (grouped[item.category]) {
        grouped[item.category].push(item);
      } else {
        // If category doesn't exist, put in 'other'
        if (grouped['other']) {
          grouped['other'].push(item);
        }
      }
    });

    return grouped;
  });

  constructor() {
    // Explicitly initialize app to ensure it exists
    const app = initializeApp(environment.firebase);
    // Remove Auth to avoid config errors
    // const auth = getAuth(app);
    this.firestore = getFirestore(app);

    // Initialize listeners directly
    this.initializeFirestoreListeners();
    this.checkAndMigrateData();
  }

  private initializeFirestoreListeners(): void {
    // Listen to groceries collection
    const groceriesRef = query(
      collection(this.firestore, this.GROCERIES_COLLECTION),
      orderBy('name')
    );

    this.unsubGroceries = onSnapshot(
      groceriesRef,
      (snapshot) => {
        const groceries = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            createdAt: data['createdAt']?.toDate
              ? data['createdAt'].toDate()
              : new Date(data['createdAt']),
            updatedAt: data['updatedAt']?.toDate
              ? data['updatedAt'].toDate()
              : new Date(data['updatedAt']),
          };
        }) as GroceryItem[];

        this.groceriesSignal.set(groceries);
        this.isLoadingSignal.set(false);

        // Seed data if empty
        if (groceries.length === 0 && !this.isSeededSignal()) {
          this.seedInitialData();
        }
      },
      (error) => {
        console.error('Error loading groceries:', error);
        this.errorSignal.set(error.message);
        this.isLoadingSignal.set(false);
      }
    );

    // Listen to categories collection
    const categoriesRef = collection(this.firestore, this.CATEGORIES_COLLECTION);

    this.unsubCategories = onSnapshot(
      categoriesRef,
      (snapshot) => {
        if (!snapshot.empty) {
          const categories = snapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              ...data,
              createdAt: data['createdAt']?.toDate
                ? data['createdAt'].toDate()
                : new Date(data['createdAt']),
            };
          }) as CategoryItem[];

          // Merge with defaults to ensure all defaults exist
          const storedIds = categories.map((c) => c.id);
          const missingDefaults = DEFAULT_CATEGORIES.filter((dc) => !storedIds.includes(dc.id));

          if (missingDefaults.length > 0) {
            // Add missing defaults to Firestore
            missingDefaults.forEach((cat) => this.saveCategoryToFirestore(cat));
            this.categoriesSignal.set([...categories, ...missingDefaults]);
          } else {
            this.categoriesSignal.set(categories);
          }
        } else {
          // Seed default categories
          DEFAULT_CATEGORIES.forEach((cat) => this.saveCategoryToFirestore(cat));
          this.categoriesSignal.set([...DEFAULT_CATEGORIES]);
        }
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  private async seedInitialData(): Promise<void> {
    if (this.isSeededSignal()) return;
    this.isSeededSignal.set(true);

    console.log('Seeding initial grocery data...');

    const allSeedData = [
      ...PRODUCE_SEED_DATA,
      ...DAIRY_SEED_DATA,
      ...PANTRY_SEED_DATA,
      ...BABY_SEED_DATA,
    ];

    // Batch create all items
    // Using Promise.all for parallel creation for better performance
    const batchPromises = allSeedData.map((item) => this.create(item));
    await Promise.all(batchPromises);

    console.log(`Seeded ${allSeedData.length} grocery items`);
  }

  private async saveCategoryToFirestore(category: CategoryItem): Promise<void> {
    const docRef = doc(this.firestore, this.CATEGORIES_COLLECTION, category.id);
    await setDoc(docRef, {
      ...category,
      createdAt: category.createdAt,
    });
  }

  // Category CRUD Operations
  async createCategory(
    category: Omit<CategoryItem, 'id' | 'createdAt' | 'isDefault'>
  ): Promise<CategoryItem> {
    const newCategory: CategoryItem = {
      ...category,
      id: this.generateCategoryId(category.name),
      isDefault: false,
      createdAt: new Date(),
    };

    await this.saveCategoryToFirestore(newCategory);
    return newCategory;
  }

  getCategory(id: string): CategoryItem | undefined {
    return this.categoriesSignal().find((cat) => cat.id === id);
  }

  async updateCategory(
    id: string,
    updates: Partial<Omit<CategoryItem, 'id' | 'createdAt' | 'isDefault'>>
  ): Promise<CategoryItem | undefined> {
    const category = this.getCategory(id);
    if (!category || category.isDefault) return undefined;

    const docRef = doc(this.firestore, this.CATEGORIES_COLLECTION, id);
    await updateDoc(docRef, updates);

    return { ...category, ...updates };
  }

  deleteCategory(id: string): { success: boolean; error?: string } {
    const category = this.getCategory(id);
    if (!category) return { success: false, error: 'Category not found' };
    if (category.isDefault) return { success: false, error: 'Cannot delete default categories' };

    // Check if category has related items
    const itemsInCategory = this.groceriesSignal().filter((item) => item.category === id);
    if (itemsInCategory.length > 0) {
      return {
        success: false,
        error: `Cannot delete category "${category.name}" because it has ${itemsInCategory.length} item(s). Please move or delete the items first.`,
      };
    }

    const docRef = doc(this.firestore, this.CATEGORIES_COLLECTION, id);
    deleteDoc(docRef);
    return { success: true };
  }

  getItemCountInCategory(categoryId: string): number {
    return this.groceriesSignal().filter((item) => item.category === categoryId).length;
  }

  getCategoryLabel(categoryId: string): string {
    const category = this.getCategory(categoryId);
    return category?.name || categoryId;
  }

  getCategoryIcon(categoryId: string): string {
    const category = this.getCategory(categoryId);
    return category?.icon || 'category';
  }

  getCategoryColor(categoryId: string): string {
    const category = this.getCategory(categoryId);
    return category?.color || 'text-slate-400';
  }

  // Search & Filter setters
  setSearchQuery(query: string): void {
    this.searchQuerySignal.set(query);
  }

  setCategory(category: string | 'all'): void {
    this.selectedCategorySignal.set(category);
  }

  setSortBy(sortBy: 'name' | 'category' | 'date'): void {
    this.sortBySignal.set(sortBy);
  }

  // CRUD Operations with Firestore
  async create(item: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<GroceryItem> {
    const newItem: GroceryItem = {
      ...item,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const docRef = doc(this.firestore, this.GROCERIES_COLLECTION, newItem.id);
    await setDoc(docRef, newItem);

    return newItem;
  }

  async update(
    id: string,
    updates: Partial<Omit<GroceryItem, 'id' | 'createdAt'>>
  ): Promise<GroceryItem | undefined> {
    const item = this.groceriesSignal().find((i) => i.id === id);
    if (!item) return undefined;

    const docRef = doc(this.firestore, this.GROCERIES_COLLECTION, id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: new Date(),
    });

    return { ...item, ...updates, updatedAt: new Date() };
  }

  async delete(id: string): Promise<boolean> {
    const docRef = doc(this.firestore, this.GROCERIES_COLLECTION, id);
    await deleteDoc(docRef);
    return true;
  }

  getById(id: string): GroceryItem | undefined {
    return this.groceriesSignal().find((item) => item.id === id);
  }

  // Cart Operations
  async addToCart(id: string): Promise<void> {
    await this.update(id, { isInCart: true });
  }

  async removeFromCart(id: string): Promise<void> {
    await this.update(id, { isInCart: false, isChecked: false });
  }

  async toggleChecked(id: string): Promise<void> {
    const item = this.getById(id);
    if (item) {
      await this.update(id, { isChecked: !item.isChecked });
    }
  }

  async clearCart(): Promise<void> {
    const cartItems = this.cartItems();
    // Use Promise.all for parallel update
    const updates = cartItems.map((item) =>
      this.update(item.id, { isInCart: false, isChecked: false })
    );
    await Promise.all(updates);
  }

  // Reset to seed data
  async resetToSeedData(): Promise<void> {
    // Delete all existing groceries using batch deletion approach (though here we loop for simplicity)
    const groceries = this.groceriesSignal();
    // Delete in parallel
    const deletePromises = groceries.map((item) => this.delete(item.id));
    await Promise.all(deletePromises);

    // Reset seeded flag and let the listener re-seed
    this.isSeededSignal.set(false);
  }

  private readonly HISTORY_COLLECTION = 'shopping_history';

  async saveToHistory(): Promise<void> {
    const items = this.cartItems();
    if (items.length === 0) return;

    const historyId = `history_${Date.now()}`;
    const docRef = doc(this.firestore, this.HISTORY_COLLECTION, historyId);

    const historyData = {
      id: historyId,
      date: new Date(),
      itemCount: items.length,
      items: items.map((i) => ({
        id: i.id,
        name: i.name,
        category: i.category,
        checked: i.isChecked,
      })),
      completed: true,
    };

    await setDoc(docRef, historyData);
  }

  private generateId(): string {
    return `grocery_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateCategoryId(name: string): string {
    return `cat_${name.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}`;
  }

  private checkAndMigrateData(): void {
    // Check for seed data updates
    const SEED_VERSION = 'v12';
    const storedVersion = localStorage.getItem('homeneeds_seed_version');

    if (storedVersion !== SEED_VERSION) {
      console.log(`Migrating data to ${SEED_VERSION}...`);
      // Use non-destructive migration
      this.migrateMissingSeedData().then(() => {
        localStorage.setItem('homeneeds_seed_version', SEED_VERSION);
      });
    }
  }

  async migrateMissingSeedData(): Promise<void> {
    console.log('Checking for missing seed items...');
    const currentItems = this.groceriesSignal();

    const allSeedData = [
      ...PRODUCE_SEED_DATA,
      ...DAIRY_SEED_DATA,
      ...PANTRY_SEED_DATA,
      ...BABY_SEED_DATA,
    ];

    // Find items that don't exist by name
    const missingItems = allSeedData.filter(
      (seedItem) => !currentItems.some((existing) => existing.name === seedItem.name)
    );

    if (missingItems.length > 0) {
      console.log(`Adding ${missingItems.length} missing items...`);
      await Promise.all(missingItems.map((item) => this.create(item)));
    } else {
      console.log('All seed items are present.');
    }
  }

  ngOnDestroy(): void {
    if (this.unsubGroceries) {
      this.unsubGroceries();
    }
    if (this.unsubCategories) {
      this.unsubCategories();
    }
  }
}
