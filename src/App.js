import React, {useState, useEffect} from 'react'
import {Navbar, Products} from '../src/components/Products/index'
import {commerce} from './lib/commerce'


function App() {
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const {data} = await commerce.products.list()
        
        setProducts(data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(products)

  return (
    <div className="App">
      <Navbar />
      <Products products={products} />
    </div>
  );
}

export default App;
