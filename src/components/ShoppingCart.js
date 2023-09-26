import PropTypes from 'prop-types';

function ShoppingCart({ cart, updateCartItem, removeCartItem, checkout }) {
  // Function to add an item to the cart
  const addItemToCart = (itemId) => {
    // Find the item in the cart by its ID
    const item = cart.find((cartItem) => cartItem.id === itemId);

    if (item) {
      // Log a message indicating the addition of another item to the cart
      console.log(`Adding another ${item.title} to the cart.`);
      // Update the item's quantity in the cart
      updateCartItem(item.id, item.quantity + 1);
      // Log the new quantity after the update
      console.log(`New quantity: ${item.quantity + 1}`);
    }
  };

  // Function to perform the checkout process
  const performCheckout = () => {
    // Simulate a checkout process (you can replace this with your actual logic)
    alert('Thank you for your purchase!'); // Display a confirmation message
  
    // Navigate to the confirmation page (ensure that 'history' is accessible here)
    history.push('/confirmation');
  
    // Clear the cart (optional, depending on your logic)
    clearCart();
  };
  
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => addItemToCart(item.id)}>Add Another</button>
              <button onClick={() => updateCartItem(item.id, item.quantity - 1)}>
                Decrease Quantity
              </button>
              <button onClick={() => removeCartItem(item.id)}>Remove from Cart</button>
            </div>
          ))}
          <button onClick={performCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
}

// Add prop type validations
ShoppingCart.propTypes = {
  cart: PropTypes.array.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  removeCartItem: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
};

export default ShoppingCart;
