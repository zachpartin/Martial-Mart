import { getOneProduct } from "../services/product";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './ProductDetail.css';

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
      <img src={product.img_url} alt="Product" className="productDetailImg"/>
      <h4>{product.name}</h4>
      <h4>${product.price}</h4>
      <p>"{product.description}"</p>
      {currentUser ? (
        <div className="userButtonDiv">
        <Link to={`/products/${product.id}/edit`}>
          <button className="userButtons">Edit</button>
          </Link>
          <button onClick={() => handleProductDelete(product.id)} className="userButtons">Delete</button>
          </div>
      ) : (
          <></>
      )}
          
    </div>
  );
};

export default ProductDetail;
