import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroceryService } from './grocery.service';
import { ImageService } from './image.service';
import { GroceryItem, CategoryItem, CATEGORY_ICONS, CATEGORY_COLORS } from './grocery.model';

@Component({
  selector: 'app-groceries',
  imports: [CommonModule, FormsModule],
  templateUrl: './groceries.html',
  styleUrl: './groceries.css',
  host: {
    class: 'flex-1 h-screen flex flex-col overflow-hidden',
  },
})
export class GroceriesComponent {
  private groceryService = inject(GroceryService);
  private imageService = inject(ImageService);

  // Expose service signals to template
  groceries = this.groceryService.groceries;
  groceriesByCategory = this.groceryService.groceriesByCategory;
  cartItems = this.groceryService.cartItems;
  checkedItems = this.groceryService.checkedItems;
  uncheckedItems = this.groceryService.uncheckedItems;
  searchQuery = this.groceryService.searchQuery;
  selectedCategory = this.groceryService.selectedCategory;
  sortBy = this.groceryService.sortBy;
  categories = this.groceryService.categories;
  categoryIds = this.groceryService.categoryIds;
  error = this.groceryService.error;
  isLoading = this.groceryService.isLoading;

  // Available icons and colors for category editing
  availableIcons = CATEGORY_ICONS;
  availableColors = CATEGORY_COLORS;

  // Form state - Grocery Items
  newItemName = '';
  showAddModal = false;
  editingItem: GroceryItem | null = null;
  editItemName = '';
  editItemCategory = 'other';
  editItemImageUrl = '';
  isUploadingImage = false;
  showMobileCart = false;

  toggleMobileCart(): void {
    this.showMobileCart = !this.showMobileCart;
  }

  // Form state - Categories
  showCategoryModal = false;
  editingCategory: CategoryItem | null = null;
  editCategoryName = '';
  editCategoryIcon = 'category';
  editCategoryColor = 'text-slate-400';

  // Sort options
  sortOptions: { value: 'name' | 'category' | 'date'; label: string }[] = [
    { value: 'name', label: 'Name' },
    { value: 'category', label: 'Category' },
    { value: 'date', label: 'Date Added' },
  ];
  showSortDropdown = false;

  // ========== Category CRUD ==========

  openAddCategoryModal(): void {
    this.editingCategory = null;
    this.editCategoryName = '';
    this.editCategoryIcon = 'category';
    this.editCategoryColor = 'text-slate-400';
    this.showCategoryModal = true;
  }

  startEditCategory(category: CategoryItem): void {
    if (category.isDefault) return; // Can't edit default categories
    this.editingCategory = category;
    this.editCategoryName = category.name;
    this.editCategoryIcon = category.icon;
    this.editCategoryColor = category.color;
    this.showCategoryModal = true;
  }

  async saveCategory(): Promise<void> {
    if (!this.editCategoryName.trim()) return;

    if (this.editingCategory) {
      // Update existing category
      await this.groceryService.updateCategory(this.editingCategory.id, {
        name: this.editCategoryName.trim(),
        icon: this.editCategoryIcon,
        color: this.editCategoryColor,
      });
    } else {
      // Create new category
      await this.groceryService.createCategory({
        name: this.editCategoryName.trim(),
        icon: this.editCategoryIcon,
        color: this.editCategoryColor,
      });
    }
    this.closeCategoryModal();
  }

  deleteCategory(categoryId: string): void {
    const category = this.groceryService.getCategory(categoryId);
    if (!category || category.isDefault) return;

    // Check item count first
    const itemCount = this.groceryService.getItemCountInCategory(categoryId);
    if (itemCount > 0) {
      alert(
        `Cannot delete category "${category.name}" because it has ${itemCount} item(s). Please move or delete the items first.`
      );
      return;
    }

    if (confirm(`Delete category "${category.name}"?`)) {
      const result = this.groceryService.deleteCategory(categoryId);
      if (!result.success && result.error) {
        alert(result.error);
      }
    }
  }

  closeCategoryModal(): void {
    this.editingCategory = null;
    this.editCategoryName = '';
    this.editCategoryIcon = 'category';
    this.editCategoryColor = 'text-slate-400';
    this.showCategoryModal = false;
  }

  // ========== Image Upload ==========

  async onImageFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    if (!this.imageService.isValidImageFile(file)) {
      alert('Please select a valid image file (JPEG, PNG, GIF, or WebP)');
      return;
    }

    this.isUploadingImage = true;

