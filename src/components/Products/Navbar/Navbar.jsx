import React from "react";
import useStyles from './styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  
} from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../../assets/logo1.png'
import {Link} from 'react-router-dom'

export default function Navbar({cart_items}) {

    const classes = useStyles();
    
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>
         
          <Typography component={Link} to="/" variant="h6" className={classes.title}>
              <img src={logo} alt="my-logo" height="25px" className={classes.image} />
             Yemz-Shop
          </Typography>
          <div>
              <IconButton component={Link} to="/cart" aria-label="show cart items">
                <Badge badgeContent={cart_items} color="primary">
                    <ShoppingCart />
                </Badge>
              </IconButton>
          </div>
    
        </Toolbar>
      </AppBar>
    </div>
  );
}
