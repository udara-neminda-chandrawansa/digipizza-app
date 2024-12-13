import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/pizza';

export const fetchPizzas = async () => {
    try {
        const res = await axios.get(`${API_BASE_URL}/getPizzas`);
        return res.data;
    } catch (error) {
        console.error('Error fetching pizzas:', error);
        return('Error fetching pizzas.');
    }
};

export const fetchPizzaByID = async (id) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/getPizza/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching pizza:', error);
        return('Error fetching pizza.');
    }
};

export const savePizza = async (pizzaDTO) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/savePizza`, pizzaDTO);
        return res.data;
    } catch (error) {
        console.error('Error saving pizza:', error);
        return { error: 'Error saving pizza.' };
    }
};

export const updatePizza = async (pizzaDTO) => {
    try {
        const res = await axios.put(`${API_BASE_URL}/updatePizza`, pizzaDTO);
        return res.data;
    } catch (error) {
        console.error('Error updating pizza:', error);
        return('Error updating pizza.');
    }
};

export const deletePizzaByID = async (id) => {
    try {
        const res = await axios.delete(`${API_BASE_URL}/deletePizza/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error deleting pizza:', error);
        return 'Error deleting pizza.';
    }
};