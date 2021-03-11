import React, {useState, useEffect} from 'react'
import {Navbar, Products} from '../src/components/Products/index'
import {commerce} from './lib/commerce'


function App() {
    const [products, setProducts] = useState([])
    const [cart , setCart] = useState({})

    const fetchProducts = async () => {
        const {data} = await commerce.products.list()
        
        setProducts(data)
    }

    const fetchCart = () => {
      commerce.cart.retrieve().then((cart) => setCart(cart));
    }

    const addToCart = (productId, quantity) => {
      commerce.cart.add(productId, quantity).then((response) => setCart(response));
    }

    useEffect(()=>{
        fetchProducts()
        fetchCart()
    },[])

    console.log(cart)

  return (
    <div className="App">
      <Navbar cart_items={cart.total_items} />
      <Products products={products} onAddToCart={addToCart} />
    </div>
  );
}

export default App;
