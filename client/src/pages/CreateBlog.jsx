import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Paper,
    Stack,
  } from '@mui/material';
  import { useState } from 'react';
  
  export default function CreateBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const blogData = new FormData();
      blogData.append('title', title);
      blogData.append('content', content);
      blogData.append('image', image);
  
      // Send to backend (POST request)
      fetch('/api/blogs', {
        method: 'POST',
        body: blogData,
      })
        .then((res) => res.json())
        .then((data) => {
          alert('Blog posted!');
          // Clear form or redirect
        });
    };
  
    return (
      <Container maxWidth="md">
        <Paper elevation={4} sx={{ p: 4, mt: 5, bgcolor: 'grey.900' }}>
          <Typography variant="h4" color="white" gutterBottom>
            ✍️ Create New Blog
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Blog Title"
                variant="filled"
                required
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'lightgray' } }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
  
              <TextField
                fullWidth
                label="Blog Content"
                variant="filled"
                required
                multiline
                minRows={6}
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'lightgray' } }}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
  
              <Button variant="outlined" component="label" color="secondary">
                Upload Cover Image
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Button>
  
              <Button type="submit" variant="contained" color="primary">
                Publish Blog 🚀
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    );
  }