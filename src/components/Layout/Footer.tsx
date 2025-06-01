import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white/80">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="text-white font-display text-3xl block">
              JUWURA
            </Link>
            <p className="text-white/70 max-w-xs">
              Exquisite handcrafted luxury goods made with passion and precision.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Shop Categories */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Shop Categories</h3>
            <ul className="space-y-4">
              <li><Link to="/shop/bags" className="hover:text-white transition-colors">Bags</Link></li>
              <li><Link to="/shop/jewelry" className="hover:text-white transition-colors">Jewelry</Link></li>
              <li><Link to="/shop/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/shop/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop/bestsellers" className="hover:text-white transition-colors">Bestsellers</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>123 Artisan Way, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <span>+234 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <span>hello@juwura.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Juwura. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;