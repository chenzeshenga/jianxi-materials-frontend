import axios from 'axios';

const request = axios.create({
    baseURL: 'http://47.105.33.48:8889',
    timeout: 60000, // request timeout
    withCredentials: true, // 使前台能够保存cookie
});

// Add a request interceptor
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default request;