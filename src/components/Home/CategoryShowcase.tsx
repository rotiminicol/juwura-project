import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'sets',
    name: 'Sets',
    image: '/wed.png',
    description: 'Contemporary Adire coordinated sets'
  },
  {
    id: 'outerwear',
    name: 'Outerwear',
    image: '/wed2.png',
    description: 'Statement pieces for every occasion'
  },
  {
    id: 'dresses',
    name: 'Dresses',
    image: '/wed3.png',
    description: 'Modern interpretations of traditional designs'
  }
];

const CategoryShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4">Shop By Category</h2>
          <p className="text-stone-600 max-w-2xl mx-auto font-serif">
            Explore our collection of handcrafted Adire pieces, each category offering unique 
            interpretations of traditional patterns and techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative h-[500px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/30 z-10 transition-colors group-hover:bg-black/40" />
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-display mb-2">{category.name}</h3>
                <p className="text-white/80 mb-6 font-serif">{category.description}</p>
                <Link 
                  to={`/shop/${category.id}`} 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/50 py-3 px-6 inline-block transition-all w-full text-center"
                >
                  Shop {category.name}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;