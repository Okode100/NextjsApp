const database = 'inventory';
const collection = 'product'

use('database')

db.createCollection(collection);

const productData = [{
    id: '1',
    name: 'Laptop Pro',
    price: 1299.99,
    categories: ['Electronics', 'Computers', 'Laptops'],
    description: 'High-performance laptop with latest processor and premium build quality.'
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    price: 199.99,
    categories: ['Electronics', 'Audio', 'Wireless'],
    description: 'Premium noise-cancelling wireless headphones with exceptional sound quality.'
  },
  {
    id: '3',
    name: 'Smartphone X',
    price: 899.99,
    categories: ['Electronics', 'Mobile', 'Smartphones'],
    description: 'Latest smartphone with advanced camera system and long battery life.'
  },
  {
    id: '4',
    name: 'Coffee Maker',
    price: 89.99,
    categories: ['Home & Kitchen', 'Appliances', 'Coffee'],
    description: 'Programmable coffee maker with built-in grinder and thermal carafe.'
  },
  {
    id: '5',
    name: 'Running Shoes',
    price: 129.99,
    categories: ['Sports', 'Footwear', 'Running'],
    description: 'Lightweight running shoes with excellent cushioning and breathable mesh.'
  },
  {
    id: '6',
    name: 'Bluetooth Speaker',
    price: 79.99,
    categories: ['Electronics', 'Audio', 'Portable'],
    description: 'Portable waterproof speaker with 360-degree sound and 20-hour battery life.'
  },
  {
    id: '7',
    name: 'Yoga Mat',
    price: 29.99,
    categories: ['Sports', 'Fitness', 'Yoga'],
    description: 'Non-slip yoga mat made from eco-friendly materials with carrying strap.'
  },
  {
    id: '8',
    name: 'Gaming Mouse',
    price: 59.99,
    categories: ['Electronics', 'Gaming', 'Accessories'],
    description: 'High-precision gaming mouse with customizable RGB lighting and programmable buttons.'
  }
];