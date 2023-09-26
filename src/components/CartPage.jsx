import PropTypes from 'prop-types';

// Functional component for displaying the shopping cart page
const CartPage = ({ cart, updateCartItem, removeCartItem }) => {
  // Calculate subtotal function
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of cart) {
      subtotal += item.price * item.quantity;
    }
    return subtotal;
  };

  return (
    <div>
      {/* Header for the shopping cart page */}
      <h1 className="cart-header">Shopping Cart</h1>

      {/* Display cart items */}
      <div className="cart-items">
        {/* Loop through cart items and display details for each */}
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <p className="cart-item-price">Price: ${(item.price * item.quantity).toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>
              Add Another
            </button>
            <button onClick={() => updateCartItem(item.id, item.quantity - 1)}>
              Decrease Quantity
            </button>
            <button onClick={() => removeCartItem(item.id)}>Remove from Cart</button>
          </div>
        ))}
      </div>

      {/* Display the subtotal */}
      <div className="cart-subtotal">
        <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

// PropTypes for type validation of component props
CartPage.propTypes = {
  cart: PropTypes.array.isRequired, // Validate cart prop as an array
  updateCartItem: PropTypes.func.isRequired, // Validate updateCartItem prop as a function
  removeCartItem: PropTypes.func.isRequired, // Validate removeCartItem prop as a function
};

export default CartPage;
