import { Link } from 'react-router-dom';
import './Products.css';

const Products = ({products}) => {
  
  return (
    <div className="products">
      <h1 className="forSale">For Sale</h1>
      <Link to='/products/new'>
      <button>Add Product</button>
      </Link>
      {/* <div className="product"> */}
      {products.map((product) => (
        <div className="product">
          <Link to={`products/${product.id}`}>
            <img src={product.img_url} alt="product" className="productImg"/>
            <h4>{product.name}</h4>
            <h4>${product.price}</h4>
          </Link>
         </div>
      ))}
        {/* </div> */}
    </div>
  )
}

export default Products;