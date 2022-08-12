import axios from 'axios';

const useFetch = axios.create({
    baseURL: process.env.API_ENDPOINT || 'https://localhost:3000',
});

const onRequestHandler = async (request: any) => {
    request.headers['Content-Type'] = 'application/json';
    if (window?.localStorage?.getItem('TOKEN')) {
        const token = window.localStorage.getItem('TOKEN') || '';
        request.headers.AUTHORIZATION = `Bearer ${JSON.parse(token)}`;
    }
    return request;
};

const onRequestErrorHandler = (error: any) => {
    return Promise.reject(error);
};

const onResponseHandler = (response: any) => {
    return response;
};

const onResponseErrorHandler = (error: any) => {
    return Promise.reject(error);
}

useFetch.interceptors.request.use(onRequestHandler, onRequestErrorHandler);
useFetch.interceptors.response.use(onResponseHandler, onResponseErrorHandler);

export { useFetch };