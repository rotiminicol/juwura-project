import { Container, Typography, Grid, Box, Card, CardContent, Button, InputBase, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { products } from '../types/products';
import { useState } from 'react';

// Extract unique categories and collections from products
type Product = typeof products[number];
const categories = Array.from(new Set(products.map(p => p.category)));
const collections = Array.from(new Set(products.map(p => p.collection)));

export default function CollectionsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  // Filter products by search and filter
  const filteredProducts = products.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter ? (p.category === filter || p.collection === filter) : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'primary.50', pb: 8, position: 'relative' }}>
      {/* Decorative background */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 320,
        background: 'linear-gradient(90deg, #db8039 0%, #6d3422 100%)',
        zIndex: 0,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
      }} />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 7 }}>
        <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 'bold', color: 'white', mb: 2, fontFamily: 'display', textShadow: '0 2px 8px #6d3422' }}>
          The Juwura Market
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: 'white', opacity: 0.9, mb: 5, fontFamily: 'serif' }}>
          Explore all our products in one vibrant marketplace.
        </Typography>
        {/* Search and Filter Bar */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 5, justifyContent: 'center', alignItems: 'center' }}>
          <InputBase
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{
              bgcolor: 'white',
              px: 2,
              py: 1,
              borderRadius: 2,
              boxShadow: 1,
              fontSize: 18,
              width: { xs: '100%', sm: 320 },
              border: '1px solid #eab587',
            }}
            inputProps={{ 'aria-label': 'search products' }}
          />
          <FormControl sx={{ minWidth: 180, bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <InputLabel id="filter-label">Filter by</InputLabel>
            <Select
              labelId="filter-label"
              value={filter}
              label="Filter by"
              onChange={e => setFilter(e.target.value)}
              sx={{ borderRadius: 2 }}
            >
              <MenuItem value="">All</MenuItem>
              {categories.map(cat => (
                <MenuItem value={cat} key={cat}>{cat}</MenuItem>
              ))}
              {collections.map(col => (
                <MenuItem value={col} key={col}>{col}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {/* Products Grid */}
        <Grid container spacing={4}>
          {filteredProducts.length === 0 ? (
            <Grid item xs={12}>
              <Card sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.100', color: 'primary.900', fontFamily: 'serif' }}>
                <Typography variant="h6">No products found.</Typography>
              </Card>
            </Grid>
          ) : (
            filteredProducts.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
}
