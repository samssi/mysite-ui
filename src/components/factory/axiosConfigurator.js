import axios from 'axios';

function configureAuthorizationHeader() {
    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('jwt');
}

module.exports = { configureAuthorizationHeader };
