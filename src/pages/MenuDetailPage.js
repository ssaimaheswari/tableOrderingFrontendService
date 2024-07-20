import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MenuDetail from '../components/MenuDetail';

const MenuDetailPage = ({ onAddToCart }) => {
  const { id } = useParams();
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    axios.get(`/api/menu/${id}`)
      .then((response) => {
        setMenuItem(response.data);
      })
      .catch((error) => {
        console.error('Error fetching menu item:', error);
      });
  }, [id]);

  return (
    <div>
      {menuItem ? (
        <MenuDetail menuItem={menuItem} onAddToCart={onAddToCart} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MenuDetailPage;
