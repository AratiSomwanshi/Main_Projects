// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Your backend API URL

export const getProducts = () => axios.get(`${API_URL}/products`);
export const getProductById = (id) => axios.get(`${API_URL}/products/${id}`);
export const getCategories = () => axios.get(`${API_URL}/categories`);
export const registerUser = (user) => axios.post(`${API_URL}/users/register`, user);
export const loginUser = (credentials) => axios.post(`${API_URL}/users/login`, credentials);
export const getCart = (userId) => axios.get(`${API_URL}/carts/${userId}`);
export const addToCart = (userId, productId, quantity) => axios.post(`${API_URL}/carts/${userId}/items`, { productId, quantity });
export const placeOrder = (userId, order) => axios.post(`${API_URL}/orders/${userId}`, order);
