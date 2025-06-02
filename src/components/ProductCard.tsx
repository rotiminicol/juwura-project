import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';
import { Product } from '../types/products';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 text-sm font-medium">
              New
            </div>
          )}
          {product.isBestSeller && (
            <div className="absolute top-4 right-4 bg-secondary-600 text-white px-3 py-1 text-sm font-medium">
              Best Seller
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button className="w-full bg-white text-primary-900 py-2 px-4 flex items-center justify-center gap-2 hover:bg-primary-50 transition-colors">
              <ShoppingBag size={18} />
              Add to Cart
            </button>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating || 0) ? 'text-primary-600 fill-primary-600' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({product.reviews} reviews)
            </span>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="text-primary-800 font-serif">${product.price.toFixed(2)}</p>
          
          <div className="flex gap-1 mt-2">
            {product.colors?.map(color => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;