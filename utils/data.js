import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Rokibul Hasan",
      email: "rokibulhasan@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Cristiano Ronaldo",
      email: "user1@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 75,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 100,
      brand: "Oliver",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 150,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pant",
    },
    {
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 1750,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pant",
    },
    {
      name: "Jeans Pants",
      slug: "jeans-pants",
      category: "Pants",
      image: "/images/pants3.jpg",
      price: 10,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A jeans pant",
    },
  ],
};

export default data;