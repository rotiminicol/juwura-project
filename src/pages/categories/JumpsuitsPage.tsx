import { Container, Typography, Grid, Button } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import { products } from '../../types/products';
import { useNavigate } from 'react-router-dom';

const jumpsuits = products.filter((p: any) => p.category === 'Jumpsuits');

export default function JumpsuitsPage() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button onClick={() => navigate(-1)} variant="outlined" sx={{ mb: 3 }}>
        ← Back
      </Button>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Jumpsuits
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 4 }}>
        Comfortable and stylish jumpsuits
      </Typography>
      <Grid container spacing={4}>
        {jumpsuits.map((product: any) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 