import { useState } from "react";

const ProductCreate = ({ handleProductCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    img_url: "",
    description: "",
  });
  const { name, price, img_url, description } = formData;

  const handleChange = (e) => {
    const { name, price, img_url, description, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      [price]: value,
      [img_url]: value,
      [description]: value,
    }));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleProductCreate(formData);
        }}
      >
        <h1>Add Product</h1>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="img_url"
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ProductCreate;
