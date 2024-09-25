
  import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useMutation } from 'react-query';
import supabase from '../supabase'; // مسیری که در آن supabaseClient را تعریف کردید

const theme = createTheme();

const FormContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

const signUpUser = async ({ username, email, password }) => {
  const { data, error } = await supabase
    .from('sabzlearn-users')
    .insert([{ username, email, password }]);

  if (error) throw new Error(error.message);
  return data;
};

export default function SignUp() {
  const [usernameError, setUsernameError] = React.useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');
  const [isAgreed, setIsAgreed] = React.useState(false);

  const mutation = useMutation(signUpUser, {
    onSuccess: (data) => {
      console.log('User signed up successfully:', data);
      setSuccessMessage('ثبت نام با موفقیت انجام شد.');
      // نمایش پیام موفقیت یا انتقال کاربر به صفحه دیگر
    },
    onError: (error) => {
      console.error('Sign up failed:', error);
      // نمایش پیام خطا
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');

    let valid = true;

    // Username validation
    if (!username) {
      setUsernameError(true);
      setUsernameErrorMessage('لطفا یک نام کاربری وارد کنید.');
      valid = false;
    } else {
      setUsernameError(false);
      setUsernameErrorMessage('');
    }

    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('لطفا یک ایمیل معتبر وارد کنید.');
      valid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    // Password validation
    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('رمز عبور باید حداقل ۶ کاراکتر باشد.');
      valid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('رمز عبور و تأیید رمز عبور باید یکسان باشند.');
      valid = false;
    } else {
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage('');
    }

    if (valid) {
      setSuccessMessage(''); // Clear success message on new submission
      mutation.mutate({ username, email, password });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#f0f0f0',
        }}
      >
        <FormContainer component="main" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              ثبت نام
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              {successMessage && (
                <Typography
                  variant="body2"
                  color="success.main"
                  sx={{ mb: 2, textAlign: 'center' }}
                >
                  {successMessage}
                </Typography>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="نام کاربری"
                name="username"
                autoComplete="username"
                autoFocus
                error={usernameError}
                helperText={usernameErrorMessage}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="ایمیل"
                name="email"
                autoComplete="email"
                error={emailError}
                helperText={emailErrorMessage}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="رمز عبور"
                type="password"
                id="password"
                autoComplete="new-password"
                error={passwordError}
                helperText={passwordErrorMessage}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="تأیید رمز عبور"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                error={confirmPasswordError}
                helperText={confirmPasswordErrorMessage}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="agree"
                    color="primary"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                  />
                }
                label="قوانین و شرایط را می‌پذیرم"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
                disabled={mutation.isLoading || !isAgreed}
              >
                {mutation.isLoading ? 'در حال ثبت نام...' : 'ثبت نام'}
              </Button>
              <Box display="flex" justifyContent="center">
                <RouterLink to="/login">
                  {"قبلاً حساب کاربری دارید؟ وارد شوید"}
                </RouterLink>
              </Box>
            </Box>
          </Box>
        </FormContainer>
      </Box>
    </ThemeProvider>
  );
}
