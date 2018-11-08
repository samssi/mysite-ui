import axios from "axios";

export function configureAuthorizationHeader() {
    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('jwt');
}
