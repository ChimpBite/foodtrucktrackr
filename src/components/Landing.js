import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/foodtruck.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button } from '@material-ui/core/';

// Styles for the form components
const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    '@media (max-width: 550px)': {
      marginBottom: '10%',
    },
  },
  responsive: {
    '@media (max-width: 550px)': {
      width: '100%',
      height: 'auto',
    },
  },
  error: {
    color: 'red',
  },
  button: {
    padding: '1% 0',
    backgroundImage: 'linear-gradient(#FFAD33, #BF8124)',
    color: 'white',
    '&:focus': {
      outline: 'none',
    },
    marginBottom: '5%',
  },
  footer: {
    marginBottom: '5%',
  },
  h2: {
    fontSize: '1.2rem',
    marginTop: '2%',
  },
}));

const Login = () => {
  // setting component styles
  const classes = useStyles();

  return (
    <>
      <Box className={classes.header}>
        <img alt={'foodtruck'} src={Image} className={classes.responsive} />
        <h2 className={classes.h2}>
          FoodTruck TrackR was designed to make finding and eating at a food
          truck fast, easy and fun.
        </h2>
      </Box>
      <Grid item xs={12} className={classes.footer}>
        <Link to='/RegisterForm' style={{ textDecoration: 'none' }}>
          <Button
            fullWidth
            variant='contained'
            type='submit'
            className={classes.button}>
            Register
          </Button>
        </Link>
        <Link to='/Login' style={{ textDecoration: 'none' }}>
          <Button
            fullWidth
            variant='contained'
            type='submit'
            className={classes.button}>
            Login
          </Button>
        </Link>
      </Grid>
    </>
  );
};

export default Login;
