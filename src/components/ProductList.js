import React from 'react';

// Functional component for displaying a list of products
function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {/* Map through the 'products' array and render each product */}
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            {/* Button to add the product to the cart */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
