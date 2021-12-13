import { Route, Switch } from 'react-router-dom'
import Homepage from '../screens/Homepage.js'
import Products from '../screens/Products.js'
import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/product.js';


const MainContainer = () => {
  const [products, setProducts] = useState([])
  


  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    }
    fetchProducts();
  }, [])

  return (
    <div>
      <Switch>
        <Route path='/'>
          <Homepage />
        </Route>
        <Route path='/products'>
          <Products
          products={products}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer;