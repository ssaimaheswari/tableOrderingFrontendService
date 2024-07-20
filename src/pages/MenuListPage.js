import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuList from '../components/MenuList';

const MenuListPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get('/api/menu')
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching menu list:', error);
      });
  }, []);

  return (
    <div>
      <MenuList menuItems={menuItems} />
    </div>
  );
};

export default MenuListPage;
