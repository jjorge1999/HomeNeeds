import { GroceryItem } from './grocery.model';

// Seed data for deli items with images from Pexels
export const DELI_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] = [
  // Deli Meats
  {
    name: 'Ham Slices',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/8753653/pexels-photo-8753653.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Turkey Breast',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Roast Beef',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/6941041/pexels-photo-6941041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Salami',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pepperoni',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bologna',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pastrami',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Prosciutto',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/4198036/pexels-photo-4198036.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Capicola',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/4198028/pexels-photo-4198028.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Corned Beef',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Deli Cheeses
  {
    name: 'Provolone',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'American Cheese',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Muenster Cheese',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pepper Jack',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Prepared Foods
  {
    name: 'Rotisserie Chicken',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Potato Salad',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Coleslaw',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Macaroni Salad',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chicken Salad',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tuna Salad',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/5908058/pexels-photo-5908058.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Sausages & Hot Dogs
  {
    name: 'Hot Dogs',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/4676401/pexels-photo-4676401.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bratwurst',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Italian Sausage',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Breakfast Sausage',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Kielbasa',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/4198028/pexels-photo-4198028.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Bacon
  {
    name: 'Bacon',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Turkey Bacon',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canadian Bacon',
    category: 'deli',
    imageUrl:
      'https://images.pexels.com/photos/8753653/pexels-photo-8753653.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
