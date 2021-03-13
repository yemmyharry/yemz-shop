import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";

export default function CartItem({ item, handleUpdateQuantity, handleRemoveFromCart }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
      component="img"
        alt="item-image"
        height="150"
        image={item.media.source}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6">
            {item.name}
          </Typography>
          <Typography variant="h6">
            {item.price.formatted_with_symbol}
          </Typography>
        </div>
        <CardActions>
          <div className={classes.buttons}>
            <Button type="button" size="small" onClick={()=> handleUpdateQuantity(item.id, item.quantity - 1)}>
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button type="button" size="small" onClick={()=> handleUpdateQuantity(item.id, item.quantity + 1)}>
              +
            </Button>
           
          </div>
           <Button className={classes.actions} variant="contained" type="button" color="primary" onClick={()=> handleRemoveFromCart(item.id)}>
            Remove
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
