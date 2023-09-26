import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ProductUpdateForm = ({ product, onUpdateProduct }) => {
  // State to manage the updated product data
  const [updatedProduct, setUpdatedProduct] = useState(product);

  // Function to handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the changed field's value
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated product data to the parent component (e.g., ProductPage)
    onUpdateProduct(updatedProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Product</h2>
      <label>
        Title:
        <input type="text" name="title" value={updatedProduct.title} onChange={handleChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={updatedProduct.price} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={updatedProduct.description} onChange={handleChange}></textarea>
      </label>
      <label>
        Image URL:
        <input type="text" name="image" value={updatedProduct.image} onChange={handleChange} />
      </label>
      <button type="submit">Update Product</button>
    </form>
  );
};

// PropTypes for type validation of component props
ProductUpdateForm.propTypes = {
  product: PropTypes.object.isRequired, // Validate product prop
  onUpdateProduct: PropTypes.func.isRequired, // Validate onUpdateProduct prop
};

export default ProductUpdateForm;
