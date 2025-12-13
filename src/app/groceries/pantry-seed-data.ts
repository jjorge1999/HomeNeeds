import { GroceryItem } from './grocery.model';

// Seed data for pantry items with images from Pexels
export const PANTRY_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] = [
  // Pasta & Grains
  {
    name: 'Spaghetti',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Penne Pasta',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Macaroni',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4518710/pexels-photo-4518710.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Jasmine Rice',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Brown Rice',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4110377/pexels-photo-4110377.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Quinoa',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/6740535/pexels-photo-6740535.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Oatmeal',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/216951/pexels-photo-216951.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bread Crumbs',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4110476/pexels-photo-4110476.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Canned Goods
  {
    name: 'Canned Tomatoes',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5945755/pexels-photo-5945755.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tomato Sauce',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198012/pexels-photo-4198012.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tomato Paste',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5945757/pexels-photo-5945757.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Black Beans',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Kidney Beans',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chickpeas',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Corn',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/7469406/pexels-photo-7469406.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Canned Tuna',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5718026/pexels-photo-5718026.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chicken Broth',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5938358/pexels-photo-5938358.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Vegetable Broth',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5938356/pexels-photo-5938356.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Coconut Milk (Canned)',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4202490/pexels-photo-4202490.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Oils & Vinegars
  {
    name: 'Olive Oil',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/1022385/pexels-photo-1022385.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Vegetable Oil',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4202482/pexels-photo-4202482.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Coconut Oil',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4202486/pexels-photo-4202486.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Balsamic Vinegar',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198037/pexels-photo-4198037.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Apple Cider Vinegar',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/6957100/pexels-photo-6957100.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Soy Sauce',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4518578/pexels-photo-4518578.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Baking Essentials
  {
    name: 'All-Purpose Flour',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5765/flour-powder-wheat-jar.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Whole Wheat Flour',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Sugar',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/2523650/pexels-photo-2523650.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Brown Sugar',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4110521/pexels-photo-4110521.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Powdered Sugar',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5946613/pexels-photo-5946613.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baking Soda',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5946608/pexels-photo-5946608.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baking Powder',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5946610/pexels-photo-5946610.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Vanilla Extract',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5946611/pexels-photo-5946611.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cocoa Powder',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chocolate Chips',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Yeast',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5946612/pexels-photo-5946612.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Sweeteners & Spreads
  {
    name: 'Honey',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/302163/pexels-photo-302163.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Maple Syrup',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/7474239/pexels-photo-7474239.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Peanut Butter',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5469076/pexels-photo-5469076.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Almond Butter',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5469079/pexels-photo-5469079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Jam/Jelly',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/1638927/pexels-photo-1638927.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Nutella',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4110533/pexels-photo-4110533.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Spices & Seasonings
  {
    name: 'Salt',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/3296398/pexels-photo-3296398.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Black Pepper',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198056/pexels-photo-4198056.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Garlic Powder',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198051/pexels-photo-4198051.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Onion Powder',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198053/pexels-photo-4198053.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Paprika',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198054/pexels-photo-4198054.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cumin',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198060/pexels-photo-4198060.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cinnamon',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198055/pexels-photo-4198055.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Italian Seasoning',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198057/pexels-photo-4198057.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Chili Powder',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198059/pexels-photo-4198059.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Oregano',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198062/pexels-photo-4198062.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bay Leaves',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198064/pexels-photo-4198064.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Condiments & Sauces
  {
    name: 'Ketchup',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5945565/pexels-photo-5945565.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mustard',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5945566/pexels-photo-5945566.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mayonnaise',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4397921/pexels-photo-4397921.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Hot Sauce',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198048/pexels-photo-4198048.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'BBQ Sauce',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198047/pexels-photo-4198047.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Worcestershire Sauce',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198044/pexels-photo-4198044.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Nuts & Dried Fruits
  {
    name: 'Almonds',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/1013420/pexels-photo-1013420.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Walnuts',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4202493/pexels-photo-4202493.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cashews',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4202491/pexels-photo-4202491.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Raisins',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198033/pexels-photo-4198033.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Dried Cranberries',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4198031/pexels-photo-4198031.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Snacks & Cereals
  {
    name: 'Cereal',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/135525/pexels-photo-135525.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Granola',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/3872433/pexels-photo-3872433.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Crackers',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/4110452/pexels-photo-4110452.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tortilla Chips',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5737254/pexels-photo-5737254.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Popcorn',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Beverages
  {
    name: 'Coffee',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tea',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Hot Chocolate Mix',
    category: 'pantry',
    imageUrl:
      'https://images.pexels.com/photos/5946618/pexels-photo-5946618.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
