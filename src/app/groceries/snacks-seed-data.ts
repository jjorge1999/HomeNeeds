import { GroceryItem } from './grocery.model';

// Seed data for snacks items with images from Pexels
export const SNACKS_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] = [
  // Chips
  {
    name: 'Potato Chips',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tortilla Chips',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/5737380/pexels-photo-5737380.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Corn Chips',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Veggie Chips',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Kettle Chips',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Crackers
  {
    name: 'Saltine Crackers',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Graham Crackers',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cheese Crackers',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Rice Crackers',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Cookies
  {
    name: 'Chocolate Chip Cookies',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Oreos',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Butter Cookies',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Oatmeal Cookies',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Nuts & Seeds
  {
    name: 'Mixed Nuts',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Peanuts',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Almonds',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cashews',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Sunflower Seeds',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Trail Mix',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Popcorn
  {
    name: 'Microwave Popcorn',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Caramel Popcorn',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cheese Popcorn',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Candy & Chocolate
  {
    name: 'Chocolate Bar',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Gummy Bears',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Hard Candy',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Licorice',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mints',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Bars
  {
    name: 'Granola Bars',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Protein Bars',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cereal Bars',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Fruit Bars',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Dried Fruit
  {
    name: 'Raisins',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Dried Mango',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Dried Apricots',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Fruit Snacks',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Miscellaneous
  {
    name: 'Pretzels',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/40801/pretzel-baked-goods-eat-pastries-40801.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Beef Jerky',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Rice Cakes',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cheese Puffs',
    category: 'snacks',
    imageUrl:
      'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
