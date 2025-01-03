import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        py: 3,
        mt: 'auto', // Ensures the footer sticks to the bottom of the page
      }}
    >
      <Container maxWidth="lg">
      <img
            src="/1.png"
            alt=""
            style={{ width: '60px', height: '60px', marginRight: '8px' }}
          />
          <span></span>
        
        <Typography variant="body2" align="center" sx={{ mb: 1 }}>
          © {new Date().getFullYear()} DRIP. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Link href="#" color="inherit" underline="hover">
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Terms of Service
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
