import { GroceryItem } from './grocery.model';

// Seed data for baby needs items with images from Pexels
export const BABY_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt'>[] = [
  // Diapers & Wipes
  {
    name: 'Diapers (Newborn)',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/E6E6FA/555555?text=Newborn+Diapers',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Diapers (Size 1)',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/E6E6FA/555555?text=Size+1+Diapers',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Diapers (Size 2)',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/E6E6FA/555555?text=Size+2+Diapers',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Diapers (Size 3)',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/E6E6FA/555555?text=Size+3+Diapers',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Wipes',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/F0FFFF/555555?text=Baby+Wipes',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Diaper Rash Cream',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941883/pexels-photo-6941883.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Diaper Disposal Bags',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Baby Food & Formula
  {
    name: 'Baby Formula',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941096/pexels-photo-6941096.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Cereal',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941098/pexels-photo-6941098.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Food Pouches',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941099/pexels-photo-6941099.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Food Jars',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941100/pexels-photo-6941100.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Snacks',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941101/pexels-photo-6941101.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Puffs',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941102/pexels-photo-6941102.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Teething Biscuits',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941103/pexels-photo-6941103.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Water',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Feeding Supplies
  {
    name: 'Baby Bottles',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/FFFACD/555555?text=Baby+Bottles',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bottle Nipples',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/FFFACD/555555?text=Bottle+Nipples',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Sippy Cups',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/3663068/pexels-photo-3663068.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Spoons',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941885/pexels-photo-6941885.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Bowls',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941886/pexels-photo-6941886.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Bibs',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/FFE4E1/555555?text=Baby+Bibs',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bottle Brush',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941887/pexels-photo-6941887.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bottle Sterilizer',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941888/pexels-photo-6941888.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Baby Care & Hygiene
  {
    name: 'Baby Shampoo',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Body Wash',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/3993399/pexels-photo-3993399.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Lotion',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941889/pexels-photo-6941889.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Oil',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941890/pexels-photo-6941890.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Powder',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941891/pexels-photo-6941891.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Sunscreen',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941892/pexels-photo-6941892.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Nail Clippers',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941893/pexels-photo-6941893.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Thermometer',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941894/pexels-photo-6941894.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Nasal Aspirator',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941895/pexels-photo-6941895.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Cotton Balls',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Q-Tips',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/4465125/pexels-photo-4465125.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Health & Medicine
  {
    name: 'Baby Tylenol',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941900/pexels-photo-6941900.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Ibuprofen',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941901/pexels-photo-6941901.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Gripe Water',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941902/pexels-photo-6941902.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Gas Drops',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941903/pexels-photo-6941903.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Teething Gel',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941904/pexels-photo-6941904.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Saline Drops',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941905/pexels-photo-6941905.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Vitamin D Drops',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/6941906/pexels-photo-6941906.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Comfort & Soothing
  {
    name: 'Pacifiers',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/FFB6C1/555555?text=Pacifiers',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Teething Toys',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/FFB6C1/555555?text=Teething+Toys',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Baby Blanket',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/FFE4E1/555555?text=Baby+Blanket',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Swaddle Wrap',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/FFE4E1/555555?text=Swaddle+Wrap',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Burp Cloths',
    category: 'baby',
    imageUrl: 'https://placehold.co/200x200/FFE4E1/555555?text=Burp+Cloths',
    isInCart: false,
    isChecked: false,
  },

  // Laundry
  {
    name: 'Baby Detergent',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Stain Remover',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/4239092/pexels-photo-4239092.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Fabric Softener',
    category: 'baby',
    imageUrl:
      'https://images.pexels.com/photos/4239093/pexels-photo-4239093.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
