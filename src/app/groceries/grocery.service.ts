import { Injectable, signal, computed, OnDestroy, inject, effect } from '@angular/core';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
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
import { CLEANING_SEED_DATA } from './cleaning-seed-data';
import { BAKERY_SEED_DATA } from './bakery-seed-data';
import { BEVERAGES_SEED_DATA } from './beverages-seed-data';
import { CANNED_SEED_DATA } from './canned-seed-data';
import { CONDIMENTS_SEED_DATA } from './condiments-seed-data';
import { DELI_SEED_DATA } from './deli-seed-data';
import { FROZEN_SEED_DATA } from './frozen-seed-data';
import { HEALTH_SEED_DATA } from './health-seed-data';
import { MEAT_SEED_DATA } from './meat-seed-data';
import { PETS_SEED_DATA } from './pets-seed-data';
import { SNACKS_SEED_DATA } from './snacks-seed-data';
import { UserService } from '../users/user.service';
import { Observable, from, of, BehaviorSubject, throwError, forkJoin } from 'rxjs';
import { map, tap, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GroceryService implements OnDestroy {
  private userService = inject(UserService);
  private firestore: Firestore;
  private readonly GROCERIES_COLLECTION = 'groceries';
  private readonly CATEGORIES_COLLECTION = 'categories';
  private readonly HISTORY_COLLECTION = 'shopping_history';

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
  private hasMigratedThisSession = false;

  // Observable streams for subscribers
  private groceriesSubject = new BehaviorSubject<GroceryItem[]>([]);
  private categoriesSubject = new BehaviorSubject<CategoryItem[]>([...DEFAULT_CATEGORIES]);
  readonly groceries$ = this.groceriesSubject.asObservable();
  readonly categories$ = this.categoriesSubject.asObservable();

  // Computed signals
  readonly categories = computed(() => this.categoriesSignal());
  readonly categoryIds = computed(() => this.categoriesSignal().map((c) => c.id));
  readonly isLoading = computed(() => this.isLoadingSignal());

  readonly groceries = computed(() => {
    let items = this.groceriesSignal();
    const queryStr = this.searchQuerySignal().toLowerCase();
    const category = this.selectedCategorySignal();
    const sortBy = this.sortBySignal();

    if (queryStr) {
      items = items.filter((item) => item.name.toLowerCase().includes(queryStr));
    }

    if (category === 'cart') {
      items = items.filter((item) => item.isInCart);
    } else if (category !== 'all') {
      items = items.filter((item) => item.category === category);
    }

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

  readonly groceriesByCategory = computed(() => {
    const items = this.groceries();
    const categories = this.categoriesSignal();
    const grouped: Record<string, GroceryItem[]> = {};

    categories.forEach((cat) => {
      grouped[cat.id] = [];
    });

    items.forEach((item) => {
      if (grouped[item.category]) {
        grouped[item.category].push(item);
      } else if (grouped['other']) {
        grouped['other'].push(item);
      }
    });

    return grouped;
  });

  constructor() {
    const app = initializeApp(environment.firebase);
    this.firestore = getFirestore(app);

    effect(() => {
      const currentUser = this.userService.currentUser();
      this.cleanupSubscriptions();
      this.hasMigratedThisSession = false;

      if (currentUser && currentUser.userId) {
        console.log('📦 Loading groceries for user:', currentUser.userId);
        this.initializeFirestoreListeners(currentUser.userId);
      } else {
        console.log('🔒 No user logged in - clearing grocery data');
        this.groceriesSignal.set([]);
        this.groceriesSubject.next([]);
        this.categoriesSignal.set([...DEFAULT_CATEGORIES]);
        this.categoriesSubject.next([...DEFAULT_CATEGORIES]);
        this.isLoadingSignal.set(false);
      }
    });
  }

  private getCurrentUserId(): string {
    const user = this.userService.currentUser();
    return user?.userId || '';
  }

  private cleanupSubscriptions(): void {
    if (this.unsubGroceries) {
      this.unsubGroceries();
      this.unsubGroceries = null;
    }
    if (this.unsubCategories) {
      this.unsubCategories();
      this.unsubCategories = null;
    }
  }

  private initializeFirestoreListeners(userId: string): void {
    if (!userId) return;
    this.isLoadingSignal.set(true);

    const groceriesRef = query(
      collection(this.firestore, this.GROCERIES_COLLECTION),
      where('userId', '==', userId)
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
        this.groceriesSubject.next(groceries);
        this.isLoadingSignal.set(false);

        if (groceries.length === 0 && !this.isSeededSignal()) {
          this.seedInitialData$(userId).subscribe();
        } else {
          this.checkAndMigrateData(userId, groceries);
        }
      },
      (error) => {
        console.error('Error loading groceries:', error);
        this.errorSignal.set(error.message);
        this.isLoadingSignal.set(false);
      }
    );

    const categoriesRef = query(
      collection(this.firestore, this.CATEGORIES_COLLECTION),
      where('userId', 'in', [userId, 'system'])
    );

    this.unsubCategories = onSnapshot(
      categoriesRef,
      (snapshot) => {
        if (snapshot.docs.length > 0) {
          const categories = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data()['createdAt']?.toDate
              ? doc.data()['createdAt'].toDate()
              : new Date(),
          })) as CategoryItem[];

          categories.sort((a, b) => a.name.localeCompare(b.name));

          const missingDefaults = DEFAULT_CATEGORIES.filter(
            (dc) => !categories.some((c) => c.id === dc.id)
          );

          if (missingDefaults.length > 0) {
            missingDefaults.forEach((cat) => this.saveCategoryToFirestore$(cat).subscribe());
            const allCategories = [...categories, ...missingDefaults];
            this.categoriesSignal.set(allCategories);
            this.categoriesSubject.next(allCategories);
          } else {
            this.categoriesSignal.set(categories);
            this.categoriesSubject.next(categories);
          }
        } else {
          DEFAULT_CATEGORIES.forEach((cat) => this.saveCategoryToFirestore$(cat).subscribe());
          this.categoriesSignal.set([...DEFAULT_CATEGORIES]);
          this.categoriesSubject.next([...DEFAULT_CATEGORIES]);
        }
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  // ========== Observable-based Methods ==========

  private seedInitialData$(userId: string): Observable<void> {
    if (this.isSeededSignal()) return of(undefined);
    this.isSeededSignal.set(true);

    console.log('Seeding initial grocery data for user:', userId);

    const allSeedData = [
      ...PRODUCE_SEED_DATA,
      ...DAIRY_SEED_DATA,
      ...PANTRY_SEED_DATA,
      ...BABY_SEED_DATA,
      ...CLEANING_SEED_DATA,
      ...BAKERY_SEED_DATA,
      ...BEVERAGES_SEED_DATA,
      ...CANNED_SEED_DATA,
      ...CONDIMENTS_SEED_DATA,
      ...DELI_SEED_DATA,
      ...FROZEN_SEED_DATA,
      ...HEALTH_SEED_DATA,
      ...MEAT_SEED_DATA,
      ...PETS_SEED_DATA,
      ...SNACKS_SEED_DATA,
    ];

    const creates$ = allSeedData.map((item) => this.create$(item));
    return forkJoin(creates$).pipe(
      tap(() => console.log(`Seeded ${allSeedData.length} grocery items for user ${userId}`)),
      map(() => undefined)
    );
  }

  private saveCategoryToFirestore$(category: CategoryItem): Observable<void> {
    const docRef = doc(this.firestore, this.CATEGORIES_COLLECTION, category.id);
    return from(
      setDoc(docRef, {
        ...category,
        createdAt: category.createdAt,
      })
    );
  }

  /**
   * Create category - Observable based
   */
  createCategory$(
    category: Omit<CategoryItem, 'id' | 'createdAt' | 'isDefault' | 'userId'>
  ): Observable<CategoryItem> {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return throwError(() => new Error('User must be logged in to create categories'));
    }

    const newCategory: CategoryItem = {
      ...category,
      id: this.generateCategoryId(category.name),
      userId,
      isDefault: false,
      createdAt: new Date(),
    };

    return this.saveCategoryToFirestore$(newCategory).pipe(map(() => newCategory));
  }

  getCategory(id: string): CategoryItem | undefined {
    return this.categoriesSignal().find((cat) => cat.id === id);
  }

  /**
   * Update category - Observable based
   */
  updateCategory$(
    id: string,
    updates: Partial<Omit<CategoryItem, 'id' | 'createdAt' | 'isDefault' | 'userId'>>
  ): Observable<CategoryItem | undefined> {
    const category = this.getCategory(id);
    if (!category || category.isDefault) return of(undefined);

    const docRef = doc(this.firestore, this.CATEGORIES_COLLECTION, id);
    return from(updateDoc(docRef, updates)).pipe(map(() => ({ ...category, ...updates })));
  }

  deleteCategory(id: string): { success: boolean; error?: string } {
    const category = this.getCategory(id);
    if (!category) return { success: false, error: 'Category not found' };
    if (category.isDefault) return { success: false, error: 'Cannot delete default categories' };

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

  /**
   * Check if an item with the same name already exists (case-insensitive)
   */
  itemExists(name: string): boolean {
    const normalizedName = name.trim().toLowerCase();
    return this.groceriesSignal().some((item) => item.name.toLowerCase() === normalizedName);
  }

  /**
   * Get existing item by name (case-insensitive)
   */
  getItemByName(name: string): GroceryItem | undefined {
    const normalizedName = name.trim().toLowerCase();
    return this.groceriesSignal().find((item) => item.name.toLowerCase() === normalizedName);
  }

  /**
   * Create grocery item - Observable based
   * Includes duplicate validation to prevent items with the same name
   */
  create$(
    item: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>
  ): Observable<GroceryItem> {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return throwError(() => new Error('User must be logged in to create items'));
    }

    // Check for duplicate item (case-insensitive)
    const existingItem = this.getItemByName(item.name);
    if (existingItem) {
      return throwError(() => new Error(`An item named "${existingItem.name}" already exists.`));
    }

    const newItem: GroceryItem = {
      ...item,
      id: this.generateId(),
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const docRef = doc(this.firestore, this.GROCERIES_COLLECTION, newItem.id);
    return from(setDoc(docRef, newItem)).pipe(map(() => newItem));
  }

  /**
   * Update grocery item - Observable based
   * Includes duplicate validation when renaming items
   */
  update$(
    id: string,
    updates: Partial<Omit<GroceryItem, 'id' | 'createdAt' | 'userId'>>
  ): Observable<GroceryItem | undefined> {
    const item = this.groceriesSignal().find((i) => i.id === id);
    if (!item) return of(undefined);

    // Check for duplicate name if name is being updated
    if (updates.name) {
      const normalizedNewName = updates.name.trim().toLowerCase();
      const existingItem = this.groceriesSignal().find(
        (i) => i.id !== id && i.name.toLowerCase() === normalizedNewName
      );
      if (existingItem) {
        return throwError(() => new Error(`An item named "${existingItem.name}" already exists.`));
      }
    }

    const docRef = doc(this.firestore, this.GROCERIES_COLLECTION, id);
    return from(
      updateDoc(docRef, {
        ...updates,
        updatedAt: new Date(),
      })
    ).pipe(map(() => ({ ...item, ...updates, updatedAt: new Date() })));
  }

  /**
   * Delete grocery item - Observable based
   */
  delete$(id: string): Observable<boolean> {
    const docRef = doc(this.firestore, this.GROCERIES_COLLECTION, id);
    return from(deleteDoc(docRef)).pipe(map(() => true));
  }

  getById(id: string): GroceryItem | undefined {
    return this.groceriesSignal().find((item) => item.id === id);
  }

  /**
   * Add to cart - Observable based
   */
  addToCart$(id: string): Observable<void> {
    return this.update$(id, { isInCart: true }).pipe(map(() => undefined));
  }

  /**
   * Remove from cart - Observable based
   */
  removeFromCart$(id: string): Observable<void> {
    return this.update$(id, { isInCart: false, isChecked: false }).pipe(map(() => undefined));
  }

  /**
   * Toggle checked - Observable based
   */
  toggleChecked$(id: string): Observable<void> {
    const item = this.getById(id);
    if (item) {
      return this.update$(id, { isChecked: !item.isChecked }).pipe(map(() => undefined));
    }
    return of(undefined);
  }

  /**
   * Clear cart - Observable based
   */
  clearCart$(): Observable<void> {
    const cartItems = this.cartItems();
    if (cartItems.length === 0) return of(undefined);

    const updates$ = cartItems.map((item) =>
      this.update$(item.id, { isInCart: false, isChecked: false })
    );
    return forkJoin(updates$).pipe(map(() => undefined));
  }

  /**
   * Find duplicate items (case-insensitive) and return the IDs to delete
   * Keeps the first occurrence (by createdAt date) of each item name
   */
  findDuplicateIds(): string[] {
    const items = this.groceriesSignal();
    const seen = new Map<string, GroceryItem>();
    const duplicateIds: string[] = [];

    // Sort by createdAt to ensure we keep the oldest item
    const sortedItems = [...items].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    for (const item of sortedItems) {
      const normalizedName = item.name.toLowerCase().trim();
      if (seen.has(normalizedName)) {
        // This is a duplicate - mark for deletion
        duplicateIds.push(item.id);
      } else {
        // First occurrence - keep it
        seen.set(normalizedName, item);
      }
    }

    return duplicateIds;
  }

  /**
   * Remove duplicate grocery items - Observable based
   * Keeps the oldest item for each unique name (case-insensitive)
   */
  removeDuplicates$(): Observable<number> {
    const duplicateIds = this.findDuplicateIds();

    if (duplicateIds.length === 0) {
      console.log('✅ No duplicate items found.');
      return of(0);
    }

    console.log(`🗑️ Removing ${duplicateIds.length} duplicate item(s)...`);

    const deletes$ = duplicateIds.map((id) => this.delete$(id));
    return forkJoin(deletes$).pipe(
      tap(() => console.log(`✅ Removed ${duplicateIds.length} duplicate items.`)),
      map(() => duplicateIds.length)
    );
  }

  /**
   * Reset to seed data - Observable based
   * Also removes any duplicate items that may have been created
   */
  resetToSeedData$(): Observable<void> {
    const groceries = this.groceriesSignal();

    if (groceries.length === 0) {
      this.isSeededSignal.set(false);
      return of(undefined);
    }

    const deletes$ = groceries.map((item) => this.delete$(item.id));

    return forkJoin(deletes$).pipe(
      tap(() => this.isSeededSignal.set(false)),
      map(() => undefined)
    );
  }

  /**
   * Save to history - Observable based
   */
  saveToHistory$(): Observable<void> {
    const userId = this.getCurrentUserId();
    if (!userId) return of(undefined);

    const items = this.cartItems();
    if (items.length === 0) return of(undefined);

    const historyId = `history_${Date.now()}`;
    const docRef = doc(this.firestore, this.HISTORY_COLLECTION, historyId);

    const historyData = {
      id: historyId,
      userId,
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

    return from(setDoc(docRef, historyData));
  }

  private generateId(): string {
    return `grocery_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateCategoryId(name: string): string {
    return `cat_${name.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}`;
  }

  private checkAndMigrateData(userId: string, currentGroceries: GroceryItem[]): void {
    if (this.hasMigratedThisSession) return;

    const SEED_VERSION = 'v18';
    const storedVersion = localStorage.getItem(`homeneeds_seed_version_${userId}`);

    if (storedVersion !== SEED_VERSION) {
      console.log(`Migrating data to ${SEED_VERSION} for user ${userId}...`);
      this.hasMigratedThisSession = true;
      this.migrateMissingSeedData$(currentGroceries).subscribe(() => {
        localStorage.setItem(`homeneeds_seed_version_${userId}`, SEED_VERSION);
      });
    }
  }

  /**
   * Migrate missing seed data - Observable based
   */
  migrateMissingSeedData$(currentItems?: GroceryItem[]): Observable<void> {
    console.log('Checking for missing seed items...');
    const items = currentItems ?? this.groceriesSignal();
    console.log(`Current items count: ${items.length}`);

    const allSeedData = [
      ...PRODUCE_SEED_DATA,
      ...DAIRY_SEED_DATA,
      ...PANTRY_SEED_DATA,
      ...BABY_SEED_DATA,
      ...CLEANING_SEED_DATA,
      ...BAKERY_SEED_DATA,
      ...BEVERAGES_SEED_DATA,
      ...CANNED_SEED_DATA,
      ...CONDIMENTS_SEED_DATA,
      ...DELI_SEED_DATA,
      ...FROZEN_SEED_DATA,
      ...HEALTH_SEED_DATA,
      ...MEAT_SEED_DATA,
      ...PETS_SEED_DATA,
      ...SNACKS_SEED_DATA,
    ];
    console.log(`Total seed data count: ${allSeedData.length}`);

    const normalizedExistingNames = new Set(items.map((i) => i.name.toLowerCase().trim()));

    const missingItems = allSeedData.filter((seedItem) => {
      const normalizedSeedName = seedItem.name.toLowerCase().trim();
      return !normalizedExistingNames.has(normalizedSeedName);
    });

    if (missingItems.length > 0) {
      console.log(`Adding ${missingItems.length} missing items...`);
      // console.log('Missing items:', missingItems.map((i) => i.name).join(', '));

      const creates$ = missingItems.map((item) => this.create$(item));
      return forkJoin(creates$).pipe(
        tap(() => console.log(`✅ Successfully added ${missingItems.length} items`)),
        map(() => undefined)
      );
    } else {
      console.log('✅ All seed items are present.');
      return of(undefined);
    }
  }

  ngOnDestroy(): void {
    this.cleanupSubscriptions();
  }
}
