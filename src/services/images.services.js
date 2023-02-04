import { url_base, getToken } from '../Api';

export const getImage = async (id) => {
    try {
        const response = await fetch(`${url_base}/images/${id}`, {
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

export const createImage = async (image) => {
    try {
        let formData = new FormData();

        formData.append('url_image', image);

        const response = await fetch(`${url_base}/images`, {
            method: 'POST',
            headers: {
                Authorization: getToken()
                // 'Content-Type': 'multipart/form-data'
            },
            body: formData
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};
export const updateImage = async (id, image) => {
    try {
        let formData = new FormData();

        formData.append('url_image', image);

        const response = await fetch(`${url_base}/images/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: getToken()
                // 'Content-Type': 'multipart/form-data'
            },
            body: formData
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};
