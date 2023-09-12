import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './ProductPage.jsx';
import CartPage from './CartPage.jsx';
import NotFound from './NotFound.jsx';
import Switch from 'react-switch';
import '../style/index.css';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const productData = await response.json();
        setProducts(productData);
        console.log('Products:', productData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []); // This effect runs once when the component mounts

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <div className={isDarkMode ? 'App dark-mode' : 'App'}>
        <Routes>
          <Route path="/" element={<ProductPage products={products} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Dark mode slider */}
        <div className="dark-mode-toggle">
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            onColor="#000"
            offColor="#ccc"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
      </div>
    </Router>
  );
}

App.propTypes = {
  products: PropTypes.array,
};

export default App;
