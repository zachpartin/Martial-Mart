import { Route, Switch, useHistory } from 'react-router-dom';
import Homepage from '../screens/Homepage.js';
import Products from '../screens/Products.js';
import ProductDetail from '../screens/ProductDetail.js';
import ProductEdit from '../screens/ProductEdit';
import { useState, useEffect } from 'react';
import { deleteProduct, getAllProducts, putProduct } from '../services/product.js';


const MainContainer = ({currentUser}) => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    }
    fetchProducts();
  }, [])

  const handleProductUpdate = async (id, formData) => {
    const newProduct = await putProduct(id, formData);
    setProducts((prevState) => [...prevState, newProduct]);
    history.push('/products');
  };

  const handleProductDelete = async (id) => {
    await deleteProduct(id);
    setProducts((prevState) => prevState.filter((product) => product.id !== id))
  }



  return (
    <div>
      <Switch>
      <Route path='/products/:id/edit'>
          <ProductEdit
          handleProductUpdate={handleProductUpdate}
          />
        </Route>
        <Route path='/products/:id'>
          <ProductDetail
            currentUser={currentUser}
            handleProductDelete={handleProductDelete}
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