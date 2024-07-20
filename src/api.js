const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const api = {
    login: async (username, password) => {
        const response = await fetch(`${BASE_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        return response.json();
    },
    getMenuItems: async () => {
        const response = await fetch(`${BASE_URL}/api/menu`);
        return response.json();
    },
    getMenuItem: async (id) => {
        const response = await fetch(`${BASE_URL}/api/menu/${id}`);
        return response.json();
    },
    addToCart: async (userId, menuItemId, quantity) => {
        const response = await fetch(`${BASE_URL}/api/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, menuItemId, quantity }),
        });
        return response.json();
    },
    getCartItems: async (userId) => {
        const response = await fetch(`${BASE_URL}/api/cart/${userId}`);
        return response.json();
    },
    deleteCartItem: async (cartItemId) => {
        const response = await fetch(`${BASE_URL}/api/cart/${cartItemId}`, {
            method: 'DELETE',
        });
        return response.json();
    },
    placeOrder: async (userId, tableId) => {
        const response = await fetch(`${BASE_URL}/api/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, tableId }),
        });
        return response.json();
    },
};
