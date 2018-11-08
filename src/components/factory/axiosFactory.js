import axios from "axios";

import {BrowserRouter} from "react-router-dom";

export function createAxiosAuthRestClient() {
    return axios.create({
        baseURL: __AUTH_API_URL__
    });
}

export function createAxiosContentRestClient() {
    const client = axios.create({
        baseURL: __CONTENT_API_URL__
    });
    client.interceptors.response.use(function(response) {
        return response;
    }, function (error) {
        if (error.response.status === 401) {
            console.info("Token expired. Removing token...");
            sessionStorage.removeItem("jwt");
            BrowserRouter.push("/login");
        }
    });
    return client;
}