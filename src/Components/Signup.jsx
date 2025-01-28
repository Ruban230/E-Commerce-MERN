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

export default function Signup() {
  const [nameError, setnameError] = useState(false);
  const [nameErrorMessage, setnameErrorMessage] = useState('');
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
        name:data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;
   
    if (!name || !/\S+@\S+\.\S+/.test(name)) {
        setnameError(true);
        setnameErrorMessage('Please enter a valid name.');
        isValid = false;
      } else {
        setnameError(false);
        setnameErrorMessage('');
      }
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
      sx={{ height: '85vh', backgroundColor: '#f5f5f5', padding: 1 }}
    >
      <MuiCard sx={{ padding: 4, width: '100%', maxWidth: 400 }}>
        <Stack alignItems="center" mb={2}>
          <AccountCircle sx={{ fontSize: 48, color: 'gray' }} />
        </Stack>
        <Typography variant="h4" component="h1" textAlign="center" mb={2}>
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            error={nameError}
            helperText={nameErrorMessage}
            autoFocus
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={emailError}
            helperText={emailErrorMessage}
           
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
            Sign Up
          </Button>
          <Typography align="center" mt={2}>
             Have an account?{' '}
            <Link href="/login" underline="hover">
              SignIn
            </Link>
          </Typography>
        </Box>
      </MuiCard>
    </Stack>
  );
}
