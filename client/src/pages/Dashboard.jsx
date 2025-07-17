import { Container, Typography, Grid, Paper, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#121212', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center" mb={4}>
          <Grid item>
            <Typography variant="h4" color="white" fontWeight={600}>
              Your Blog Dashboard
            </Typography>
            <Typography variant="subtitle1" color="gray">
              Create, edit, and manage your posts
            </Typography>
          </Grid>
          <Grid item>
            <UserButton afterSignOutUrl="/" />
          </Grid>
        </Grid>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, bgcolor: '#1e1e1e' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                sx={{ py: 2, fontWeight: 600 }}
                onClick={() => navigate('/create-blog')}
              >
                ✍️ Write New Blog
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button
                variant="outlined"
                fullWidth
                sx={{ py: 2, fontWeight: 600, color: 'white', borderColor: 'gray' }}
                onClick={() => navigate('/edit-blog')}
              >
                🛠️ Edit Your Blogs
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Button
                variant="contained"
                fullWidth
                color="success"
                sx={{ py: 2, fontWeight: 600 }}
                onClick={() => navigate('/myblogs')}
              >
                📢 View Published Blogs
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}



































