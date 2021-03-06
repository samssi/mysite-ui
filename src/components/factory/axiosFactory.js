import axios from "axios";

function createAxiosAuthRestClient() {
    return axios.create({
        baseURL: __AUTH_API_URL__
    });
}

function createAxiosContentRestClient() {
    const client = axios.create({
        baseURL: __CONTENT_API_URL__
    });
    client.interceptors.response.use(function(response) {
        return response;
    }, function (error) {
        if (error.response.status === 401) {
            throwOut();
        }
    });
    return client;
}

function throwOut() {
    console.info("Token expired. Removing token...");
    sessionStorage.removeItem("jwt");
    document.location.href = "/";
}

export { createAxiosAuthRestClient, createAxiosContentRestClient };