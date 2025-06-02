export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  collection: string;
  rating?: number;
  reviews?: number;
  colors?: string[];
  sizes?: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Adire Gown",
    price: 599.99,
    image: "/wed.png",
    description: "Luxurious hand-dyed Adire gown featuring intricate traditional patterns. Perfect for special occasions.",
    category: "Dresses",
    collection: "Royal Collection",
    rating: 4.9,
    reviews: 128,
    colors: ["Indigo", "Brown", "Black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: "Adire Fusion Dress",
    price: 449.99,
    image: "/wed2.png",
    description: "Contemporary fusion dress combining traditional Adire patterns with modern silhouettes.",
    category: "Dresses",
    collection: "Modern Fusion",
    rating: 4.8,
    reviews: 95,
    colors: ["Blue", "Brown", "Green"],
    sizes: ["S", "M", "L"],
    inStock: true,
    isNew: true
  },
  {
    id: 3,
    name: "Traditional Adire Set",
    price: 699.99,
    image: "/wed3.png",
    description: "Complete traditional Adire set featuring a top and wrapper with matching patterns.",
    category: "Sets",
    collection: "Heritage",
    rating: 5.0,
    reviews: 156,
    colors: ["Deep Blue", "Brown", "Black"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 4,
    name: "Modern Adire Jumpsuit",
    price: 479.99,
    image: "/wed4.png",
    description: "Sleek and modern jumpsuit with subtle Adire patterns perfect for contemporary occasions.",
    category: "Jumpsuits",
    collection: "Modern Fusion",
    rating: 4.7,
    reviews: 82,
    colors: ["Navy", "Brown", "Black"],
    sizes: ["S", "M", "L"],
    inStock: true
  },
  {
    id: 5,
    name: "Ceremonial Adire Gown",
    price: 899.99,
    image: "/wed5.png",
    description: "Elaborate ceremonial gown featuring premium Adire craftsmanship and detailed embellishments.",
    category: "Dresses",
    collection: "Ceremonial",
    rating: 4.9,
    reviews: 143,
    colors: ["Royal Blue", "Deep Brown", "Purple"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isBestSeller: true
  },
  {
    id: 6,
    name: "Adire Wrap Dress",
    price: 399.99,
    image: "/wed7.png",
    description: "Versatile wrap dress with contemporary Adire patterns suitable for any occasion.",
    category: "Dresses",
    collection: "Everyday Luxury",
    rating: 4.6,
    reviews: 78,
    colors: ["Blue", "Brown", "Green"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true
  },
  {
    id: 7,
    name: "Statement Adire Coat",
    price: 649.99,
    image: "/wed8.png",
    description: "Bold and dramatic coat featuring large-scale Adire patterns and modern cut.",
    category: "Outerwear",
    collection: "Modern Fusion",
    rating: 4.8,
    reviews: 91,
    colors: ["Indigo", "Black", "Brown"],
    sizes: ["S", "M", "L"],
    inStock: true,
    isNew: true
  },
  {
    id: 8,
    name: "Adire Evening Gown",
    price: 799.99,
    image: "/wed9.png",
    description: "Elegant evening gown combining traditional Adire with contemporary glamour.",
    category: "Dresses",
    collection: "Evening Wear",
    rating: 4.9,
    reviews: 112,
    colors: ["Deep Blue", "Wine", "Black"],
    sizes: ["S", "M", "L"],
    inStock: true,
    isBestSeller: true
  }
];

export const collections = [
  {
    id: "royal-collection",
    name: "Royal Collection",
    description: "Luxurious pieces fit for royalty",
    image: "/wed5.png"
  },
  {
    id: "modern-fusion",
    name: "Modern Fusion",
    description: "Contemporary takes on traditional patterns",
    image: "/wed2.png"
  },
  {
    id: "heritage",
    name: "Heritage",
    description: "Celebrating our rich cultural heritage",
    image: "/wed3.png"
  },
  {
    id: "everyday-luxury",
    name: "Everyday Luxury",
    description: "Elevated everyday wear",
    image: "/wed7.png"
  },
  {
    id: "evening-wear",
    name: "Evening Wear",
    description: "Stunning pieces for special occasions",
    image: "/wed9.png"
  }
];