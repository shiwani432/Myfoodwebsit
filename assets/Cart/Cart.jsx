import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-info">
                <strong>{item.name}</strong> × {item.quantity} = ${item.price * item.quantity}
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="total-amount">
          <strong>Total: ${totalAmount}</strong>
        </div>
      )}
    </div>
  );
};

export default Cart;
