import bcrypt from 'bcryptjs'

const data = {
  users: [{
    name: 'Regis',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('12345'),
    isAdmin: true
  }, {
    name: 'Irumva',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('12345'),
    isAdmin: false
  }],

  products: [
    {
      name: "Nike Slim Shirt",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High quality shirt",
    },
    {
      name: "Adidas Fit Shirt",
      slug: "Adidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "High quality shirt",
    },
    {
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "High quality product",
    },
    {
      name: "Adidas Slim Pant",
      slug: "adidas-slim-pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 5,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "High quality product",
    },
  ],
};

export default data;
