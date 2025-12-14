import { GroceryItem } from './grocery.model';

// Seed data for cleaning items with images from Pexels
export const CLEANING_SEED_DATA: Omit<GroceryItem, 'id' | 'createdAt' | 'updatedAt' | 'userId'>[] =
  [
    // General Cleaning
    {
      name: 'All-Purpose Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Glass Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Disinfectant Spray',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Bleach',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Floor Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Bathroom Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Toilet Bowl Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239038/pexels-photo-4239038.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Tile & Grout Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Oven Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239039/pexels-photo-4239039.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Stainless Steel Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239040/pexels-photo-4239040.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Laundry
    {
      name: 'Laundry Detergent',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Fabric Softener',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239092/pexels-photo-4239092.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Stain Remover',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239093/pexels-photo-4239093.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Dryer Sheets',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239094/pexels-photo-4239094.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Bleach Alternative',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239095/pexels-photo-4239095.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Dish Cleaning
    {
      name: 'Dish Soap',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Dishwasher Detergent',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Dishwasher Rinse Aid',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239033/pexels-photo-4239033.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Dish Sponges',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239015/pexels-photo-4239015.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Steel Wool Pads',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239016/pexels-photo-4239016.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Cleaning Tools
    {
      name: 'Broom',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4108716/pexels-photo-4108716.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Dustpan',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4108717/pexels-photo-4108717.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Mop',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4108718/pexels-photo-4108718.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Mop Bucket',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4108719/pexels-photo-4108719.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Duster',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4108720/pexels-photo-4108720.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Microfiber Cloths',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239017/pexels-photo-4239017.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Cleaning Rags',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239018/pexels-photo-4239018.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Scrub Brush',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239019/pexels-photo-4239019.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Toilet Brush',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239020/pexels-photo-4239020.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Rubber Gloves',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239021/pexels-photo-4239021.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Trash & Storage
    {
      name: 'Trash Bags (Small)',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239022/pexels-photo-4239022.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Trash Bags (Large)',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239023/pexels-photo-4239023.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Recycling Bags',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239024/pexels-photo-4239024.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Paper Products
    {
      name: 'Paper Towels',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239025/pexels-photo-4239025.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Toilet Paper',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/3958210/pexels-photo-3958210.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Facial Tissues',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239026/pexels-photo-4239026.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Napkins',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239027/pexels-photo-4239027.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Air Fresheners
    {
      name: 'Air Freshener Spray',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239028/pexels-photo-4239028.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Plug-in Air Freshener',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239029/pexels-photo-4239029.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Scented Candles',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },

    // Specialty Cleaning
    {
      name: 'Carpet Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4108713/pexels-photo-4108713.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Furniture Polish',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239041/pexels-photo-4239041.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Wood Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239042/pexels-photo-4239042.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Drain Cleaner',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239043/pexels-photo-4239043.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Hand Sanitizer',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/3987142/pexels-photo-3987142.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
    {
      name: 'Disinfecting Wipes',
      category: 'cleaning',
      imageUrl:
        'https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      isInCart: false,
      isChecked: false,
    },
  ];
