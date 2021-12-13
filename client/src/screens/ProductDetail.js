import { getOneProduct } from "../services/product";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
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
    <div>
      <h4><img src={product.img_url}/></h4>
      <h4>{product.name}</h4>
      <h4>{product.price}</h4>
      <p>"{product.description}"</p>
      
    </div>
  );
};

export default ProductDetail;
