import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
    SignOutButton,
  } from '@clerk/clerk-react';
  import { Link } from 'react-router-dom';
  import {
    Container,
    Box,
    Typography,
    Button,
    Stack,
    Paper,
  } from '@mui/material';
  
  export default function Home() {
    return (
      <Box
        sx={{
          background: 'linear-gradient(to right, #e3f2fd, #ffffff)',
          minHeight: '100vh',
          py: 8,
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              borderRadius: 4,
              p: { xs: 4, sm: 6 },
              textAlign: 'center',
              backgroundColor: '#ffffffcc',
              backdropFilter: 'blur(6px)',
            }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Welcome to Our Platform
            </Typography>
  
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Secure access powered by Clerk. Login or sign up to continue.
            </Typography>
  
            {/* When user is signed out */}
            <SignedOut>
              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} justifyContent="center" mt={4}>
                <SignInButton mode="modal">
                  <Button variant="contained" size="large" sx={{ minWidth: 120 }}>
                    Sign In
                  </Button>
                </SignInButton>
  
                <SignUpButton mode="modal">
                  <Button variant="outlined" size="large" sx={{ minWidth: 120 }}>
                    Sign Up
                  </Button>
                </SignUpButton>
              </Stack>
            </SignedOut>
  
            {/* When user is signed in */}
            <SignedIn>
              <Box mt={4}>
                <Stack spacing={2} alignItems="center">
                  <UserButton />
                  <SignOutButton>
                    <Button variant="contained" color="error">
                      Sign Out
                    </Button>
                  </SignOutButton>
  
                  <Button
                    component={Link}
                    to="/dashboard"
                    variant="outlined"
                    color="primary"
                  >
                    Go to Dashboard
                  </Button>
                </Stack>
              </Box>
            </SignedIn>
          </Paper>
        </Container>
      </Box>
    );
  }