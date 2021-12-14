import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductEdit = ({ handleProductUpdate, products }) => {
  const [formData, setFormData] =
    useState({
      name: '',
      price: '',
      img_url: '',
      description: '',
    });
  const { name, price, img_url, description } = formData;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const product = products.find((product) => product.id === Number(id));
      setFormData({ name: product.name, price: product.price, img_url: product.img_url, description: product.description  });
    };
    if (products.length) prefillFormData();
  }, [products, id]);

  const handleChange = (e) => {
    const { name, price, description, img_url, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      [price]: value,
      [description]: value,
      [img_url]: value,
    }));
  };

  return (
<div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleProductUpdate(id, formData);
      }}
      >
    <h1>Edit Product</h1>
        <label>
          Name:
          <input type='text' name='name' value={name} onChange={handleChange}/>
        </label>
        <label>
          Price:
          <input type='text' name='price' value={price} onChange={handleChange}/>
        </label>
        <label>
          Image URL:
          <input type='text' name='img_url' value={img_url} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type='text' name='description' value={description} onChange={handleChange} />
        </label>
        <button>Submit</button>
  </form>
</div>
  )
}

export default ProductEdit;