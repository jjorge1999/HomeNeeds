import { GroceryItem } from './grocery.model';

// Seed data for canned goods items with images from Pexels
export const CANNED_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] = [
  // Canned Vegetables
  {
    name: 'Canned Corn',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Green Beans',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Peas',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/6316668/pexels-photo-6316668.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Carrots',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Mushrooms',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/36438/mushrooms-brown-mushrooms-cook-eat.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Tomatoes',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tomato Paste',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/4197447/pexels-photo-4197447.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tomato Sauce',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/6287520/pexels-photo-6287520.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Artichokes',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Olives',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/4109900/pexels-photo-4109900.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Canned Beans & Legumes
  {
    name: 'Canned Black Beans',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/4198171/pexels-photo-4198171.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Kidney Beans',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/6824475/pexels-photo-6824475.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Chickpeas',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/6316514/pexels-photo-6316514.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baked Beans',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/6287276/pexels-photo-6287276.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Lentils',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/8108102/pexels-photo-8108102.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Refried Beans',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Canned Fruits
  {
    name: 'Canned Peaches',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/5945660/pexels-photo-5945660.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Pears',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Pineapple',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/1071878/pexels-photo-1071878.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Mandarin Oranges',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Fruit Cocktail',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Cherries',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/175727/pexels-photo-175727.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Canned Meat & Seafood
  {
    name: 'Canned Tuna',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/5908058/pexels-photo-5908058.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Salmon',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Sardines',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/4553028/pexels-photo-4553028.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Chicken',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Ham',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/8753653/pexels-photo-8753653.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Spam',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Crab',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Soups & Broths
  {
    name: 'Chicken Soup',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tomato Soup',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Vegetable Soup',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chicken Broth',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/6072054/pexels-photo-6072054.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Beef Broth',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Vegetable Broth',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Specialty
  {
    name: 'Coconut Milk (Canned)',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/4202490/pexels-photo-4202490.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Evaporated Milk',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/4397917/pexels-photo-4397917.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Condensed Milk',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Pumpkin',
    category: 'canned',
    imageUrl:
      'https://images.pexels.com/photos/5419268/pexels-photo-5419268.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
