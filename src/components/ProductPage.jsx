import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductAddForm from './ProductAddForm';
import ProductUpdateForm from './ProductUpdateForm';

function ProductPage({ products: propProducts, addToCart }) {
  // State for managing various aspects of the component
  const [products, setProducts] = useState(propProducts);
  const [detailsVisible, setDetailsVisible] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // Sorting order state

  // Function to toggle the visibility of product details
  const toggleDetails = (productId) => {
    setDetailsVisible((prevVisible) => ({
      ...prevVisible,
      [productId]: !prevVisible[productId],
    }));
  };

  // Function to handle the addition of a new product
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setShowAddForm(false);
  };

  // Function to handle the update of a product
  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setShowUpdateForm(false);
    setSelectedProduct(null);
  };

  // Function to toggle the visibility of the update form
  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  // Function to sort the products based on selected order
  const sortProducts = (productList, order) => {
    return productList.slice().sort((a, b) => {
      if (order === 'asc') {
        return a.title.localeCompare(b.title);
      } else if (order === 'desc') {
        return b.title.localeCompare(a.title);
      } else if (order === 'highToLow') {
        return b.price - a.price;
      } else if (order === 'lowToHigh') {
        return a.price - b.price;
      }
    });
  };

  // Sort the products based on the selected order
  const sortedProducts = sortProducts(products, sortOrder);

  return (
    <div>
      <div className="product-header">
        <button className="dropbtn add-product-button" onClick={() => setShowAddForm(true)}>Add Product</button>
        <h1 className="product-header-title">Product Listing</h1>
        <div className="dropdown">
          <button className="dropbtn">Sort By</button>
          <div className="dropdown-content">
            <button onClick={() => setSortOrder('asc')}>A-Z</button>
            <button onClick={() => setSortOrder('desc')}>Z-A</button>
            <button onClick={() => setSortOrder('highToLow')}>Price: High to Low</button>
            <button onClick={() => setSortOrder('lowToHigh')}>Price: Low to High</button>
          </div>
        </div>
      </div>
      <div className="product-list">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.title}</h2>
            <p style={{ marginTop: '10px' }}>Price: ${product.price}</p>
            <div className="button-container" style={{ marginTop: '10px' }}>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => toggleDetails(product.id)}>
                {detailsVisible[product.id] ? 'Hide Details' : 'See Details'}
              </button>
              <button
                onClick={() => {
                  setSelectedProduct(product);
                  toggleUpdateForm();
                }}
              >
                Update Product
              </button>
            </div>
            {detailsVisible[product.id] && (
              <div>
                <p>{product.description}</p>
              </div>
            )}
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
              style={{ marginTop: '10px' }}
            />
          </div>
        ))}
      </div>
      {showAddForm && (
        <div className="modal" style={{ alignItems: 'flex-start' }}>
          <div className="modal-content-column">
            <button className="modal-close" onClick={() => setShowAddForm(false)}>
              <strong>Close</strong>
            </button>
            <ProductAddForm onAddProduct={handleAddProduct} />
          </div>
        </div>
      )}
      {showUpdateForm && selectedProduct && (
        <div className="modal">
          <div className="modal-content-column">
            <button className="modal-close" onClick={toggleUpdateForm}>
              <strong>Close</strong>
            </button>
            <ProductUpdateForm
              product={selectedProduct}
              onUpdateProduct={handleUpdateProduct}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// PropTypes for type validation of component props
ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductPage;
