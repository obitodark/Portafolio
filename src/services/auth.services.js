import { url_base } from '../Api';

export const singIn = async (data) => {
    try {
        const response = await fetch(`${url_base}/auth/singIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return { status: response.status, data: await response.json() };
    } catch (error) {
        return error;
    }
};

export const isAuthUser = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }

    const payload = token.split('.')[1];

    const jsonPayload = JSON.parse(window.atob(payload));

    if (jsonPayload.exp > new Date() / 1000) {
        return true;
    }

    return false;
};
