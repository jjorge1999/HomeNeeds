import { GroceryItem } from './grocery.model';

// Seed data for produce items with images from reliable sources
export const PRODUCE_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] = [
  // Fruits
  {
    name: 'Red Apples',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bananas',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Oranges',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Strawberries',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Blueberries',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Grapes',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Lemons',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Limes',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1435736/pexels-photo-1435736.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Watermelon',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pineapple',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mangoes',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Avocados',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Peaches',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pears',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cherries',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/175727/pexels-photo-175727.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Kiwi',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Raspberries',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/892808/pexels-photo-892808.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Pomegranate',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-65256.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Grapefruit',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1171170/pexels-photo-1171170.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Coconut',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1030973/pexels-photo-1030973.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },

  // Vegetables
  {
    name: 'Broccoli',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Carrots',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Spinach',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Tomatoes',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cucumbers',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/37528/cucumber-salad-food-healthy-37528.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Bell Peppers',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Onions',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Garlic',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Potatoes',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Sweet Potatoes',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Lettuce',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cabbage',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/2518893/pexels-photo-2518893.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Cauliflower',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Zucchini',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Eggplant',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Green Beans',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/63286/peas-green-beans-vegetables-63286.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Asparagus',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/351679/pexels-photo-351679.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Celery',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Mushrooms',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/36438/mushrooms-brown-mushrooms-cook-eat.jpg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Corn',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Ginger',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Fresh Basil',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/1171182/pexels-photo-1171182.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Green Onions',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/4197447/pexels-photo-4197447.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Red Cabbage',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/6316517/pexels-photo-6316517.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
  {
    name: 'Radishes',
    category: 'produce',
    imageUrl:
      'https://images.pexels.com/photos/244393/pexels-photo-244393.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    isInCart: false,
    isChecked: false,
  },
];
