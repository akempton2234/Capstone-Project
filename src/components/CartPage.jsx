import PropTypes from 'prop-types';

const CartPage = ({ cart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

CartPage.propTypes = {
  cart: PropTypes.array,
};

export default CartPage;
