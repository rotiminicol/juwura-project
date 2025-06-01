import { Container, Typography, Grid, Box, Card, CardContent, Chip, Button, Avatar } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { products } from '../types/products';
import { useNavigate } from 'react-router-dom';

const featured = products.slice(0, 1)[0];
const bestSellers = products.slice(1, 7);

const testimonials = [
  {
    name: 'Amina O.',
    quote: 'Absolutely stunning quality and unique designs. I always get compliments when I wear Juwura pieces!',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Chinedu K.',
    quote: 'The craftsmanship is top-notch. Fast shipping and beautiful packaging too!',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    name: 'Fatima S.',
    quote: 'I love supporting artisans. The story behind each product makes it even more special.',
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
];

export default function TopSellersPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: 'primary.50', minHeight: '100vh', pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: 2,
          background: 'linear-gradient(90deg, #db8039 0%, #6d3422 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: 'display', fontWeight: 700, mb: 2 }}>
          Discover Our Top Sellers
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: 'serif', opacity: 0.9, mb: 3 }}>
          Handpicked favorites and best-selling pieces loved by our customers.
        </Typography>
        <Button
          onClick={() => navigate('/shop')}
          variant="contained"
          sx={{ bgcolor: 'primary.600', color: 'white', fontWeight: 600, px: 4, py: 1.5, fontSize: '1.1rem', boxShadow: 3, ':hover': { bgcolor: 'primary.700' } }}
        >
          Shop All Products
        </Button>
      </Box>

      {/* Brand Story / Value Section */}
      <Container maxWidth="md" sx={{ my: 7 }}>
        <Card sx={{ p: { xs: 3, md: 5 }, boxShadow: 0, bgcolor: 'primary.100', borderRadius: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.900', fontFamily: 'display' }}>
            The Juwura Promise
          </Typography>
          <Typography variant="body1" sx={{ color: 'primary.800', fontFamily: 'serif', mb: 2 }}>
            At Juwura, we celebrate the artistry and heritage of African craftsmanship. Each piece is ethically made, supporting local artisans and their communities. Our collections blend tradition with modern style, ensuring you stand out with every wear.
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Chip label="Ethically Made" color="primary" sx={{ mb: 1 }} />
                <Typography variant="subtitle1" sx={{ color: 'primary.900', fontWeight: 600 }}>Sustainable</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Chip label="Artisan Crafted" color="secondary" sx={{ mb: 1 }} />
                <Typography variant="subtitle1" sx={{ color: 'primary.900', fontWeight: 600 }}>Handmade</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Chip label="Unique Designs" color="primary" sx={{ mb: 1 }} />
                <Typography variant="subtitle1" sx={{ color: 'primary.900', fontWeight: 600 }}>One-of-a-Kind</Typography>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* Featured Product */}
      <Container maxWidth="lg" sx={{ mb: 7 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.900', mb: 2, fontFamily: 'display' }}>
          Featured Product
        </Typography>
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', p: 3, boxShadow: 4, bgcolor: 'primary.50', borderRadius: 4 }}>
          <Box sx={{ flex: 1, minWidth: 260 }}>
            <ProductCard product={featured} />
          </Box>
          <CardContent sx={{ flex: 2 }}>
            <Chip label="Featured" color="primary" sx={{ mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.900' }}>{featured.name}</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>{featured.description}</Typography>
            <Typography variant="h6" color="primary">${featured.price.toFixed(2)}</Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Best Sellers Grid */}
      <Container maxWidth="lg">
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: 'primary.900', fontFamily: 'display' }}>Best Sellers</Typography>
        <Grid container spacing={4}>
          {bestSellers.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Box sx={{ position: 'relative', transition: 'box-shadow 0.3s', boxShadow: 2, borderRadius: 3, bgcolor: 'white', ':hover': { boxShadow: 6 } }}>
                <ProductCard product={product} />
                <Chip label="Bestseller" color="secondary" sx={{ position: 'absolute', top: 16, right: 16, fontWeight: 600 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.900', mb: 3, fontFamily: 'display', textAlign: 'center' }}>
          What Our Customers Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((t, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card sx={{ p: 3, bgcolor: 'primary.50', borderRadius: 4, boxShadow: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Avatar src={t.avatar} alt={t.name} sx={{ width: 64, height: 64, mb: 2, border: '3px solid', borderColor: 'primary.200' }} />
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2, color: 'primary.800' }}>
                  "{t.quote}"
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'primary.900' }}>{t.name}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Newsletter Signup */}
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Card sx={{ p: { xs: 3, md: 5 }, bgcolor: 'primary.900', color: 'white', borderRadius: 4, boxShadow: 3, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'display' }}>
            Join Our Community
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontFamily: 'serif', color: 'white', opacity: 0.9 }}>
            Subscribe to receive exclusive offers, early access to new collections, and stories from our artisans around the world.
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center', maxWidth: 500, mx: 'auto' }}>
            <input
              type="email"
              placeholder="Your email address"
              required
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: 8,
                border: 'none',
                outline: 'none',
                fontSize: 16,
                marginBottom: 0,
                background: 'rgba(255,255,255,0.12)',
                color: 'white',
              }}
            />
            <Button type="submit" variant="contained" sx={{ bgcolor: 'primary.500', color: 'white', fontWeight: 600, px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 2, ':hover': { bgcolor: 'primary.600' } }}>
              Subscribe
            </Button>
          </Box>
          <Typography variant="caption" sx={{ color: 'white', opacity: 0.7, mt: 2 }}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Juwura.
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
