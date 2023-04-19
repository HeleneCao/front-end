
import apiBackEnd from "./api.Backend.js";

let getAllSupervisors = () =>{
    return apiBackEnd.get('/api/supervisor/all')
}

export const supervisorService = {
    getAllSupervisors
}