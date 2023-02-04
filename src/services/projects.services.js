import { getToken, url_base } from '../Api';

export const getProjects = async (page = 1, per_page = 100, filter = '') => {
    try {
        const response = await fetch(`${url_base}/projects?page=${page}&per_page=${per_page}&filter=${filter}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await response.json();
    } catch (error) {
        return error;
    }
};

export const getByIdProjects = async (id) => {
    try {
        const response = await fetch(`${url_base}/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await response.json();
    } catch (error) {
        return error;
    }
};

export const deleteProjects = async (id) => {
    try {
        const response = await fetch(`${url_base}/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getToken()
            }
        });

        return await response.json();
    } catch (error) {
        return error;
    }
};

export const updateProjects = async (id, data) => {
    try {
        const response = await fetch(`${url_base}/projects/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getToken()
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    } catch (error) {
        return error;
    }
};
export const createProjects = async (data) => {
    try {
        // const token = `Bearer ${localStorage.getItem('token')}`;

        const response = await fetch(`${url_base}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getToken()
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    } catch (error) {
        return error;
    }
};
