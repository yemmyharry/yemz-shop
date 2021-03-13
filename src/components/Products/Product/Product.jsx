import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  IconButton,
  CardActions,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";


export default function Product({ product, onAddToCart }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="product-image"
          height="150"
          image={product.media.source}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h6">
              {product.name}
            </Typography>
            <Typography variant="h6">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color="textSecondary" component="p" />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
