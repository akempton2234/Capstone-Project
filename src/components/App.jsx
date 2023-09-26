import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './ProductPage.jsx';
import CartPage from './CartPage.jsx';
import NotFound from './NotFound.jsx';
import Switch from 'react-switch';
import Navigation from './Navigation';
import '../style/index.css';
import Register from './Authorization/Register'; 
import Login from './Authorization/Login'; 

// Main App component
function App() {
  // State variables
  const [isDarkMode, setDarkMode] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCheckoutComplete, setCheckoutComplete] = useState(false);

  // Fetch products data from an API when the component mounts
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
  }, []);

  // Add an item to the cart
  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, create a copy of the cart
      const updatedCart = [...cart];
  
      // Update the quantity of the existing item in the copy
      updatedCart[existingItemIndex].quantity += 1;
  
      // Update the cart state with the updatedCart
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If the item doesn't exist, add it to the cart with a quantity of 1
      const cartItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        image: item.image,
        quantity: 1, // Initial quantity
      };
  
      setCart([...cart, cartItem]);
      localStorage.setItem("cart", JSON.stringify([...cart, cartItem]));
    }
  };
  
  // Update the quantity of an item in the cart
  const updateCartItem = (itemId, newQuantity) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove an item from the cart
  const removeCartItem = (itemId) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the subtotal of items in the cart
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  // Handle the checkout process
  const handleCheckout = () => {
    // Implement your checkout logic here
    // For this example, we'll simulate a delay to mimic server processing
    setTimeout(() => {
      // Clear the cart and set checkout status to complete
      setCart([]);
      localStorage.removeItem('cart'); // Remove cart data from localStorage
      setCheckoutComplete(true);
    }, 2000); 

    // You can also show a loading spinner or message during checkout processing
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <div className={isDarkMode ? 'App dark-mode' : 'App'}>
        {/* Navigation component */}
        <Navigation />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<ProductPage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} updateCartItem={updateCartItem} removeCartItem={removeCartItem} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Checkout button */}
        {cart.length > 0 && (
          <div>
            {isCheckoutComplete ? (
              <p>Checkout complete! Thank you for your order.</p>
            ) : (
              <button className="checkout-button" onClick={handleCheckout}>
                Checkout
              </button>
            )}
          </div>
        )}

        {/* Dark mode toggle */}
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

export default App;
