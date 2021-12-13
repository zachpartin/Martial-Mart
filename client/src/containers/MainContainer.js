import { Route, Switch } from 'react-router-dom';
import Homepage from '../screens/Homepage.js';
import Products from '../screens/Products.js';
import ProductDetail from '../screens/ProductDetail.js';
import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/product.js';


const MainContainer = () => {
  const [products, setProducts] = useState([]);

  

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
        <Route path='/products/:id'>
          <ProductDetail
          products={products}
          />
        </Route>
        <Route path='/products'>
          <Products
          products={products}
          />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer;