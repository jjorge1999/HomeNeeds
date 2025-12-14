import { GroceryItem } from './grocery.model';

// Seed data for beverages items with images from Pexels
export const BEVERAGES_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] =
  [
    // Water
    {
      name: 'Bottled Water',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Sparkling Water',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/2479614/pexels-photo-2479614.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Mineral Water',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Flavored Water',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1484669/pexels-photo-1484669.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Soft Drinks
    {
      name: 'Cola',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Lemon-Lime Soda',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Ginger Ale',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Root Beer',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/4553027/pexels-photo-4553027.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Orange Soda',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/2668308/pexels-photo-2668308.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Juices
    {
      name: 'Orange Juice',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/158053/fresh-orange-juice-squeezed-refreshing-citrus-158053.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Apple Juice',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Grape Juice',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/3028500/pexels-photo-3028500.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Cranberry Juice',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Pineapple Juice',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1536868/pexels-photo-1536868.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Tomato Juice',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Mixed Fruit Juice',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Lemonade',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Coffee & Tea
    {
      name: 'Ground Coffee',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Coffee Beans',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Instant Coffee',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Coffee Pods',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Black Tea',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Green Tea',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Herbal Tea',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1549686/pexels-photo-1549686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Chamomile Tea',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Iced Tea',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Energy & Sports Drinks
    {
      name: 'Energy Drink',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Sports Drink',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/3621168/pexels-photo-3621168.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Electrolyte Drink',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Hot Beverages
    {
      name: 'Hot Chocolate',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/3551717/pexels-photo-3551717.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Cocoa Powder',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Smoothies & Shakes
    {
      name: 'Smoothie Mix',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Protein Shake',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/3735792/pexels-photo-3735792.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Specialty
    {
      name: 'Coconut Water',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1030973/pexels-photo-1030973.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Kombucha',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/4553036/pexels-photo-4553036.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Tonic Water',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Club Soda',
      category: 'beverages',
      imageUrl:
        'https://images.pexels.com/photos/2531184/pexels-photo-2531184.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
  ];
