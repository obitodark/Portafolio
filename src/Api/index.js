export const url_base = 'http://localhost:8000';

export const getToken = () => {
    const token = `Bearer ${localStorage.getItem('token')}`;

    return token;
};
