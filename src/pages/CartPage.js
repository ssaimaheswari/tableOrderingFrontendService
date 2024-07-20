import React, { useState } from 'react';
import Cart from '../components/Cart';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleOrder = () => {
    axios.post('/api/order', { items: cartItems })
      .then((response) => {
        alert('Order placed successfully!');
        setCartItems([]);
      })
      .catch((error) => {
        console.error('Error placing order:', error);
      });
  };

  return (
    <div>
      <Cart cartItems={cartItems} onRemove={handleRemove} onOrder={handleOrder} />
    </div>
  );
};

export default CartPage;
