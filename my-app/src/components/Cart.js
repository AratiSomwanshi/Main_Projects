// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import { getCart, placeOrder } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = 1; // Replace with actual user ID
    getCart(userId).then(response => setCart(response.data)).catch(error => console.error(error));
  }, []);

  const handlePlaceOrder = () => {
    const order = { /* Order details here */ };
    placeOrder(1, order) // Replace with actual user ID
      .then(() => navigate('/order-summary'))
      .catch(error => console.error(error));
  };

  if (!cart) return <div>Loading...</div>;

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.cartItems.map(item => (
          <li key={item.product.id}>
            {item.product.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}

export default Cart;
