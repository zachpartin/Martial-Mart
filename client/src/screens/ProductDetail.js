import { getOneProduct } from "../services/product";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = ({ currentUser, handleProductDelete }) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async (id) => {
      const product = await getOneProduct(id);
      setProduct(product);
    };
    fetchProduct(id);
  }, [id]);

  return (
    <div className="productDetail">
      <img src={product.img_url} alt="Product"/>
      <h4>{product.name}</h4>
      <h4>${product.price}</h4>
      <p>"{product.description}"</p>
      {currentUser ? (
        <div className="userButtons">
        <Link to={`/products/${product.id}/edit`}>
          <button>Edit</button>
          </Link>
          <button onClick={() => handleProductDelete(product.id)}>Delete</button>
          </div>
      ) : (
          <></>
      )}
          
    </div>
  );
};

export default ProductDetail;
