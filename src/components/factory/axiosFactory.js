import axios from 'axios';
import config from 'Config';

import { browserHistory } from 'react-router';

function createAxiosAuthRestClient() {
    return axios.create({
        baseURL: config.AuthApi
    });
}

function createAxiosContentRestClient() {
    const client = axios.create({
        baseURL: config.ContentApi
    });
    client.interceptors.response.use(function(response) {
        return response;
    }, function (error) {
        if (error.response.status === 401) {
            console.info('Token expired. Removing token...');
            sessionStorage.removeItem('jwt');
            browserHistory.push('/login');
        }
    });
    return client;
}

module.exports = { createAxiosAuthRestClient, createAxiosContentRestClient };