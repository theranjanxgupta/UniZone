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
    image: '/assets/pizza.jpg',
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
  {
    id: '4',
    name: 'Sushi Spot',
    image: '/assets/sushi.jpg',
    rating: 4.8,
    deliveryTime: '30-35 mins',
    cuisines: ['Japanese', 'Sushi'],
    location: 'Downtown'
  },
  {
    id: '5',
    name: 'Pasta House',
    image: '/assets/pasta.jpg',
    rating: 4.3,
    deliveryTime: '20-25 mins',
    cuisines: ['Italian', 'Pasta'],
    location: 'Midtown'
  },
  {
    id: '6',
    name: 'Chicken Grill',
    image: '/assets/chicken.jpg',
    rating: 4.4,
    deliveryTime: '25-30 mins',
    cuisines: ['American', 'Grilled'],
    location: 'Uptown'
  },
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
  {
    id: '7',
    name: 'California Roll',
    description: 'Crab, avocado, cucumber',
    price: 15.99,
    image: '/assets/california.jpg',
    category: 'Sushi',
    restaurantId: '4'
  },
  {
    id: '8',
    name: 'Spaghetti Carbonara',
    description: 'Pasta, eggs, cheese, pancetta',
    price: 13.99,
    image: '/assets/spaghetti.jpg',
    category: 'Pasta',
    restaurantId: '5'
  },
  {
    id: '9',
    name: 'Grilled Chicken',
    description: 'Grilled chicken breast with sides',
    price: 16.99,
    image: '/assets/grilledchicken.jpg',
    category: 'Grilled',
    restaurantId: '6'
  },
];