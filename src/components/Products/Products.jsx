import React from "react";
import { Grid } from "@material-ui/core";
import Product from '../Products/Product/Product'
import useStyles from './styles'

export default function Products() {
  const classes = useStyles();
    const products = [
        {id:1, name: 'shoes', description: "walking shoes",price: "$100", image: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id:1, name: 'laptop', description: "dell gaming PC",price: "$100", image: "https://images.unsplash.com/photo-1615048234151-6bcbca4043c4?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
        {id:1, name: 'pants', description: "men's pants",price: "$100", image: "https://images.unsplash.com/photo-1615125945921-7b4fbdeaf0bc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    ]
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
          {products.map(product => (
              <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
              </Grid>
          ))}
      </Grid>
    </main>
  );
}
