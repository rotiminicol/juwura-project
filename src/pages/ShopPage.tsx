import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, X } from 'lucide-react';

// Updated product data with new Adire pieces
const products = [
  {
    id: 1,
    name: 'Adire Halter Set',
    price: 449.99,
    category: 'sets',
    image: '/wed.png',
    description: 'Modern halter top and wide-leg pants in classic Adire stripe pattern'
  },
  {
    id: 2,
    name: 'Royal Adire Kimono',
    price: 529.99,
    category: 'outerwear',
    image: '/wed2.png',
    description: 'Luxurious Adire kimono with geometric patterns'
  },
  {
    id: 3,
    name: 'Adire Fusion Gown',
    price: 699.99,
    category: 'dresses',
    image: '/wed3.png',
    description: 'Contemporary fusion gown combining Adire with modern ruffles'
  },
  {
    id: 4,
    name: 'Abstract Adire Set',
    price: 489.99,
    category: 'sets',
    image: '/wed4.png',
    description: 'Modern interpretation of traditional patterns in earth tones'
  },
  {
    id: 5,
    name: 'Royal Adire Ensemble',
    price: 899.99,
    category: 'ceremonial',
    image: '/wed5.png',
    description: 'Dramatic ceremonial piece with layered Adire patterns'
  }
];

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;
    
  return (
    <>
      {/* Page header */}
      <div className="bg-primary-900 py-32 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Shop Adire Collection</h1>
          <p className="text-white/80 max-w-xl mx-auto font-serif">
            Contemporary interpretations of traditional Adire textiles, handcrafted for the modern wardrobe.
          </p>
        </div>
      </div>
      
      {/* Shop content */}
      <div className="py-16">
        <div className="container-custom">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-6">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-between w-full border border-stone-300 p-3"
            >
              <span className="flex items-center">
                <Filter size={18} className="mr-2" />
                Filter Products
              </span>
              <ChevronDown size={18} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="sticky top-24 border border-stone-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-medium text-lg">Categories</h2>
                  {selectedCategory && (
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className="text-sm text-primary-600 flex items-center"
                    >
                      Clear <X size={14} className="ml-1" />
                    </button>
                  )}
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => setSelectedCategory('sets')}
                    className={`block w-full text-left py-2 px-3 transition-colors ${
                      selectedCategory === 'sets' ? 'bg-primary-100 text-primary-800' : 'hover:bg-stone-100'
                    }`}
                  >
                    Sets
                  </button>
                  <button 
                    onClick={() => setSelectedCategory('outerwear')}
                    className={`block w-full text-left py-2 px-3 transition-colors ${
                      selectedCategory === 'outerwear' ? 'bg-primary-100 text-primary-800' : 'hover:bg-stone-100'
                    }`}
                  >
                    Outerwear
                  </button>
                  <button 
                    onClick={() => setSelectedCategory('dresses')}
                    className={`block w-full text-left py-2 px-3 transition-colors ${
                      selectedCategory === 'dresses' ? 'bg-primary-100 text-primary-800' : 'hover:bg-stone-100'
                    }`}
                  >
                    Dresses
                  </button>
                  <button 
                    onClick={() => setSelectedCategory('ceremonial')}
                    className={`block w-full text-left py-2 px-3 transition-colors ${
                      selectedCategory === 'ceremonial' ? 'bg-primary-100 text-primary-800' : 'hover:bg-stone-100'
                    }`}
                  >
                    Ceremonial
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product grid */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-stone-600">{filteredProducts.length} products</p>
                <select className="border border-stone-300 p-2">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <div key={product.id} className="product-card group">
                    <Link to={`/product/${product.id}`}>
                      <div className="product-image-container">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="product-image w-full h-[420px] object-cover"
                        />
                      </div>
                      <div className="pt-4 pb-8">
                        <h3 className="text-lg font-medium">{product.name}</h3>
                        <p className="text-primary-600 font-serif mt-1">${product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;