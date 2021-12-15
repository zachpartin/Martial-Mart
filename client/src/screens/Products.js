import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({products, currentUser}) => {
  
  return (
    <div className="productsPage">
      <h1 className="forSale">For Sale</h1>
      
      {currentUser ?
        (<Link to='/products/new'>
          <button className="addButton">Add Product</button>
        </Link>)
        : (<> </>)
        }
      <div className="products">
      {products.map((product) => (
        <div className="product">
          <Link to={`products/${product.id}`} className="productLink">
            <img src={product.img_url} alt="product" className="productImg"/>
            <h4>{product.name}</h4>
            <h4>${product.price}</h4>
          </Link>
         </div>
      ))}
        </div>
    </div>
  )
}

export default Products;