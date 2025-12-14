import { GroceryItem } from './grocery.model';

// Seed data for condiments & sauces items with images from Pexels
export const CONDIMENTS_SEED_DATA: Omit<
  GroceryItem,
  'id' | 'createdAt' | 'updatedAt' | 'userId'
>[] = [
  // Classic Condiments
  {
    name: 'Ketchup',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/5900422/pexels-photo-5900422.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mustard',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mayonnaise',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4397919/pexels-photo-4397919.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Relish',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/5945758/pexels-photo-5945758.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Hot Sauces
  {
    name: 'Hot Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/5737380/pexels-photo-5737380.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Sriracha',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/6287533/pexels-photo-6287533.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tabasco',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/5945659/pexels-photo-5945659.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Asian Sauces
  {
    name: 'Soy Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Teriyaki Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Hoisin Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4198029/pexels-photo-4198029.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Fish Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/5945757/pexels-photo-5945757.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Oyster Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4198028/pexels-photo-4198028.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Pasta Sauces
  {
    name: 'Marinara Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Alfredo Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pesto',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // BBQ & Steak Sauces
  {
    name: 'BBQ Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4198036/pexels-photo-4198036.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Steak Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Worcestershire Sauce',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4198027/pexels-photo-4198027.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Dressings
  {
    name: 'Ranch Dressing',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4198031/pexels-photo-4198031.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Italian Dressing',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/5945756/pexels-photo-5945756.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Caesar Dressing',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Balsamic Vinaigrette',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Oils & Vinegars
  {
    name: 'Olive Oil',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Vegetable Oil',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4198035/pexels-photo-4198035.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Balsamic Vinegar',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4198030/pexels-photo-4198030.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Apple Cider Vinegar',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/5945754/pexels-photo-5945754.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Spreads
  {
    name: 'Honey',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Maple Syrup',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4198025/pexels-photo-4198025.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Jam',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/1328887/pexels-photo-1328887.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Peanut Butter',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/4187779/pexels-photo-4187779.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Specialty
  {
    name: 'Hummus',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Salsa',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Guacamole',
    category: 'condiments',
    imageUrl:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
