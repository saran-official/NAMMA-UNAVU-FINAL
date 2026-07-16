export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  price: number;
  image: string;
  isVeg: boolean;
  description: string;
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  location: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  phoneNumber: string;
  restaurantName: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'delivered';
  timestamp: number;
}

export type AppView = 'login' | 'restaurants' | 'menu' | 'cart' | 'success' | 'admin';