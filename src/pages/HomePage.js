import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to the Restaurant Ordering App</h1>
    <Link to="/menu">View Menu</Link>
  </div>
);

export default HomePage;
