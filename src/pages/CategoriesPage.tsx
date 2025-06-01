import { Container, Typography, Grid, Card, Box, CardMedia } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { products } from '../types/products';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  collection: string;
}

interface Category {
  name: string;
  description: string;
  image: string;
  products: Product[];
}

const categories: Category[] = [
  {
    name: "Dresses",
    description: "Elegant and stylish dresses for every occasion",
    image: "/categories/dresses.jpg",
    products: products.filter((p: Product) => p.category === "Dresses")
  },
  {
    name: "Blouses",
    description: "Handcrafted tops with traditional patterns",
    image: "/categories/blouses.jpg",
    products: products.filter((p: Product) => p.category === "Blouses")
  },
  {
    name: "Skirts",
    description: "Beautiful skirts featuring traditional fabrics",
    image: "/categories/skirts.jpg",
    products: products.filter((p: Product) => p.category === "Skirts")
  },
  {
    name: "Accessories",
    description: "Stylish accessories to complete your look",
    image: "/categories/accessories.jpg",
    products: products.filter((p: Product) => p.category === "Accessories")
  },
  {
    name: "Jumpsuits",
    description: "Comfortable and stylish jumpsuits",
    image: "/categories/jumpsuits.jpg",
    products: products.filter((p: Product) => p.category === "Jumpsuits")
  },
  {
    name: "Shoes",
    description: "Handcrafted footwear with traditional designs",
    image: "/categories/shoes.jpg",
    products: products.filter((p: Product) => p.category === "Shoes")
  },
  {
    name: "Bags",
    description: "Beautiful handcrafted bags and pouches",
    image: "/categories/bags.jpg",
    products: products.filter((p: Product) => p.category === "Bags")
  },
  {
    name: "Jewelry",
    description: "Traditional and modern jewelry pieces",
    image: "/categories/jewelry.jpg",
    products: products.filter((p: Product) => p.category === "Jewelry")
  }
];

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const filteredCategories = selectedCategory
    ? categories.filter((cat) => cat.name === selectedCategory)
    : categories;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Shop by Category
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 4 }}>
        Browse our curated categories
      </Typography>

      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            className="flex items-center justify-between w-64 px-5 py-3 bg-white rounded-xl shadow-lg border border-stone-200 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all hover:shadow-2xl"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
            style={{ perspective: '600px' }}
          >
            {selectedCategory ? selectedCategory : 'All Categories'}
            <ChevronDown size={22} className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {/* Dropdown menu */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-64 mt-2 bg-white rounded-xl shadow-2xl border border-stone-200 z-20 transition-all duration-300 origin-top ${dropdownOpen ? 'dropdown-3d-open' : 'dropdown-3d-closed'}`}
            style={{
              transformOrigin: 'top',
              perspective: '600px',
              maxHeight: '60vh',
              overflowY: 'auto',
              left: '50%',
              right: 'auto',
              minWidth: '16rem',
            }}
            role="listbox"
          >
            <button
              className={`block w-full text-left px-5 py-3 hover:bg-primary-50 transition-colors rounded-t-xl ${selectedCategory === '' ? 'bg-primary-100 text-primary-800' : ''}`}
              onClick={() => { setSelectedCategory(''); setDropdownOpen(false); }}
              role="option"
              aria-selected={selectedCategory === ''}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/categories/${category.name.toLowerCase()}`}
                className={`block w-full text-left px-5 py-3 hover:bg-primary-50 transition-colors ${selectedCategory === category.name ? 'bg-primary-100 text-primary-800' : ''}`}
                role="option"
                aria-selected={selectedCategory === category.name}
                onClick={() => setDropdownOpen(false)}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </Box>

      <Grid container spacing={4}>
        {filteredCategories.map((category: Category) => (
          <Grid item xs={12} sm={6} md={4} key={category.name}>
            <Card
              sx={{
                height: '100%',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.35s cubic-bezier(.25,1.5,.5,1), box-shadow 0.35s',
                transformStyle: 'preserve-3d',
                '&:hover': {
                  transform: 'translateY(-12px) scale(1.04) rotateY(6deg)',
                  boxShadow: '0 16px 48px 0 rgba(31, 38, 135, 0.28)',
                  zIndex: 2,
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={category.image}
                  alt={category.name}
                  sx={{
                    filter: 'brightness(0.92) saturate(1.1)',
                  }}
                />
                {/* Glassmorphism overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(6px) saturate(1.2)',
                    borderBottom: '1px solid rgba(255,255,255,0.25)',
                    zIndex: 1,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    zIndex: 2,
                    background: 'rgba(255,255,255,0.7)',
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: 14,
                    color: '#222',
                    boxShadow: '0 2px 8px 0 rgba(31,38,135,0.10)',
                  }}
                >
                  {category.name}
                </Box>
              </Box>
              <Box p={3} sx={{ position: 'relative', zIndex: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {category.name}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {category.description}
                </Typography>
                <Grid container spacing={2}>
                  {category.products.slice(0, 3).map((product: Product) => (
                    <Grid item xs={12} key={product.id}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <style>{`
        .dropdown-3d-open {
          transform: rotateX(0deg) scaleY(1);
          opacity: 1;
          pointer-events: auto;
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.18);
        }
        .dropdown-3d-closed {
          transform: rotateX(-25deg) scaleY(0.95);
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
    </Container>
  );
}
