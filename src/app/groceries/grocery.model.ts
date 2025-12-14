export interface GroceryItem {
  id: string;
  userId: string; // Owner of this grocery item
  name: string;
  category: string; // Now supports dynamic categories
  imageUrl?: string;
  isInCart: boolean;
  isChecked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryItem {
  id: string;
  userId: string; // Owner of this category
  name: string;
  icon: string;
  color: string;
  isDefault: boolean;
  createdAt: Date;
}

// Default categories that cannot be deleted - shared across all users
export const DEFAULT_CATEGORIES: CategoryItem[] = [
  {
    id: 'produce',
    userId: 'system', // System-level default, available to all users
    name: 'Produce',
    icon: 'nutrition',
    color: 'text-green-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'dairy',
    userId: 'system',
    name: 'Dairy & Eggs',
    icon: 'water_drop',
    color: 'text-blue-400',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'meat',
    userId: 'system',
    name: 'Meat & Seafood',
    icon: 'set_meal',
    color: 'text-red-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'frozen',
    userId: 'system',
    name: 'Frozen Foods',
    icon: 'ac_unit',
    color: 'text-indigo-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'bakery',
    userId: 'system',
    name: 'Bakery & Bread',
    icon: 'bakery_dining',
    color: 'text-amber-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'beverages',
    userId: 'system',
    name: 'Beverages',
    icon: 'local_cafe',
    color: 'text-orange-600',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'snacks',
    userId: 'system',
    name: 'Snacks',
    icon: 'cookie',
    color: 'text-yellow-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'canned',
    userId: 'system',
    name: 'Canned Goods',
    icon: 'inventory_2',
    color: 'text-gray-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'condiments',
    userId: 'system',
    name: 'Condiments & Sauces',
    icon: 'kebab_dining',
    color: 'text-rose-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'pantry',
    userId: 'system',
    name: 'Pantry',
    icon: 'soup_kitchen',
    color: 'text-orange-400',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'baby',
    userId: 'system',
    name: 'Baby Needs',
    icon: 'child_care',
    color: 'text-pink-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'health',
    userId: 'system',
    name: 'Health & Personal Care',
    icon: 'health_and_safety',
    color: 'text-purple-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'pets',
    userId: 'system',
    name: 'Pet Supplies',
    icon: 'pets',
    color: 'text-teal-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'deli',
    userId: 'system',
    name: 'Deli',
    icon: 'lunch_dining',
    color: 'text-lime-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'cleaning',
    userId: 'system',
    name: 'Cleaning Items',
    icon: 'cleaning_services',
    color: 'text-cyan-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'other',
    userId: 'system',
    name: 'Other',
    icon: 'category',
    color: 'text-slate-400',
    isDefault: true,
    createdAt: new Date(),
  },
];

// Available icons for category selection
export const CATEGORY_ICONS = [
  'nutrition',
  'water_drop',
  'soup_kitchen',
  'category',
  'local_dining',
  'bakery_dining',
  'icecream',
  'liquor',
  'coffee',
  'lunch_dining',
  'restaurant',
  'fastfood',
  'ramen_dining',
  'set_meal',
  'egg',
  'cake',
  'cookie',
  'local_pizza',
  'kebab_dining',
  'rice_bowl',
  'cleaning_services',
  'child_care',
];

// Available colors for category selection
export const CATEGORY_COLORS = [
  'text-green-500',
  'text-blue-400',
  'text-orange-400',
  'text-slate-400',
  'text-red-500',
  'text-purple-500',
  'text-pink-500',
  'text-yellow-500',
  'text-teal-500',
  'text-indigo-500',
  'text-cyan-500',
  'text-lime-500',
];
