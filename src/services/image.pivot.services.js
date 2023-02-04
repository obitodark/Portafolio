import { url_base, getToken } from '../Api';

export const createPivotImage = async (data) => {
    try {
        const response = await fetch(`${url_base}/images_projects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: getToken() },
            body: JSON.stringify(data)
        });

        return await response.json();
    } catch (error) {}
};

export const deletePivotImage = async (id) => {
    try {
        const response = await fetch(`${url_base}/images_projects/${id}`, {
            method: 'DELETE',
            headers: {
                headers: { 'Content-Type': 'application/json', Authorization: getToken() }
            }
        });

        return await response.json();
    } catch (error) {
        return error;
    }
};
