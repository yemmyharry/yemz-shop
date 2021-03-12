import React from 'react'
import {Container, Grid, Button, Typography } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'

 function Cart({cart}) {

    const classes = useStyles()
    const EmptyCart = () => {
        return <Typography variant="subtitle2">
            You have no items in your cart
        </Typography>
    }

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id} >
                    <CartItem item={item} />
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4"> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size='large' variant="contained">Empty Cart</Button>
                <Button className={classes.emptyButton} size='large' variant="contained">Checkout</Button>
            </div>
        </div>
        </>
    )

    if(!cart.line_items) return 'Loading....'

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography variant="h6"> Your Shopping Cart </Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart