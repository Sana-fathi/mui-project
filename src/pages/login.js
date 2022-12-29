import * as React from 'react';
import { useState } from 'react'
import { useRouter } from "next/router";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link> */}
      {/* {new Date().getFullYear()} */}
    
    </Typography>
  );
}


const theme = createTheme();

const ButtonStyle = styled(Button)`
    // display: flex;
    // margin-left: auto;
    // margin-right: 5%;
    // & > p {
    //     margin-right: 100px;
    //     cursor: pointer
    // }
    background : #333;
    color : #fff;
    padding: 10px 10px;

`
const Login = styled(Grid)`


  & .MuiFormLabel-root {
    color: #333 0.5;
    fontFamily: Ubuntu; 
  }
  & .MuiCheckbox-root {
    opacity: 0.5;
  }
  // & .MuiTypography-root {
  //   font-size : 14px;
  // }
  & .MuiOutlinedInput-root{
    opacity: 0.5; 
  }
  & .MuiTextField-root {
    borderRadius: 50px;
  }
  & .MuiFormControlLabel-label {
    fontSize : 12px;
    opacity: 0.7;
  }
  & .MuiLink-root {
    color: rgb(0, 171, 85);
  }
  // & .MuiLink-underlineAlways-root{
  //     color: red;
  // }
  // & 	.Mui-focused {
  //   color: #333;
  // }
`;


export default function SignInSide() {
  const [ email ,setEmail ] = useState("");
  const [ password ,setPassword ] = useState("");
console.log("email:", email)

  const router = useRouter();

  const handleLogIn = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    const data = {
      email,
      password
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Login container component="main" sx={{ height: '100vh' }}>
        {/* <CssBaseline /> */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'linear-gradient(to right bottom, #f4f2f5, #e8faf8)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar> */}
             <Grid sx={{my: 4 ,mx: 4}}>
              <Typography variant={'h4'} align={"left"} style={{color: 'rgb(33, 43, 54)',fontFamily:'ubuntu' ,fontWeight:'700'}}>Sign in to KYC</Typography>
              <Typography variant={'body2'} align={"left"}>
                New user? <Link href={'/register'} style={{textDecoration: 'none'}}>Create an account</Link>
              </Typography>
            </Grid>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                autoFocus
                onChange={({ target }) => setEmail(target?.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
               
                autoComplete="current-password"
              />
              <FormControlLabel 
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me" variant="body"
              />
              {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button> */}
                  <ButtonStyle onClick={handleLogIn} variant="contained" fullWidth style={{fontFamily:'ubuntu'}}>Log In</ButtonStyle>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style={{textDecoration: 'none'}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" style={{textDecoration: 'none'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Login>
    </ThemeProvider>
  );
}