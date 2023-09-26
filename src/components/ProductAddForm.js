import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Functional component for adding a new product
const ProductAddForm = ({ onAddProduct }) => {
  // State to manage the form input fields
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
  });

  // Function to handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the product data to the parent component (e.g., ProductPage)
    onAddProduct(product);
    // Clear the form by resetting the state
    setProduct({
      title: '',
      price: '',
      description: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <label>
        Title:
        <input type="text" name="title" value={product.title} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={product.description} onChange={handleChange}></textarea>
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={product.image} onChange={handleChange} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

// PropTypes for type validation of component props
ProductAddForm.propTypes = {
  onAddProduct: PropTypes.func.isRequired, // Validate onAddProduct prop
};

export default ProductAddForm;
