import { getOneProduct } from "../services/product"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = ({products}) => {
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getOneProduct();
      setProduct(product);
    }
    fetchProduct();
  })
  
  return (
    <h1>ProductDetail</h1>

  )
}

export default ProductDetail