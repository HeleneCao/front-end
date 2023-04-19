import axios from 'axios';


import {getToken} from "./tokenServices.js";
import handleHttpError from "../components/error/HandleHttpError.jsx";


const apiBackEnd = axios.create({
    baseURL: "http://localhost:8081",
});
export default apiBackEnd;

apiBackEnd.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${getToken()}`;
    return request;
});


apiBackEnd.interceptors.response.use(
    (response) => {
        console.log(response.status);
        return response;
    },
    (error) => {
        handleHttpError(error);
        return error;
    },
);
