import React from "react";
import { Grid } from "@material-ui/core";

export default function Products() {

    const products = [
        {id:1, name: 'shoes', description: "walking shoes"},
        {id:1, name: 'laptop', description: "dell gaming PC"},
        {id:1, name: 'pants', description: "men's pants"},
    ]
  return (
    <main>
      <Grid container justify="center" spacing={4}>
          {products.map(product => (
              <Grid key={product.id} xs={12} md={6} sm={3}>
                  <Product />
              </Grid>
          ))}
      </Grid>
    </main>
  );
}
