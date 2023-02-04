import { url_base } from '../Api';

export const sendMail = async (data) => {
    try {
        const response = await fetch(`${url_base}/email_send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        return error;
    }
};
