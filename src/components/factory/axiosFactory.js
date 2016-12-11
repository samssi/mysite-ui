import axios from 'axios';

function createAxiosAuthRestClient() {
    return axios.create({
        baseURL: 'http://localhost:8100'
    });
}

function createAxiosContentRestClient() {
    return axios.create({
        baseURL: 'http://localhost:8090'
    });
}

module.exports = { createAxiosAuthRestClient, createAxiosContentRestClient };