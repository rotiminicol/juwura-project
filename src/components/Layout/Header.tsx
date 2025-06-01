import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X as CloseIcon, ShoppingBag, User, Search, Shirt, Briefcase, Footprints } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [dropdownSearch, setDropdownSearch] = useState('');
  const [mobileSearch, setMobileSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
    const handleEsc = (e) => {
      if (e.key === 'Escape') setShowSearch(false);
    };
    const handleClick = (e) => {
      if (searchInputRef.current && !searchInputRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    if (showSearch) {
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [showSearch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue)}`);
      setSearchValue('');
    }
  };
  const handleDropdownSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dropdownSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(dropdownSearch)}`);
      setDropdownSearch('');
    }
  };
  const handleMobileSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(mobileSearch)}`);
      setMobileSearch('');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-950/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-['Playfair_Display'] text-white text-2xl md:text-3xl tracking-wide relative"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          JUWURA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link to="/" className="nav-link font-['Montserrat'] text-white/90 hover:text-white">Home</Link>
          <Link to="/top-sellers" className="nav-link font-['Montserrat'] text-white/90 hover:text-white">Top Sellers</Link>
          <Link to="/collections" className="nav-link font-['Montserrat'] text-white/90 hover:text-white">Collections</Link>
          <Link to="/blog" className="nav-link font-['Montserrat'] text-white/90 hover:text-white">Blog</Link>
          <Link to="/gift-cards" className="nav-link font-['Montserrat'] text-white/90 hover:text-white">Gift Cards</Link>
          <div className="relative group">
            <button className="nav-link font-['Montserrat'] text-white/90 hover:text-white flex items-center space-x-2">
              <span>Categories</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Enhanced Dropdown */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 max-w-[95vw] w-[1000px] overflow-x-auto bg-primary-950/95 rounded-2xl shadow-2xl border border-primary-800/60 transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">
              {/* Arrow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 z-10 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <polygon points="12,0 24,24 0,24" fill="#23160d" opacity="0.95" />
                </svg>
              </div>
              <div className="p-8 pt-10">
                {/* Search Bar */}
                <form className="mb-8 flex items-center gap-3" onSubmit={handleDropdownSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search categories..."
                    className="w-full bg-primary-900 text-white placeholder-white/70 rounded-lg py-3 px-5 border border-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all shadow-sm"
                    value={dropdownSearch}
                    onChange={e => setDropdownSearch(e.target.value)}
                  />
                  <button type="submit"><Search size={20} className="text-white/60" /></button>
                </form>
                {/* Category Columns - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                  <div>
                    <h4 className="text-primary-300 font-bold uppercase tracking-wider text-xs mb-5">Women's Fashion</h4>
                    <Link to="/categories/dresses" className="nav-link text-base hover:text-primary-200 flex items-center gap-3 mb-3 hover:bg-primary-800/30 hover:rounded-lg p-3 transition-all">
                      <Shirt size={18} /> <span>Dresses</span>
                    </Link>
                    <Link to="/categories/suits" className="nav-link text-base hover:text-primary-200 flex items-center gap-3 mb-3 hover:bg-primary-800/30 hover:rounded-lg p-3 transition-all">
                      <Briefcase size={18} /> <span>Suits</span>
                    </Link>
                  </div>
                  <div className="border-l border-primary-800/40 pl-8">
                    <h4 className="text-primary-300 font-bold uppercase tracking-wider text-xs mb-5">Men's Fashion</h4>
                    <Link to="/categories/men-shirts" className="nav-link text-base hover:text-primary-200 flex items-center gap-3 mb-3 hover:bg-primary-800/30 hover:rounded-lg p-3 transition-all">
                      <Shirt size={18} /> <span>Shirts</span>
                    </Link>
                    <Link to="/categories/men-suits" className="nav-link text-base hover:text-primary-200 flex items-center gap-3 mb-3 hover:bg-primary-800/30 hover:rounded-lg p-3 transition-all">
                      <Briefcase size={18} /> <span>Suits</span>
                    </Link>
                  </div>
                  <div className="border-l border-primary-800/40 pl-8">
                    <h4 className="text-primary-300 font-bold uppercase tracking-wider text-xs mb-5">Accessories</h4>
                    <Link to="/categories/bags" className="nav-link text-base hover:text-primary-200 flex items-center gap-3 mb-3 hover:bg-primary-800/30 hover:rounded-lg p-3 transition-all">
                      <ShoppingBag size={18} /> <span>Bags</span>
                    </Link>
                    <Link to="/categories/shoes" className="nav-link text-base hover:text-primary-200 flex items-center gap-3 mb-3 hover:bg-primary-800/30 hover:rounded-lg p-3 transition-all">
                      <Footprints size={18} /> <span>Shoes</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/about" className="nav-link font-['Montserrat'] text-white/90 hover:text-white">About</Link>
        </nav>

        {/* Action Icons */}
        <div className="hidden md:flex items-center gap-4 xl:gap-8 flex-shrink-0 ml-8">
          {/* Search Icon Only */}
          <button
            className="text-white/90 hover:text-white transform hover:scale-110 transition-transform duration-200 relative"
            onClick={() => setShowSearch((v) => !v)}
            aria-label="Open search"
          >
            <Search size={20} />
          </button>
          {/* Redesigned Floating Search Input */}
          {showSearch && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in" style={{backdropFilter: 'blur(3px)'}}>
              <form
                onSubmit={handleSearchSubmit}
                className="relative bg-white dark:bg-primary-900 rounded-2xl shadow-2xl p-0 w-full max-w-md mx-4 animate-slide-down"
                style={{ minWidth: 340 }}
              >
                {/* Close Button in top right */}
                <button
                  type="button"
                  className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-stone-100 dark:bg-primary-800 text-stone-700 dark:text-white hover:bg-stone-200 hover:text-primary-600 dark:hover:bg-primary-700 transition-colors shadow border border-stone-200 dark:border-primary-700"
                  onClick={() => setShowSearch(false)}
                  aria-label="Close search"
                  style={{ zIndex: 2 }}
                >
                  <CloseIcon size={22} strokeWidth={2.5} />
                </button>
                {/* Search Input Row */}
                <div className="flex items-center gap-2 px-6 py-8">
                  <Search size={22} className="text-primary-600 dark:text-primary-300 mr-2" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for products, categories, or blogs..."
                    className="flex-1 bg-transparent text-primary-900 dark:text-white placeholder-stone-400 dark:placeholder-white/60 text-lg outline-none border-none"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    style={{ minWidth: 0 }}
                  />
                  <button
                    type="submit"
                    className="ml-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
              <style>{`
                .animate-fade-in { animation: fadeInBg 0.2s; }
                .animate-slide-down { animation: slideDownCard 0.25s cubic-bezier(.4,1.6,.6,1) both; }
                @keyframes fadeInBg { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideDownCard { from { opacity: 0; transform: translateY(-40px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
              `}</style>
            </div>
          )}
          <Link to="/account" className="text-white/90 hover:text-white transform hover:scale-110 transition-transform duration-200">
            <User size={20} />
          </Link>
          <Link to="/cart" className="text-white/90 hover:text-white transform hover:scale-110 transition-transform duration-200 relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-primary-950/95 z-40 transition-all duration-300 transform ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } md:hidden pt-24`}
      >
        <div className="container mx-auto px-4 flex flex-col items-center space-y-6">
          <Link to="/" className="nav-link text-xl font-['Montserrat'] text-white/90 hover:text-white animate-slide-in">Home</Link>
          <Link to="/top-sellers" className="nav-link text-xl font-['Montserrat'] text-white/90 hover:text-white animate-slide-in delay-100">Top Sellers</Link>
          <Link to="/collections" className="nav-link text-xl font-['Montserrat'] text-white/90 hover:text-white animate-slide-in delay-200">Collections</Link>
          <Link to="/about" className="nav-link text-xl font-['Montserrat'] text-white/90 hover:text-white animate-slide-in delay-300">About</Link>
        </div>
      </div>

      {/* Inline CSS */}
      <style>
        {`
          .nav-link {
            position: relative;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: white;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.3s ease;
          }
          .nav-link:hover::after {
            transform: scaleX(1);
          }
          .animate-slide-in {
            animation: slideIn 0.3s ease forwards;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </header>
  );
};

export default Header;

