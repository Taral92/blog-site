import { Box, Container, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

export default function Dashboard() {
  const navigate = useNavigate();

  const dummyBlogs = [
    {
      id: 1,
      title: 'How to Build a Modern Blog with React',
      description: 'Step-by-step guide on creating a full-stack blog using modern tech stack.',
    },
    {
      id: 2,
      title: 'The Power of Clerk Authentication',
      description: 'Seamlessly add authentication to your React apps using Clerk.',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h4" color="text.primary">
            Your Blog Dashboard
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Button variant="contained" color="primary" onClick={() => navigate('/create-blog')}>
              Write New Blog
            </Button>
            <UserButton afterSignOutUrl="/" />
          </Box>
        </Box>

        <Grid container spacing={3}>
          {dummyBlogs.map((blog) => (
            <Grid item xs={12} md={6} key={blog.id}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" color="text.primary">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {blog.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate(`/edit-blog/${blog.id}`)}>
                    Edit
                  </Button>
                  <Button size="small" color="error">
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}