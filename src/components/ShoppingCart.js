import React from 'react';

function ShoppingCart({ cart, updateCartItem, removeCartItem, checkout }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.product.title}</h3>
              <p>Price: ${item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => updateCartItem(item.id, item.quantity + 1)}>
                Increase Quantity
              </button>
              <button onClick={() => updateCartItem(item.id, item.quantity - 1)}>
                Decrease Quantity
              </button>
              <button onClick={() => removeCartItem(item.id)}>Remove from Cart</button>
            </div>
          ))}
          <button onClick={checkout}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
