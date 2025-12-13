export interface GroceryItem {
  id: string;
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
  name: string;
  icon: string;
  color: string;
  isDefault: boolean;
  createdAt: Date;
}

// Default categories that cannot be deleted
export const DEFAULT_CATEGORIES: CategoryItem[] = [
  {
    id: 'produce',
    name: 'Produce',
    icon: 'nutrition',
    color: 'text-green-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'dairy',
    name: 'Dairy & Eggs',
    icon: 'water_drop',
    color: 'text-blue-400',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'pantry',
    name: 'Pantry',
    icon: 'soup_kitchen',
    color: 'text-orange-400',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'baby',
    name: 'Baby Needs',
    icon: 'child_care',
    color: 'text-pink-500',
    isDefault: true,
    createdAt: new Date(),
  },
  {
    id: 'other',
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
