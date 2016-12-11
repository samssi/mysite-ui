import axios from 'axios';

function createAxiosClient() {
    return axios.create({
        baseURL: 'http://localhost:8100'
    });
}

module.exports = { createAxiosClient };