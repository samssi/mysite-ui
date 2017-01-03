import axios from 'axios';
import { browserHistory } from 'react-router';

function createAxiosAuthRestClient() {
    return axios.create({
        baseURL: 'http://localhost:8100'
    });
}

function createAxiosContentRestClient() {
    const client = axios.create({
        baseURL: 'http://localhost:8090'
    });
    client.interceptors.response.use(function(response) {
        return response;
    }, function (error) {
        if (error.response.status = 401) {
            console.log('Token expired. Removing token...');
            sessionStorage.removeItem('jwt');
            browserHistory.push('/login');
        }
    });
    return client;
}

module.exports = { createAxiosAuthRestClient, createAxiosContentRestClient };