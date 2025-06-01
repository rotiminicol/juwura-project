import { Container, Typography, Grid, Button } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import { products } from '../../types/products';
import { useNavigate } from 'react-router-dom';

const blouses = products.filter((p: any) => p.category === 'Blouses');

export default function BlousesPage() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button onClick={() => navigate(-1)} variant="outlined" sx={{ mb: 3 }}>
        ← Back
      </Button>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Blouses
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 4 }}>
        Handcrafted tops with traditional patterns
      </Typography>
      <Grid container spacing={4}>
        {blouses.map((product: any) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 