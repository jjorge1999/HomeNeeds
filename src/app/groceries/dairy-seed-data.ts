import { GroceryItem } from './grocery.model';

// Seed data for dairy & eggs items with images from Pexels
export const DAIRY_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt'>[] = [
  // Milk & Cream
  {
    name: 'Whole Milk',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: '2% Reduced Fat Milk',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/2198626/pexels-photo-2198626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Skim Milk',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Heavy Cream',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Half & Half',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Almond Milk',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/3735180/pexels-photo-3735180.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Oat Milk',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/5946627/pexels-photo-5946627.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Coconut Milk',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4202490/pexels-photo-4202490.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Eggs
  {
    name: 'Large Eggs',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Organic Free Range Eggs',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/6941041/pexels-photo-6941041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Egg Whites',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Brown Eggs',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4045570/pexels-photo-4045570.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Cheese
  {
    name: 'Cheddar Cheese',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mozzarella',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Parmesan',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4187779/pexels-photo-4187779.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Swiss Cheese',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cream Cheese',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4397919/pexels-photo-4397919.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Feta Cheese',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4197908/pexels-photo-4197908.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Blue Cheese',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Goat Cheese',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4198041/pexels-photo-4198041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Brie',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/6287530/pexels-photo-6287530.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cottage Cheese',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/5946609/pexels-photo-5946609.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Ricotta',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/6287535/pexels-photo-6287535.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Shredded Cheese',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'String Cheese',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Butter & Spreads
  {
    name: 'Butter',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/531334/pexels-photo-531334.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Unsalted Butter',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Margarine',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4397916/pexels-photo-4397916.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Yogurt
  {
    name: 'Greek Yogurt',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/1435706/pexels-photo-1435706.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Plain Yogurt',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Flavored Yogurt',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4051580/pexels-photo-4051580.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Yogurt Drinks',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Sour Cream & Dips
  {
    name: 'Sour Cream',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/4397923/pexels-photo-4397923.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Whipped Cream',
    category: 'dairy',
    imageUrl:
      'https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
