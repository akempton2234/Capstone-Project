import PropTypes from 'prop-types';

// Functional component for displaying an order confirmation page
const ConfirmationPage = ({ cart }) => {
  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Order Confirmation</h1>
      <h2>Selected Items:</h2>
      <ul>
        {/* Loop through the cart items and display details for each */}
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      {/* You can add more information and styling as needed */}
    </div>
  );
};

// PropTypes for type validation of component props
ConfirmationPage.propTypes = {
  cart: PropTypes.array.isRequired, // Validate cart prop as an array
};

export default ConfirmationPage;
