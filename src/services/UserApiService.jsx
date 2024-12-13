import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/user';

export const fetchUsers = async () => {
    try {
        const res = await axios.get(`${API_BASE_URL}/getUsers`);
        return res.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return('Error fetching users.');
    }
};

export const fetchUserByID = async (id) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/getUser/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return('Error fetching user.');
    }
};

export const fetchUserByEmail = async (email) => {
    try {
        const res = await axios.get(`${API_BASE_URL}/findByEmail/${email}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return('Error fetching user.');
    }
};


export const saveUser = async (userDTO) => {
    try {
        const res = await axios.post(`${API_BASE_URL}/saveUser`, userDTO);
        return res.data;
    } catch (error) {
        console.error('Error saving user:', error);
        return { error: 'Error saving user.' };
    }
};

export const updateUser = async (userDTO) => {
    try {
        const res = await axios.put(`${API_BASE_URL}/updateUser`, userDTO);
        return res.data;
    } catch (error) {
        console.error('Error updating user:', error);
        return('Error updating user.');
    }
};

export const deleteUserByID = async (id) => {
    try {
        const res = await axios.delete(`${API_BASE_URL}/deleteUser/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        return 'Error deleting user.';
    }
};