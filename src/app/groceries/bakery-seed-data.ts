import { GroceryItem } from './grocery.model';

// Seed data for bakery & bread items with images from Pexels
export const BAKERY_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] = [
  // Breads
  {
    name: 'White Bread',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Whole Wheat Bread',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Sourdough Bread',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'French Baguette',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Ciabatta',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1387070/pexels-photo-1387070.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Rye Bread',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1756062/pexels-photo-1756062.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Multigrain Bread',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1510684/pexels-photo-1510684.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Brioche',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Rolls & Buns
  {
    name: 'Hamburger Buns',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Hot Dog Buns',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/4676401/pexels-photo-4676401.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Dinner Rolls',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/2280573/pexels-photo-2280573.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Kaiser Rolls',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Pastries & Sweet Breads
  {
    name: 'Croissants',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/3724354/pexels-photo-3724354.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Danish Pastry',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cinnamon Rolls',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/267308/pexels-photo-267308.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Muffins',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1657343/pexels-photo-1657343.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Donuts',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Scones',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bagels',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'English Muffins',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Flatbreads & Wraps
  {
    name: 'Pita Bread',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Naan Bread',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tortillas',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/5737254/pexels-photo-5737254.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Flatbread',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Wraps',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Cakes & Desserts
  {
    name: 'Cake',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cupcakes',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Brownies',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cookies',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pie',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Specialty
  {
    name: 'Breadsticks',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1435901/pexels-photo-1435901.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Garlic Bread',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Focaccia',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/5419268/pexels-photo-5419268.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pretzel',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/40801/pretzel-baked-goods-eat-pastries-40801.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cornbread',
    category: 'bakery',
    imageUrl:
      'https://images.pexels.com/photos/9510029/pexels-photo-9510029.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
