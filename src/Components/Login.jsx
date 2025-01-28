import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Card as MuiCard,
  Link,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function SignIn() {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateInputs()) {
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ height: '70vh', backgroundColor: '#f5f5f5', padding: 1 }}
    >
      <MuiCard sx={{ padding: 4, width: '100%', maxWidth: 400 }}>
        <Stack alignItems="center" mb={2}>
          <AccountCircle sx={{ fontSize: 48, color: 'gray' }} />
        </Stack>
        <Typography variant="h4" component="h1" textAlign="center" mb={2}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={emailError}
            helperText={emailErrorMessage}
            autoFocus
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            error={passwordError}
            helperText={passwordErrorMessage}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
          <Typography align="center" mt={2}>
            Don&apos;t have an account?{' '}
            <Link href="/signup" underline="hover">
              Sign up
            </Link>
          </Typography>
        </Box>
      </MuiCard>
    </Stack>
  );
}
