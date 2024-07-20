import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import MenuListPage from './components/MenuListPage';
import MenuDetailPage from './components/MenuDetailPage';
import CartPage from './components/CartPage';

const App = () => {
    const [user, setUser] = useState(null);

    const handleLogin = (username, token) => {
        setUser({ username, token });
    };

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route
                    path="/login"
                    render={(props) => <LoginPage {...props} onLogin={handleLogin} />}
                />
                <Route path="/menu" exact component={MenuListPage} />
                <Route
                    path="/menu/:id"
                    render={(props

) => <MenuDetailPage {...props} />}
                />
                {user && <Route path="/cart" render={() => <CartPage userId={user.username} />} />}
            </Switch>
        </Router>
    );
};

export default App;
