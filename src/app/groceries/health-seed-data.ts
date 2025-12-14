import { GroceryItem } from './grocery.model';

// Seed data for health & personal care items with images from Pexels
export const HEALTH_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] = [
  // Oral Care
  {
    name: 'Toothpaste',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Toothbrush',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3762880/pexels-photo-3762880.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mouthwash',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Dental Floss',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4465127/pexels-photo-4465127.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Hair Care
  {
    name: 'Shampoo',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Conditioner',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3735217/pexels-photo-3735217.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Hair Gel',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Hair Spray',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Body Care
  {
    name: 'Body Wash',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bar Soap',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3737586/pexels-photo-3737586.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Body Lotion',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Deodorant',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Hand Soap',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Hand Sanitizer',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3987142/pexels-photo-3987142.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Skin Care
  {
    name: 'Face Wash',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Moisturizer',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Sunscreen',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Lip Balm',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3997374/pexels-photo-3997374.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Shaving
  {
    name: 'Razors',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3771109/pexels-photo-3771109.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Shaving Cream',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Aftershave',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3771122/pexels-photo-3771122.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Medicine & First Aid
  {
    name: 'Pain Reliever',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cold Medicine',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Allergy Medicine',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Antacid',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bandages',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'First Aid Kit',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Vitamins',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Feminine Care
  {
    name: 'Feminine Pads',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tampons',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Tissues & Cotton
  {
    name: 'Tissues',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cotton Balls',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cotton Swabs',
    category: 'health',
    imageUrl:
      'https://images.pexels.com/photos/4465127/pexels-photo-4465127.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
