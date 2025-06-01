import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Featured products using the new Adire pieces
const products = [
  {
    id: 1,
    name: 'Adire Halter Set',
    price: 449.99,
    image: '/wed.png'
  },
  {
    id: 2,
    name: 'Royal Adire Kimono',
    price: 529.99,
    image: '/wed2.png'
  },
  {
    id: 3,
    name: 'Adire Fusion Gown',
    price: 699.99,
    image: '/wed3.png'
  },
  {
    id: 4,
    name: 'Abstract Adire Set',
    price: 489.99,
    image: '/wed4.png'
  }
];

const ProductCard: React.FC<{
  product: typeof products[0];
  index: number;
}> = ({ product, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="product-card group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image w-full h-[420px] object-cover"
          />
        </div>
        <div className="pt-4 pb-8">
          <h3 className="text-xl font-medium">{product.name}</h3>
          <p className="text-primary-600 font-serif mt-1">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-4">Featured Collection</h2>
            <p className="text-stone-600 max-w-lg font-serif">
              Discover our latest Adire pieces, where traditional craftsmanship meets contemporary design.
            </p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center text-primary-800 font-medium hover:text-primary-600 transition-colors">
            View All <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link to="/shop" className="btn-secondary inline-flex items-center">
            View All Products <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;