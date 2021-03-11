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

export default function Navbar({cart_items}) {

    const classes = useStyles();
    
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>
         
          <Typography variant="h6" className={classes.title}>
              <img src={logo} alt="my-logo" height="25px" className={classes.image} />
            Yemz-Shop
          </Typography>
          <div>
              <iconButton aria-label="show cart items">
                <Badge badgeContent={cart_items} color="primary">
                    <ShoppingCart />
                </Badge>
              </iconButton>
          </div>
    
        </Toolbar>
      </AppBar>
    </div>
  );
}
