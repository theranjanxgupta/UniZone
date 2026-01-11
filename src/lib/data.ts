export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisines: string[];
  location: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurantId: string;
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    image: '/assets/pizza.jpg', // Add images later
    rating: 4.5,
    deliveryTime: '25-30 mins',
    cuisines: ['Pizza', 'Italian'],
    location: 'Downtown'
  },
  {
    id: '2',
    name: 'Burger Joint',
    image: '/assets/burger.jpg',
    rating: 4.2,
    deliveryTime: '20-25 mins',
    cuisines: ['Burger', 'American'],
    location: 'Midtown'
  },
  {
    id: '3',
    name: 'Taco Fiesta',
    image: '/assets/taco.jpg',
    rating: 4.7,
    deliveryTime: '15-20 mins',
    cuisines: ['Mexican', 'Tacos'],
    location: 'Uptown'
  },
  // Add more
];

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Fresh tomato sauce, mozzarella, basil',
    price: 12.99,
    image: '/assets/margherita.jpg',
    category: 'Pizza',
    restaurantId: '1'
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    description: 'Pepperoni, cheese, tomato sauce',
    price: 14.99,
    image: '/assets/pepperoni.jpg',
    category: 'Pizza',
    restaurantId: '1'
  },
  {
    id: '3',
    name: 'Cheeseburger',
    description: 'Beef patty, cheese, lettuce, tomato',
    price: 9.99,
    image: '/assets/cheeseburger.jpg',
    category: 'Burger',
    restaurantId: '2'
  },
  {
    id: '4',
    name: 'Bacon Burger',
    description: 'Beef patty, bacon, cheese, special sauce',
    price: 11.99,
    image: '/assets/baconburger.jpg',
    category: 'Burger',
    restaurantId: '2'
  },
  {
    id: '5',
    name: 'Taco Supreme',
    description: 'Beef, cheese, lettuce, tomato, sour cream',
    price: 8.99,
    image: '/assets/taco.jpg',
    category: 'Tacos',
    restaurantId: '3'
  },
  {
    id: '6',
    name: 'Burrito Bowl',
    description: 'Rice, beans, meat, salsa, guacamole',
    price: 10.99,
    image: '/assets/burrito.jpg',
    category: 'Mexican',
    restaurantId: '3'
  },
];