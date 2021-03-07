import React from 'react'
import { Card, CardMedia, CardContent, CardActionArea, Typography, IconButton, CardActions} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'

export default function Product({product}) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="product-image"
            height="140"
            image={product.image}
            title="product-image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="Add to Cart">
              <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    )
}
