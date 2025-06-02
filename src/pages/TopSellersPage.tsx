import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Award, ShoppingBag } from 'lucide-react';
import { products } from '../types/products';
import { Link } from 'react-router-dom';

const bestSellers = products.filter(p => p.isBestSeller);
const newArrivals = products.filter(p => p.isNew);

const TopSellersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-primary-900">
        <div className="absolute inset-0">
          <img 
            src="/wed5.png"
            alt="Top Sellers Collection"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl text-white font-display mb-6">
                Our Most Loved Pieces
              </h1>
              <p className="text-xl text-white/80 font-serif mb-8">
                Discover our collection of best-selling Adire pieces, handcrafted with love and cherished by our community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="#best-sellers"
                  className="bg-white text-primary-900 px-8 py-3 flex items-center gap-2 hover:bg-primary-50 transition-colors"
                >
                  <TrendingUp size={20} />
                  Best Sellers
                </Link>
                <Link 
                  to="#new-arrivals"
                  className="border border-white text-white px-8 py-3 flex items-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <Star size={20} />
                  New Arrivals
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, label: "Best Sellers", value: "2500+", desc: "Happy Customers" },
              { icon: Award, label: "Quality", value: "100%", desc: "Handcrafted" },
              { icon: ShoppingBag, label: "Products", value: "500+", desc: "Unique Pieces" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 border-b-4 border-primary-600 bg-primary-50"
              >
                <stat.icon size={40} className="mx-auto mb-4 text-primary-600" />
                <h3 className="text-4xl font-display text-primary-900 mb-2">{stat.value}</h3>
                <p className="text-primary-600 font-medium">{stat.label}</p>
                <p className="text-primary-700/60">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Grid */}
      <section id="best-sellers" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display mb-4">Best Sellers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-serif">
              Our most popular pieces, loved and cherished by our community of fashion enthusiasts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex items-center gap-2 text-white mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < Math.floor(product.rating || 0) ? 'fill-primary-500' : 'fill-gray-400'}
                            />
                          ))}
                          <span className="text-sm">({product.reviews} reviews)</span>
                        </div>
                        <h3 className="text-xl text-white font-medium mb-1">{product.name}</h3>
                        <p className="text-white/80">${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section id="new-arrivals" className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display mb-4">New Arrivals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-serif">
              Fresh additions to our collection, featuring the latest in Adire fashion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 text-sm">
                      New
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                    <p className="text-primary-600 font-serif">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSellersPage;