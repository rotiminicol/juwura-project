import { Container, Typography, Grid, Card, Box, TextField, Button, Avatar, Divider, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar?: string;
  wishlist: { id: number; name: string; }[];
  orders: {
    id: number;
    date: string;
    total: number;
    status: string;
    items: { name: string; qty: number; }[];
  }[];
}

const mockUser: UserProfile = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "+234 123 456 7890",
  address: "123 Fashion Street, Lagos",
  avatar: "/avatars/jane.jpg",
  wishlist: [
    { id: 1, name: "Adire Maxi Dress" },
    { id: 2, name: "Handcrafted Tote Bag" }
  ],
  orders: [
    { id: 1, date: "2025-05-20", total: 150.00, status: "Delivered", items: [{ name: "Adire Maxi Dress", qty: 1 }] },
    { id: 2, date: "2025-05-15", total: 220.00, status: "Processing", items: [{ name: "Handcrafted Tote Bag", qty: 2 }] },
    { id: 3, date: "2025-05-10", total: 85.00, status: "Completed", items: [{ name: "Adire Blouse", qty: 1 }] }
  ]
};

export default function ProfilePage() {
  const [user, setUser] = useState(mockUser);
  const [editMode, setEditMode] = useState(false);
  const [orderModal, setOrderModal] = useState<{ open: boolean; order: any } | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleEdit = () => setEditMode(true);
  const handleSave = () => setEditMode(false);
  const handleOrderClick = (order: any) => setOrderModal({ open: true, order });
  const handleOrderClose = () => setOrderModal(null);
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatarFile(e.target.files[0]);
      // In a real app, upload and update avatar here
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        My Profile
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Avatar src={avatarFile ? URL.createObjectURL(avatarFile) : user.avatar} sx={{ width: 100, height: 100, mx: 'auto' }} />
              <Typography variant="h6" sx={{ mt: 2 }}>{user.name}</Typography>
              <Button variant="outlined" component="label" sx={{ mt: 2 }}>
                Upload Photo
                <input type="file" hidden accept="image/*" onChange={handleAvatarChange} />
              </Button>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Box>
              <Typography variant="subtitle2" gutterBottom>Account Settings</Typography>
              <Button fullWidth variant="outlined" color="primary" onClick={handleEdit}>Edit Profile</Button>
              <Button fullWidth variant="outlined" sx={{ mt: 2 }}>Change Password</Button>
              <Button fullWidth variant="outlined" sx={{ mt: 2 }}>Addresses</Button>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={9}>
          <Card sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>Personal Information</Typography>
            {!editMode ? (
              <Box>
                <Typography>Email: {user.email}</Typography>
                <Typography>Phone: {user.phone}</Typography>
                <Typography>Address: {user.address}</Typography>
              </Box>
            ) : (
              <Box>
                <TextField fullWidth label="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} sx={{ mb: 2 }} />
                <TextField fullWidth label="Phone" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} sx={{ mb: 2 }} />
                <TextField fullWidth label="Address" value={user.address} onChange={(e) => setUser({ ...user, address: e.target.value })} sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Button variant="contained" onClick={handleSave}>Save Changes</Button>
                  <Button variant="outlined" onClick={() => setEditMode(false)}>Cancel</Button>
                </Box>
              </Box>
            )}
          </Card>
          {/* Wishlist Section */}
          <Card sx={{ p: 4, mt: 4 }}>
            <Typography variant="h5" gutterBottom>Wishlist</Typography>
            <List>
              {user.wishlist.map(item => (
                <ListItem key={item.id}>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Card>
          {/* Recent Orders Section */}
          <Card sx={{ p: 4, mt: 4 }}>
            <Typography variant="h5" gutterBottom>Recent Orders</Typography>
            {user.orders.map((order) => (
              <Box key={order.id} sx={{ mb: 2 }}>
                <Button variant="outlined" onClick={() => handleOrderClick(order)} sx={{ mb: 1 }}>
                  Order #{order.id} - {order.status}
                </Button>
                <Typography variant="body2" color="text.secondary">{order.date} - ${order.total.toFixed(2)}</Typography>
              </Box>
            ))}
          </Card>
          {/* Order Details Modal */}
          <Dialog open={!!orderModal} onClose={handleOrderClose}>
            <DialogTitle>Order Details</DialogTitle>
            <DialogContent>
              {orderModal?.order && (
                <>
                  <Typography>Order #{orderModal.order.id}</Typography>
                  <Typography>Date: {orderModal.order.date}</Typography>
                  <Typography>Status: {orderModal.order.status}</Typography>
                  <Typography>Total: ${orderModal.order.total.toFixed(2)}</Typography>
                  <Typography sx={{ mt: 2, fontWeight: 'bold' }}>Items:</Typography>
                  <List>
                    {orderModal.order.items.map((item: any, idx: number) => (
                      <ListItem key={idx}>
                        <ListItemText primary={`${item.name} x${item.qty}`} />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleOrderClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Container>
  );
}
