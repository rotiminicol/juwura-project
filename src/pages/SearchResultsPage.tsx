import { useLocation } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Avatar } from '@mui/material';
import { products } from '../types/products';
import ProductCard from '../components/ProductCard';

// Dummy blog and category data for search
const blogPosts = [
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
  { name: "Dresses", description: "Elegant and stylish dresses for every occasion", image: "/categories/dresses.jpg" },
  { name: "Blouses", description: "Handcrafted tops with traditional patterns", image: "/categories/blouses.jpg" },
  { name: "Skirts", description: "Beautiful skirts featuring traditional fabrics", image: "/categories/skirts.jpg" },
  { name: "Accessories", description: "Stylish accessories to complete your look", image: "/categories/accessories.jpg" },
  { name: "Jumpsuits", description: "Comfortable and stylish jumpsuits", image: "/categories/jumpsuits.jpg" },
  { name: "Shoes", description: "Handcrafted footwear with traditional designs", image: "/categories/shoes.jpg" },
  { name: "Bags", description: "Beautiful handcrafted bags and pouches", image: "/categories/bags.jpg" },
  { name: "Jewelry", description: "Traditional and modern jewelry pieces", image: "/categories/jewelry.jpg" }
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResultsPage() {
  const query = useQuery().get('q')?.toLowerCase() || '';

  const productResults = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );
  const categoryResults = categories.filter(c =>
    c.name.toLowerCase().includes(query) ||
    c.description.toLowerCase().includes(query)
  );
  const blogResults = blogPosts.filter(b =>
    b.title.toLowerCase().includes(query) ||
    b.excerpt.toLowerCase().includes(query) ||
    b.category.toLowerCase().includes(query)
  );

  const hasResults = productResults.length || categoryResults.length || blogResults.length;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Search Results for "{query}"
      </Typography>
      {!hasResults && (
        <Typography align="center" color="text.secondary" sx={{ mt: 6 }}>
          No results found. Try a different search term.
        </Typography>
      )}
      {productResults.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>Products</Typography>
          <Grid container spacing={4}>
            {productResults.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {categoryResults.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>Categories</Typography>
          <Grid container spacing={4}>
            {categoryResults.map(category => (
              <Grid item xs={12} sm={6} md={4} key={category.name}>
                <Card>
                  <CardMedia component="img" height="140" image={category.image} alt={category.name} />
                  <CardContent>
                    <Typography variant="h6">{category.name}</Typography>
                    <Typography variant="body2" color="text.secondary">{category.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {blogResults.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>Blog Posts</Typography>
          <Grid container spacing={4}>
            {blogResults.map(post => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card>
                  <CardMedia component="img" height="140" image={post.image} alt={post.title} />
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar src={post.avatar} sx={{ width: 28, height: 28, mr: 1 }} />
                      <Typography variant="caption" color="primary" sx={{ mr: 1 }}>{post.category}</Typography>
                      <Typography variant="caption" color="text.secondary">{post.date}</Typography>
                    </Box>
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{post.excerpt}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
} 