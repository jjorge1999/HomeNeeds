import { GroceryItem } from './grocery.model';

// Seed data for meat & seafood items with images from Pexels
export const MEAT_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] = [
  // Beef
  {
    name: 'Ground Beef',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/6941041/pexels-photo-6941041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Beef Steak',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Ribeye Steak',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Beef Roast',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Beef Ribs',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Beef Stew Meat',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Chicken
  {
    name: 'Whole Chicken',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chicken Breast',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chicken Thighs',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chicken Wings',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chicken Drumsticks',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Ground Chicken',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/6941041/pexels-photo-6941041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Pork
  {
    name: 'Pork Chops',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pork Tenderloin',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/8753653/pexels-photo-8753653.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Ground Pork',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/6941041/pexels-photo-6941041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pork Ribs',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pork Belly',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Turkey
  {
    name: 'Ground Turkey',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/6941041/pexels-photo-6941041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Turkey Breast',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Lamb
  {
    name: 'Lamb Chops',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Ground Lamb',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/6941041/pexels-photo-6941041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Seafood - Fish
  {
    name: 'Salmon Fillet',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tilapia',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cod Fillet',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/4553028/pexels-photo-4553028.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tuna Steak',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/5908058/pexels-photo-5908058.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Trout',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Catfish',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/4553028/pexels-photo-4553028.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Seafood - Shellfish
  {
    name: 'Shrimp',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Crab Legs',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Lobster',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Scallops',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mussels',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Clams',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Oysters',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Calamari',
    category: 'meat',
    imageUrl:
      'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
