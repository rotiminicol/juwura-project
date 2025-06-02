import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchValue)}`;
      setSearchValue('');
      setShowSearch(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-950/90 backdrop-blur-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-3xl text-white font-display tracking-wider">
          JÙWÚRÀ
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/top-sellers" className="nav-link">Top Sellers</Link>
          <Link to="/collections" className="nav-link">Collections</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/gift-cards" className="nav-link">Gift Cards</Link>
          
          <div className="relative group">
            <button className="nav-link">Categories</button>
            <div className="absolute left-0 mt-2 w-[280px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="p-4">
                <Link to="/categories/dresses" className="block py-2 px-4 hover:bg-primary-50 rounded-lg">Dresses</Link>
                <Link to="/categories/blouses" className="block py-2 px-4 hover:bg-primary-50 rounded-lg">Blouses</Link>
                <Link to="/categories/skirts" className="block py-2 px-4 hover:bg-primary-50 rounded-lg">Skirts</Link>
                <Link to="/categories/accessories" className="block py-2 px-4 hover:bg-primary-50 rounded-lg">Accessories</Link>
                <Link to="/categories/jumpsuits" className="block py-2 px-4 hover:bg-primary-50 rounded-lg">Jumpsuits</Link>
                <Link to="/categories/shoes" className="block py-2 px-4 hover:bg-primary-50 rounded-lg">Shoes</Link>
                <Link to="/categories/bags" className="block py-2 px-4 hover:bg-primary-50 rounded-lg">Bags</Link>
                <Link to="/categories/jewelry" className="block py-2 px-4 hover:bg-primary-50 rounded-lg">Jewelry</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center space-x-6">
          <button onClick={() => setShowSearch(true)} className="text-white hover:text-primary-200 transition-colors">
            <Search size={20} />
          </button>
          <Link to="/profile" className="text-white hover:text-primary-200 transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" className="text-white hover:text-primary-200 transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {showSearch && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg p-4"
          >
            <form onSubmit={handleSearchSubmit} className="container mx-auto max-w-2xl flex gap-4">
              <input
                type="search"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button type="submit" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Search
              </button>
              <button 
                type="button" 
                onClick={() => setShowSearch(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;