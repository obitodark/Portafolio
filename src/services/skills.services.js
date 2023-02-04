import { getToken, url_base } from '../Api';

export const getSkills = async () => {
    try {
        const response = await fetch(`${url_base}/skills`, {
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

export const getSkillById = async (id) => {
    try {
        const response = await fetch(`${url_base}/skills/${id}`, {
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

const retunFormData = (data) => {
    let formData = new FormData();

    for (const prop in data) {
        formData.append(`${prop}`, data[prop]);
    }

    return formData;
};

export const createSkill = async (data) => {
    try {
        const response = await fetch(`${url_base}/skills`, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json'
                Authorization: getToken()
            },
            body: retunFormData(data)
        });

        return await response.json();
    } catch (error) {
        return error;
    }
};

export const updateSkill = async (id, data) => {
    try {
        const response = await fetch(`${url_base}/skills/${id}`, {
            method: 'PUT',
            headers: {
                // 'Content-Type': 'application/json'
                Authorization: getToken()
            },
            body: retunFormData(data)
        });

        return await response.json();
    } catch (error) {
        return error;
    }
};

export const deleteSkill = async (id) => {
    try {
        const response = await fetch(`${url_base}/skills/${id}`, {
            method: 'DELETE',
            headers: {
                // 'Content-Type': 'application/json'
                Authorization: getToken()
            }
        });

        return await response.json();
    } catch (error) {
        return error;
    }
};
