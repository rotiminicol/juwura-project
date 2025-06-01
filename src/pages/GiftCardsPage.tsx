import { Container, Typography, Grid, Card, CardContent, Button, TextField, Box, Avatar, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import RedeemIcon from '@mui/icons-material/Redeem';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

interface GiftCard {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const giftCards: GiftCard[] = [
  {
    id: 1,
    name: "Standard Gift Card",
    price: 25,
    description: "Perfect for a small surprise",
    image: "/giftcards/standard.jpg"
  },
  {
    id: 2,
    name: "Premium Gift Card",
    price: 50,
    description: "For a special occasion",
    image: "/giftcards/premium.jpg"
  },
  {
    id: 3,
    name: "Luxury Gift Card",
    price: 100,
    description: "For the ultimate shopping experience",
    image: "/giftcards/luxury.jpg"
  },
  {
    id: 4,
    name: "Custom Amount",
    price: 0,
    description: "Choose your own amount",
    image: "/giftcards/custom.jpg"
  }
];

const testimonials = [
  { name: "Ada O.", text: "The gift card was the perfect present for my sister! She loved shopping for her favorite styles." },
  { name: "Chinedu A.", text: "Easy to purchase and delivered instantly. Highly recommend for last-minute gifts!" }
];

const faqs = [
  { q: "How do I redeem a gift card?", a: "Enter your gift card code at checkout to apply the balance to your order." },
  { q: "Can I use more than one gift card?", a: "Yes, you can combine multiple gift cards in a single purchase." },
  { q: "Do gift cards expire?", a: "No, our gift cards never expire." }
];

export default function GiftCardsPage() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement gift card purchase logic
    alert('Gift card purchase submitted!');
  };

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
          Gift the Joy of Choice
        </Typography>
        <Typography variant="h6" sx={{ fontFamily: 'serif', opacity: 0.9, mb: 3 }}>
          Share the love of Juwura with a beautiful gift card for any occasion.
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, mt: -10 }}>
        {/* How it Works */}
        <Box sx={{ mb: 7 }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <RedeemIcon sx={{ fontSize: 40, color: 'primary.600', mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.900', fontFamily: 'display' }}>Choose a Card</Typography>
                <Typography variant="body2" sx={{ color: 'primary.800', fontFamily: 'serif' }}>Pick the perfect gift card for your loved one.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <EmailIcon sx={{ fontSize: 40, color: 'primary.600', mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.900', fontFamily: 'display' }}>Personalize & Send</Typography>
                <Typography variant="body2" sx={{ color: 'primary.800', fontFamily: 'serif' }}>Add a message and send instantly via email.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <ShoppingBagIcon sx={{ fontSize: 40, color: 'primary.600', mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.900', fontFamily: 'display' }}>Shop with Joy</Typography>
                <Typography variant="body2" sx={{ color: 'primary.800', fontFamily: 'serif' }}>Recipients can shop for anything they love at Juwura.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Gift Card Visuals */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {giftCards.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  border: selectedCard === card.id ? '3px solid #db8039' : '2px solid transparent',
                  boxShadow: selectedCard === card.id ? 6 : 1,
                  transition: 'box-shadow 0.2s, border 0.2s',
                  position: 'relative',
                  ':hover': { boxShadow: 6, border: '3px solid #db8039' },
                  bgcolor: selectedCard === card.id ? 'primary.100' : 'white',
                }}
                onClick={() => setSelectedCard(card.id)}
              >
                {selectedCard === card.id && (
                  <Box sx={{ position: 'absolute', top: 12, right: 12, bgcolor: 'primary.600', color: 'white', px: 2, py: 0.5, borderRadius: 2, fontWeight: 600, fontSize: 14, zIndex: 2 }}>
                    Selected
                  </Box>
                )}
                <CardContent sx={{ textAlign: 'center' }}>
                  <Avatar src={card.image} sx={{ width: 80, height: 80, mx: 'auto', mb: 2, boxShadow: 2 }} />
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontFamily: 'display', fontWeight: 600 }}>
                    {card.name}
                  </Typography>
                  <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {card.price > 0 ? `$${card.price}` : 'Custom'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'serif' }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Purchase Form */}
        <Box sx={{ mt: 2, mb: 6 }}>
          <Card sx={{ p: { xs: 3, md: 5 }, bgcolor: 'primary.50', borderRadius: 4, boxShadow: 2, maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'display', fontWeight: 600, color: 'primary.900' }}>
              Purchase Details
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Recipient's Email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Personal Message"
                    multiline
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  {selectedCard === 4 && (
                    <TextField
                      fullWidth
                      label="Custom Amount"
                      type="number"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      required
                    />
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, bgcolor: 'primary.600', color: 'white', fontWeight: 600, px: 4, py: 1.5, fontSize: '1.1rem', borderRadius: 2, ':hover': { bgcolor: 'primary.700' } }}
                    fullWidth
                    disabled={!selectedCard || (selectedCard === 4 && !customAmount)}
                  >
                    Purchase Gift Card
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Box>
        {/* Testimonials */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" gutterBottom sx={{ fontFamily: 'display', fontWeight: 600, color: 'primary.900', mb: 3 }}>What Our Customers Say</Typography>
          <Grid container spacing={3}>
            {testimonials.map((t, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Card sx={{ p: 3, bgcolor: 'primary.100', borderRadius: 3, boxShadow: 1 }}>
                  <Typography variant="body1" sx={{ mb: 1, fontFamily: 'serif', color: 'primary.800' }}>
                    "{t.text}"
                  </Typography>
                  <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600 }}>
                    - {t.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* FAQ */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" gutterBottom sx={{ fontFamily: 'display', fontWeight: 600, color: 'primary.900', mb: 3 }}>Frequently Asked Questions</Typography>
          {faqs.map((faq, idx) => (
            <Accordion key={idx} sx={{ mb: 2, borderRadius: 2, boxShadow: 1, bgcolor: 'primary.50' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'primary.600' }} />}>
                <Typography sx={{ fontWeight: 600, color: 'primary.900' }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: 'primary.800' }}>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
