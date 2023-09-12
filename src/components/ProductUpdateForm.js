import React, { useState, useEffect } from 'react';

function ProductUpdateForm({ product, onUpdateProduct }) {
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    // Initialize the form fields with the product data
    setUpdatedProduct(product);
  }, [product]);

  const handleUpdateProduct = () => {
    // Perform validation if needed
    // Make API call to update the product
    onUpdateProduct(updatedProduct);
  };

  return (
    <div>
      {/* Your form fields */}
      <button onClick={handleUpdateProduct}>Update Product</button>
    </div>
  );
}

export default ProductUpdateForm;
