import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroceryService } from './grocery.service';
import { ImageService } from './image.service';
import { GroceryItem, CategoryItem, CATEGORY_ICONS, CATEGORY_COLORS } from './grocery.model';
import { OverviewService } from '../overview/overview.service';
import { DialogService } from '../shared/dialog/dialog.service';
import { LoadingService } from '../shared/loading';

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
  private dialogService = inject(DialogService);
  private overviewService = inject(OverviewService);
  private loadingService = inject(LoadingService);

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
  isAddingFromSidebar = false;
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

  saveCategory(): void {
    if (!this.editCategoryName.trim()) return;

    this.loadingService.show('Saving category...');

    if (this.editingCategory) {
      // Update existing category
      this.groceryService
        .updateCategory$(this.editingCategory.id, {
          name: this.editCategoryName.trim(),
          icon: this.editCategoryIcon,
          color: this.editCategoryColor,
        })
        .subscribe({
          next: () => {
            this.loadingService.hide();
            this.closeCategoryModal();
          },
          error: () => this.loadingService.hide(),
        });
    } else {
      // Create new category
      this.groceryService
        .createCategory$({
          name: this.editCategoryName.trim(),
          icon: this.editCategoryIcon,
          color: this.editCategoryColor,
        })
        .subscribe({
          next: () => {
            this.loadingService.hide();
            this.closeCategoryModal();
          },
          error: () => this.loadingService.hide(),
        });
    }
  }

  deleteCategory(categoryId: string): void {
    const category = this.groceryService.getCategory(categoryId);
    if (!category || category.isDefault) return;

    // Check item count first
    const itemCount = this.groceryService.getItemCountInCategory(categoryId);
    if (itemCount > 0) {
      this.dialogService
        .alert$(
          `Cannot delete category "${category.name}" because it has ${itemCount} item(s). Please move or delete the items first.`
        )
        .subscribe();
      return;
    }

    this.dialogService
      .confirm$(`Delete category "${category.name}"?`, 'Delete Category')
      .subscribe((confirmed) => {
        if (confirmed) {
          const result = this.groceryService.deleteCategory(categoryId);
          if (!result.success && result.error) {
            this.dialogService.alert$(result.error).subscribe();
          }
        }
      });
  }

  closeCategoryModal(): void {
    this.editingCategory = null;
    this.editCategoryName = '';
    this.editCategoryIcon = 'category';
    this.editCategoryColor = 'text-slate-400';
    this.showCategoryModal = false;
  }

  // ========== Image Upload ==========

  onImageFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    if (!this.imageService.isValidImageFile(file)) {
      this.dialogService
        .alert$('Please select a valid image file (JPEG, PNG, GIF, or WebP)')
        .subscribe();
      return;
    }

    this.isUploadingImage = true;
    this.loadingService.show('Processing image...');

    this.imageService
      .compressImage(file)
      .then((compressedImage) => {
        this.editItemImageUrl = compressedImage;
      })
      .catch((error) => {
        console.error('Error compressing image:', error);
        this.dialogService.alert$('Failed to process image. Please try again.').subscribe();
      })
      .finally(() => {
        this.isUploadingImage = false;
        this.loadingService.hide();
        input.value = '';
      });
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

  addItem(): void {
    if (this.newItemName.trim()) {
      this.groceryService
        .create$({
          name: this.newItemName.trim(),
          category: 'other',
          isInCart: false,
          isChecked: false,
        })
        .subscribe({
          next: () => {
            this.newItemName = '';
          },
          error: (err) => {
            this.dialogService.alert$(err.message).subscribe();
          },
        });
    }
  }

  addItemWithCategory(name: string, category: string): void {
    if (name.trim()) {
      this.groceryService
        .create$({
          name: name.trim(),
          category,
          isInCart: false,
          isChecked: false,
        })
        .subscribe({
          error: (err) => {
            this.dialogService.alert$(err.message).subscribe();
          },
        });
    }
  }

  deleteItem(id: string): void {
    this.groceryService.delete$(id).subscribe();
  }

  startEdit(item: GroceryItem): void {
    this.editingItem = item;
    this.editItemName = item.name;
    this.editItemCategory = item.category;
    this.editItemImageUrl = item.imageUrl || '';
    this.showAddModal = true;
  }

  openAddModal(fromSidebar: boolean = false): void {
    this.isAddingFromSidebar = fromSidebar;
    this.editingItem = null;
    this.editItemName = '';
    this.editItemCategory = 'other';
    this.editItemImageUrl = '';
    this.showAddModal = true;
  }

  saveEdit(): void {
    if (this.editItemName.trim()) {
      this.loadingService.show('Saving...');

      if (this.editingItem) {
        this.groceryService
          .update$(this.editingItem.id, {
            name: this.editItemName.trim(),
            category: this.editItemCategory,
            imageUrl: this.editItemImageUrl.trim() || undefined,
          })
          .subscribe({
            next: () => {
              this.loadingService.hide();
              this.cancelEdit();
            },
            error: (err) => {
              this.loadingService.hide();
              this.dialogService.alert$(err.message).subscribe();
            },
          });
      } else {
        this.groceryService
          .create$({
            name: this.editItemName.trim(),
            category: this.editItemCategory,
            imageUrl: this.editItemImageUrl.trim() || undefined,
            isInCart: this.isAddingFromSidebar,
            isChecked: false,
          })
          .subscribe({
            next: () => {
              if (this.isAddingFromSidebar) {
                this.createOverviewTask(
                  this.editItemName.trim(),
                  this.editItemImageUrl.trim() || undefined
                );
              }
              this.loadingService.hide();
              this.cancelEdit();
            },
            error: (err) => {
              this.loadingService.hide();
              this.dialogService.alert$(err.message).subscribe();
            },
          });
      }
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

  addToCart(id: string): void {
    this.groceryService.addToCart$(id).subscribe(() => {
      const item = this.groceries().find((i) => i.id === id);
      if (item) {
        this.createOverviewTask(item.name, item.imageUrl);
      }
    });
  }

  removeFromCart(id: string): void {
    const item = this.groceries().find((i) => i.id === id);
    this.groceryService.removeFromCart$(id).subscribe(() => {
      if (item) {
        this.removeOverviewTask(item.name);
      }
    });
  }

  toggleChecked(id: string): void {
    this.groceryService.toggleChecked$(id).subscribe();
  }

  clearCart(): void {
    const itemsToRemove = this.cartItems();
    this.loadingService.show('Clearing cart...');

    this.groceryService.clearCart$().subscribe({
      next: () => {
        for (const item of itemsToRemove) {
          this.removeOverviewTask(item.name);
        }
        this.loadingService.hide();
      },
      error: () => this.loadingService.hide(),
    });
  }

  checkout(): void {
    if (this.cartItems().length === 0) return;

    this.dialogService
      .confirm$('Complete shopping trip and save to history?', 'Checkout')
      .subscribe((confirmed) => {
        if (confirmed) {
          this.loadingService.show('Saving to history...');

          this.groceryService.saveToHistory$().subscribe({
            next: () => {
              this.groceryService.clearCart$().subscribe({
                next: () => this.loadingService.hide(),
                error: () => this.loadingService.hide(),
              });
            },
            error: (err) => {
              console.error('Checkout failed', err);
              this.loadingService.hide();
              this.dialogService
                .alert$('Failed to save history. Please check your connection.')
                .subscribe();
            },
          });
        }
      });
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

  resetData(): void {
    this.dialogService
      .confirm$(
        'This will reset all grocery data to the default seed data. Continue?',
        'Reset Data'
      )
      .subscribe((confirmed) => {
        if (confirmed) {
          this.loadingService.show('Resetting data...');
          this.groceryService.resetToSeedData$().subscribe({
            next: () => this.loadingService.hide(),
            error: () => this.loadingService.hide(),
          });
        }
      });
  }

  removeDuplicates(): void {
    const duplicateCount = this.groceryService.findDuplicateIds().length;

    if (duplicateCount === 0) {
      this.dialogService.alert$('No duplicate items found.').subscribe();
      return;
    }

    this.dialogService
      .confirm$(`Found ${duplicateCount} duplicate item(s). Remove them?`, 'Remove Duplicates')
      .subscribe((confirmed) => {
        if (confirmed) {
          this.loadingService.show('Removing duplicates...');
          this.groceryService.removeDuplicates$().subscribe({
            next: (count) => {
              this.loadingService.hide();
              this.dialogService.alert$(`Removed ${count} duplicate item(s).`).subscribe();
            },
            error: (err) => {
              this.loadingService.hide();
              this.dialogService.alert$(err.message).subscribe();
            },
          });
        }
      });
  }

  private createOverviewTask(title: string, imageUrl?: string): void {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 3);

    this.overviewService
      .createTask$({
        title: title,
        category: 'groceries',
        isCompleted: false,
        dueDate: dueDate,
        imageUrl: imageUrl,
      })
      .subscribe();
  }

  private removeOverviewTask(title: string): void {
    const tasks = this.overviewService.tasks();
    const task = tasks.find((t) => t.title === title && t.category === 'groceries');
    if (task) {
      this.overviewService.deleteTask$(task.id).subscribe();
    }
  }
}
