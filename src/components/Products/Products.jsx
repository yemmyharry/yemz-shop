import React from "react";
import { Grid } from "@material-ui/core";
import Product from '../Products/Product/Product'
import useStyles from './styles'

export default function Products({ products }) {
  const classes = useStyles();

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
