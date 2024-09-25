
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useNavigate, Link as RouterLink } from 'react-router-dom'; 
import supabase from "../supabase";

const theme = createTheme();

const FormContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export default function LoginForm() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [loginError, setLoginError] = React.useState('');
  const [users, setUsers] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('sabzlearn-users').select('*');
      if (error) {
        console.error('Error fetching users:', error.message);
      } else {
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const password = data.get('password');

    let valid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('لطفا یک ایمیل معتبر وارد کنید.');
      valid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password || password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('رمز عبور باید حداقل ۶ کاراکتر باشد.');
      valid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (valid) {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setLoginError('');
        localStorage.setItem('token', user.token);
        navigate('/');
      } else {
        setLoginError('ایمیل یا رمز عبور اشتباه است. لطفا مجددا تلاش کنید.');
      }
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
              ورود
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="ایمیل"
                name="email"
                autoComplete="email"
                autoFocus
                error={emailError}
                helperText={emailErrorMessage}
                sx={{ mb: 2 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="رمز عبور"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError}
                helperText={passwordErrorMessage}
                sx={{ mb: 2 }}
              />
              <Typography
                variant="body2"
                color="error"
                align="center"
                sx={{ mt: 1 }}
              >
                {loginError}
              </Typography>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="مرا به خاطر بسپار"
                sx={{ mt: 2 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
              >
                ورود
              </Button>
              <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between">
                <Link href="#" variant="body2" sx={{ mb: 1 }}>
                  فراموشی رمز عبور؟
                </Link>
                <RouterLink to="/signup">
                  {"حساب کاربری ندارید؟ ثبت نام کنید"}
                </RouterLink>
              </Box>
            </Box>
          </Box>
        </FormContainer>
      </Box>
    </ThemeProvider>
  );
}
