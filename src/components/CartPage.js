import React, { useEffect, useState } from 'react';
import { api } from '../api';

const CartPage = ({ userId }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await api.getCartItems(userId);
                setCartItems(items);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, [userId]);

    const handleRemoveItem = async (itemId) => {
        try {
            await api.deleteCartItem(itemId);
            setCartItems(cartItems.filter(item => item.id !== itemId));
        } catch (error) {
            console.error('Error removing cart item:', error);
        }
    };

    const handlePlaceOrder = async () => {
        const tableId = prompt('Enter your table ID:');
        try {
            await api.placeOrder(userId, tableId);
            alert('Order placed successfully');
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} (x{item.quantity})
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
};

export default CartPage;
