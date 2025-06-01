export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  collection: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Adire Maxi Dress",
    price: 199.99,
    image: "/products/adire-maxi-dress.jpg",
    description: "Elegant maxi dress featuring traditional Adire patterns, perfect for special occasions.",
    category: "Dresses",
    collection: "Traditional"
  },
  {
    id: 2,
    name: "Batik Blouse",
    price: 89.99,
    image: "/products/batik-blouse.jpg",
    description: "Handcrafted batik blouse with intricate patterns and vibrant colors.",
    category: "Blouses",
    collection: "Contemporary"
  },
  {
    id: 3,
    name: "Kente Stole",
    price: 49.99,
    image: "/products/kente-stole.jpg",
    description: "Luxurious kente stole perfect for adding a touch of elegance to any outfit.",
    category: "Accessories",
    collection: "Traditional"
  },
  {
    id: 4,
    name: "Indigo Wrap Skirt",
    price: 129.99,
    image: "/products/indigo-wrap-skirt.jpg",
    description: "Timeless wrap skirt in deep indigo blue, featuring traditional Adire patterns.",
    category: "Skirts",
    collection: "Heritage"
  },
  {
    id: 5,
    name: "Ankara Jumpsuit",
    price: 159.99,
    image: "/products/ankara-jumpsuit.jpg",
    description: "Comfortable and stylish jumpsuit made from premium Ankara fabric.",
    category: "Jumpsuits",
    collection: "Modern"
  }
];
