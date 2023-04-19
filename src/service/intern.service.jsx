
import apiBackEnd from "./api.Backend.js";

let getAllInterns = () => {
    return apiBackEnd.get('/api/intern/all')
}

export const internService = {
    getAllInterns
}