import { Link } from 'react-router-dom';

const Products = ({products}) => {
  
  return (
    <div className="products">
      <h1>For Sale</h1>
      <Link to='/products/new'>
      <button>Add Product</button>
      </Link>
      {products.map((product) => (
        <div className="product">
          <Link to={`products/${product.id}`}>
            <img src={product.img_url} alt="product"/>
            <h4>{product.name}</h4>
            <h4>${product.price}</h4>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products;