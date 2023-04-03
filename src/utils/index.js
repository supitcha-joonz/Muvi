import axios from 'axios';
import join from 'url-join';
import { server } from '../constants/index';

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;
export const apiUrl = `${process.env.REACT_APP_API}`;

axios.interceptors.request.use(async (config) => {

    if (!isAbsoluteURLRegex.test(config.url)) {
        const userToken = JSON.parse(localStorage.getItem(server.TOKEN_KEY));
        if (userToken) {
            config.headers.Authorization = "Bearer " + userToken;
        }
        config.url = join(apiUrl, config.url)
    }
    config.timeout = 60000 // 10 Second 
    return config
})

axios.interceptors.response.use((response) => {
    return response
}, error => {
    if (error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
    }
    else if (axios.isCancel(error)) {
        return Promise.reject(error)
    } else if (!error.response) {
        if (error.response.status === 401) {
            localStorage.clear();
        }
        return Promise.reject({ code: "NOT_CONNECT_NETWORK", message: "Cannot connect to server, Please try again." })
    }
    return Promise.reject(error)
})

export const httpClient = axios
