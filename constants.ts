import { MenuItem, Restaurant } from './types';

export const RESTAURANTS: Restaurant[] = [
  {
    id: 'r1',
    name: 'KMS Hakkim',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Veg and Non Veg Hotel',
    rating: 4.8,
    location: 'Samayapuram Trichy'
  },
  {
    id: 'r2',
    name: 'Gowri Parvathy Bhavan',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    cuisine: 'Pure Vegetarian',
    rating: 4.5,
    location: 'Samayapuram Trichy'
  },
  {
    id: 'r3',
    name: 'Sri Kamatchi Bhavan',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop',
    cuisine: 'South Indian, Tiffin',
    rating: 4.6,
    location: 'Samayapuram Trichy'
  }
];

// Base items template
const BASE_MENU_ITEMS = [
  {
    name: 'Idly (2 pcs)',
    price: 40,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Steamed rice cakes served with sambar and chutney.'
  },
  {
    name: 'Ghee Roast Dosa',
    price: 80,
    image: 'https://images.unsplash.com/photo-1668236543090-47eba5cb6acf?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Crispy crepe made from fermented batter, roasted with pure ghee.'
  },
  {
    name: 'Parotta (2 pcs)',
    price: 60,
    image: 'https://media.istockphoto.com/id/1292635321/photo/kerala-parotta-popularly-known-as-paratha-or-porotta-is-a-delicacy-from-the-state-of-kerala.jpg?s=612x612&w=0&k=20&c=6K5g_yE7s_g_yE7s',
    isVeg: true,
    description: 'Layered flatbread served with spicy vegetable or chicken salna.'
  },
  {
    name: 'Fried Rice',
    price: 130,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    description: 'Wok-tossed rice with vegetables and aromatic spices.'
  },
  {
    name: 'Noodles',
    price: 130,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    description: 'Spicy noodles tossed with crunchy vegetables.'
  },
  {
    name: 'Poori Masala (2 pcs)',
    price: 60,
    image: 'https://images.unsplash.com/photo-1664188616788-297eb65e8841?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Deep-fried bread served with potato masala.'
  },
  {
    name: 'Chapathi (2 pcs)',
    price: 50,
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Whole wheat flatbread served with kurma.'
  },
  {
    name: 'Masala Dosai',
    price: 90,
    image: 'https://images.unsplash.com/photo-1630384060421-a431e4c25927?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Crispy dosa stuffed with spiced potato filling.'
  },
  {
    name: '1 set Naan & Paneer Butter Masala',
    price: 220,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop',
    isVeg: true,
    description: 'Soft butter naan paired with rich paneer gravy.'
  },
  {
    name: 'Masala Omelette',
    price: 40,
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?q=80&w=800&auto=format&fit=crop',
    isVeg: false,
    description: 'Eggs whisked with onions, chilies and spices.'
  }
];

// Generate menu for each restaurant
export const MENU_ITEMS: MenuItem[] = [
  ...BASE_MENU_ITEMS.map((item, index) => ({
    ...item,
    id: `r1_m${index + 1}`,
    restaurantId: 'r1'
  })),
  ...BASE_MENU_ITEMS.map((item, index) => ({
    ...item,
    id: `r2_m${index + 1}`,
    restaurantId: 'r2'
  })),
  ...BASE_MENU_ITEMS.map((item, index) => ({
    ...item,
    id: `r3_m${index + 1}`,
    restaurantId: 'r3'
  })),
];