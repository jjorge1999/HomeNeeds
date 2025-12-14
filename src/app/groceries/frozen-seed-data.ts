import { GroceryItem } from './grocery.model';

// Seed data for frozen foods items with images from Pexels
export const FROZEN_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] = [
  // Frozen Vegetables
  {
    name: 'Frozen Peas',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/6316668/pexels-photo-6316668.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Corn',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Broccoli',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1359326/pexels-photo-1359326.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mixed Vegetables',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Spinach',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Green Beans',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Stir Fry Vegetables',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Frozen Fruits
  {
    name: 'Frozen Berries',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Strawberries',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Blueberries',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Mango',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Ice Cream & Desserts
  {
    name: 'Vanilla Ice Cream',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chocolate Ice Cream',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Ice Cream Bars',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1294943/pexels-photo-1294943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Yogurt',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Pie',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Popsicles',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1294942/pexels-photo-1294942.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Frozen Meals
  {
    name: 'Frozen Pizza',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Lasagna',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'TV Dinners',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Burritos',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pot Pies',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Frozen Meats & Seafood
  {
    name: 'Frozen Chicken Breasts',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Ground Beef',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/6941041/pexels-photo-6941041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Shrimp',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Fish Fillets',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Fish Sticks',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/4553028/pexels-photo-4553028.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Frozen Appetizers & Snacks
  {
    name: 'Frozen French Fries',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tater Tots',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chicken Nuggets',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mozzarella Sticks',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Egg Rolls',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Dumplings',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Frozen Breakfast
  {
    name: 'Frozen Waffles',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Frozen Pancakes',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Breakfast Sandwiches',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Hash Browns',
    category: 'frozen',
    imageUrl:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
