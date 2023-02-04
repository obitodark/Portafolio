import { url_base, getToken } from '../Api';

export const getCategories = async (id) => {
    try {
        const response = await fetch(`${url_base}/categories`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'multipart/form-data'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const getByIdCategory = async (id) => {
    try {
        const response = await fetch(`${url_base}/categories/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};
export const updateCategories = async (id, data) => {
    try {
        const response = await fetch(`${url_base}/categories/${id}`, {
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
export const deleteCategories = async (id) => {
    try {
        const response = await fetch(`${url_base}/categories/${id}`, {
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
export const createCategories = async (data) => {
    try {
        const response = await fetch(`${url_base}/categories`, {
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