    try {
      const compressedImage = await this.imageService.compressImage(file);
      this.editItemImageUrl = compressedImage;
    } catch (error) {
      console.error('Error compressing image:', error);
      alert('Failed to process image. Please try again.');
    } finally {
      this.isUploadingImage = false;
      input.value = '';
    }
  }

  removeImage(): void {
    this.editItemImageUrl = '';
  }

  // ========== Search & Filter ==========

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.groceryService.setSearchQuery(input.value);
  }

  onCategoryChange(category: string | 'all'): void {
    this.groceryService.setCategory(category);
  }

  onSortChange(sortBy: 'name' | 'category' | 'date'): void {
    this.groceryService.setSortBy(sortBy);
    this.showSortDropdown = false;
  }

  toggleSortDropdown(): void {
    this.showSortDropdown = !this.showSortDropdown;
  }

  // ========== Grocery Item CRUD ==========

  async addItem(): Promise<void> {
    if (this.newItemName.trim()) {
      await this.groceryService.create({
        name: this.newItemName.trim(),
        category: 'other',
        isInCart: false,
        isChecked: false,
      });
      this.newItemName = '';
    }
  }

  async addItemWithCategory(name: string, category: string): Promise<void> {
    if (name.trim()) {
      await this.groceryService.create({
        name: name.trim(),
        category,
        isInCart: false,
        isChecked: false,
      });
    }
  }

  deleteItem(id: string): void {
    this.groceryService.delete(id);
  }

  startEdit(item: GroceryItem): void {
    this.editingItem = item;
    this.editItemName = item.name;
    this.editItemCategory = item.category;
    this.editItemImageUrl = item.imageUrl || '';
    this.showAddModal = true;
  }

  openAddModal(): void {
    this.editingItem = null;
    this.editItemName = '';
    this.editItemCategory = 'other';
    this.editItemImageUrl = '';
    this.showAddModal = true;
  }

  async saveEdit(): Promise<void> {
    if (this.editItemName.trim()) {
      if (this.editingItem) {
        await this.groceryService.update(this.editingItem.id, {
          name: this.editItemName.trim(),
          category: this.editItemCategory,
          imageUrl: this.editItemImageUrl.trim() || undefined,
        });
      } else {
        await this.groceryService.create({
          name: this.editItemName.trim(),
          category: this.editItemCategory,
          imageUrl: this.editItemImageUrl.trim() || undefined,
          isInCart: false,
          isChecked: false,
        });
      }
      this.cancelEdit();
    }
  }

  cancelEdit(): void {
    this.editingItem = null;
    this.editItemName = '';
    this.editItemCategory = 'other';
    this.editItemImageUrl = '';
    this.showAddModal = false;
  }

  // ========== Cart Operations ==========

  async addToCart(id: string): Promise<void> {
    await this.groceryService.addToCart(id);
  }

  async removeFromCart(id: string): Promise<void> {
    await this.groceryService.removeFromCart(id);
  }

  async toggleChecked(id: string): Promise<void> {
    await this.groceryService.toggleChecked(id);
  }

  async clearCart(): Promise<void> {
    await this.groceryService.clearCart();
  }

  async checkout(): Promise<void> {
    if (this.cartItems().length === 0) return;

    if (confirm('Complete shopping trip and save to history?')) {
      try {
        await this.groceryService.saveToHistory();
        await this.groceryService.clearCart();
      } catch (err) {
        console.error('Checkout failed', err);
        alert('Failed to save history. Please check your connection.');
      }
    }
  }

  // ========== Helper Methods ==========

  getCategoryLabel(categoryId: string): string {
    return this.groceryService.getCategoryLabel(categoryId);
  }

  getCategoryIcon(categoryId: string): string {
    return this.groceryService.getCategoryIcon(categoryId);
  }

  getCategoryColor(categoryId: string): string {
    return this.groceryService.getCategoryColor(categoryId);
  }

  getItemCount(categoryId: string): number {
    return this.groceriesByCategory()[categoryId]?.length || 0;
  }

  getTotalCartItems(): number {
    return this.cartItems().length;
  }

  getProgress(): number {
    const total = this.cartItems().length;
    if (total === 0) return 0;
    return (this.checkedItems().length / total) * 100;
  }

  isDefaultCategory(categoryId: string): boolean {
    const category = this.groceryService.getCategory(categoryId);
    return category?.isDefault ?? false;
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://placehold.co/200x200/cccccc/ffffff?text=No+Image';
  }

  async resetData(): Promise<void> {
    if (confirm('This will reset all grocery data to the default seed data. Continue?')) {
      await this.groceryService.resetToSeedData();
    }
  }
}
