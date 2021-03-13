import React, { useState, useEffect } from "react";
import { Navbar, Products, Cart } from "../src/components/Products/index";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => setCart(cart));
  };

  const addToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((response) => setCart(response));
  };

  const removeFromCart = (productId) => {
    commerce.cart.remove(productId).then((response) => setCart(response));
  };

  const updateQuantity = (productId, quantity) => {
    commerce.cart
      .update(productId, { quantity: quantity })
      .then((response) => setCart(response));
  };

  const emptyCart = () => {
    commerce.cart.empty().then((response) => setCart(response));
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[]);

  console.log(cart);

  return (
    <Router>
      <div className="App">
        <Navbar cart_items={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleRemoveFromCart={removeFromCart}
              handleUpdateQuantity={updateQuantity}
              handleEmptyCart={emptyCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
