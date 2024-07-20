import React, { useEffect, useState } from 'react';
import { api } from '../api';

const MenuDetailPage = ({ match, location }) => {
    const [menuItem, setMenuItem] = useState(null);
    const menuId = match.params.id;
    const { onAddToCart } = location.state || {};

    useEffect(() => {
        const fetchMenuItem = async () => {
            try {
                const item = await api.getMenuItem(menuId);
                setMenuItem(item);
            } catch (error) {
                console.error('Error fetching menu item:', error);
            }
        };

        fetchMenuItem();
    }, [menuId]);

    const handleAddToCart = () => {
        if (onAddToCart && menuItem) {
            onAddToCart(menuItem);
        }
    };

    if (!menuItem) return <div>Loading...</div>;

    return (
        <div>
            <h1>{menuItem.name}</h1>
            <p>{menuItem.description}</p>
            <p>Price: ${menuItem.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default MenuDetailPage;
