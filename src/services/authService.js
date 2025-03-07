import axios from 'axios';

const API_URL = '/api/auth/';

export const signup = async (userData) => {
    const response = await axios.post(`${API_URL}signup`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData);
    return response.data;
};

export const getProfile = async () => {
    const response = await axios.get(`${API_URL}profile`);
    return response.data;
};
