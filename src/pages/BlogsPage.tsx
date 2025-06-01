import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Avatar, Chip, Button as MuiButton, InputBase } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  avatar?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Adire: A Cultural Journey",
    excerpt: "Discover the rich history and cultural significance of Adire textiles...",
    image: "/blog/adire-history.jpg",
    date: "June 1, 2025",
    author: "Aisha Johnson",
    category: "Culture",
    avatar: "/avatars/aisha.jpg"
  },
  {
    id: 2,
    title: "Modern African Fashion Trends",
    excerpt: "How traditional patterns are influencing contemporary fashion...",
    image: "/blog/modern-trends.jpg",
    date: "May 15, 2025",
    author: "Kofi Mensah",
    category: "Fashion",
    avatar: "/avatars/kofi.jpg"
  },
  {
    id: 3,
    title: "Sustainable Fashion Practices",
    excerpt: "Our commitment to ethical and sustainable production methods...",
    image: "/blog/sustainability.jpg",
    date: "April 30, 2025",
    author: "Fatima Ali",
    category: "Sustainability",
    avatar: "/avatars/fatima.jpg"
  },
  {
    id: 4,
    title: "The Power of African Prints",
    excerpt: "How traditional prints are making a global impact...",
    image: "/blog/african-prints.jpg",
    date: "April 15, 2025",
    author: "Lerato Molefe",
    category: "Design",
    avatar: "/avatars/lerato.jpg"
  }
];

const categories = [
  ...Array.from(new Set(blogPosts.map(post => post.category)))
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const filteredPosts = (selectedCategory === 'All' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory))
    .filter(post => post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase()));
  const featured = blogPosts[0];
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'primary.50', pb: 8, position: 'relative' }}>
      {/* Hero Section */}
      <Box sx={{
        width: '100%',
        py: { xs: 7, md: 10 },
        px: 2,
        background: 'linear-gradient(90deg, #db8039 0%, #6d3422 100%)',
        color: 'white',
        textAlign: 'center',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        mb: 6,
      }}>
        <Typography variant="h2" sx={{ fontFamily: 'display', fontWeight: 700, mb: 2 }}>
          Juwura Stories
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: 'serif', opacity: 0.9, mb: 3 }}>
          Inspiration, culture, and style from the heart of Africa.
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, mt: -10 }}>
        {/* Featured Post */}
        <Box sx={{ mb: 7 }}>
          <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', p: 0, boxShadow: 6, borderRadius: 4, overflow: 'hidden', position: 'relative', background: 'linear-gradient(90deg, #f9e8d8 0%, #f2d0b0 100%)' }}>
            <Box sx={{ position: 'relative', width: { xs: '100%', md: 380 }, minHeight: 220 }}>
              <CardMedia
                component="img"
                height="220"
                image={featured.image}
                alt={featured.title}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Chip label="Featured" color="primary" sx={{ position: 'absolute', top: 16, left: 16, fontWeight: 600, fontSize: 16 }} />
            </Box>
            <CardContent sx={{ flex: 2, p: { xs: 3, md: 5 } }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.900', fontFamily: 'display' }}>{featured.title}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Avatar src={featured.avatar} sx={{ width: 32, height: 32, mr: 1 }} />
                <Typography variant="body2" color="text.secondary">By {featured.author} • {featured.date}</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>{featured.excerpt}</Typography>
              <MuiButton component={Link} to={`/blog/${featured.id}`} variant="contained" sx={{ bgcolor: 'primary.600', color: 'white', fontWeight: 600, px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 2, ':hover': { bgcolor: 'primary.700' } }}>Read More</MuiButton>
            </CardContent>
          </Card>
        </Box>
        {/* Category Filters & Search */}
        <Box sx={{ mb: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Box>
            <Chip
              label="All"
              color={selectedCategory === 'All' ? 'primary' : 'default'}
              onClick={() => setSelectedCategory('All')}
              sx={{ mx: 1, cursor: 'pointer', fontWeight: 600, fontSize: 16, transition: 'all 0.2s', boxShadow: selectedCategory === 'All' ? 2 : 0 }}
            />
            {categories.map(cat => (
              <Chip
                key={cat}
                label={cat}
                color={selectedCategory === cat ? 'primary' : 'default'}
                onClick={() => setSelectedCategory(cat)}
                sx={{ mx: 1, cursor: 'pointer', fontWeight: 600, fontSize: 16, transition: 'all 0.2s', boxShadow: selectedCategory === cat ? 2 : 0 }}
              />
            ))}
          </Box>
          <InputBase
            placeholder="Search blog posts..."
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
              mt: 1
            }}
            inputProps={{ 'aria-label': 'search blog posts' }}
          />
        </Box>
        {/* Blog Grid with subtle background */}
        <Box sx={{ position: 'relative', pb: 8 }}>
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #f9e8d8 0%, #f2d0b0 100%)',
            opacity: 0.25,
            zIndex: 0,
            borderRadius: 4,
          }} />
          <Grid container spacing={4} component="div" sx={{ position: 'relative', zIndex: 1 }}>
            {filteredPosts.length <= 1 ? (
              <Grid item xs={12}>
                <Card sx={{ p: 4, textAlign: 'center', bgcolor: 'primary.100', color: 'primary.900', fontFamily: 'serif' }}>
                  <Typography variant="h6">No blog posts found.</Typography>
                </Card>
              </Grid>
            ) : (
              filteredPosts.slice(1).map((post) => (
                <Grid item xs={12} md={6} key={post.id}>
                  <Card sx={{ height: '100%', transition: 'box-shadow 0.2s', boxShadow: 1, borderRadius: 3, ':hover': { boxShadow: 6, transform: 'translateY(-4px)' }, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                    />
                    <CardContent>
                      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <Avatar src={post.avatar} sx={{ width: 28, height: 28, mr: 1 }} />
                        <Typography variant="caption" color="primary" display="inline" sx={{ mr: 1 }}>{post.category}</Typography>
                        <Typography variant="caption" color="text.secondary" display="inline">{post.date}</Typography>
                      </Box>
                      <Typography variant="h6" component="h2" gutterBottom sx={{ fontFamily: 'display', fontWeight: 600 }}>{post.title}</Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>{post.excerpt}</Typography>
                      <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                        <Typography variant="body2" color="primary" sx={{ cursor: 'pointer', fontWeight: 600 }}>Read More</Typography>
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
        {/* Newsletter Signup */}
        <Box sx={{ mt: 8, mb: 2 }}>
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
              <MuiButton type="submit" variant="contained" sx={{ bgcolor: 'primary.500', color: 'white', fontWeight: 600, px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 2, ':hover': { bgcolor: 'primary.600' } }}>
                Subscribe
              </MuiButton>
            </Box>
            <Typography variant="caption" sx={{ color: 'white', opacity: 0.7, mt: 2 }}>
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Juwura.
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
