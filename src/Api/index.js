export const url_base = 'http://localhost:8000';
// export const url_base = 'https://porta-folio-back-end-node-mongo.onrender.com';
// export const url_base = 'https://web-production-fbe0.up.railway.app';

export const getToken = () => {
    const token = `Bearer ${localStorage.getItem('token')}`;

    return token;
};
