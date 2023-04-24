
import apiBackEnd from "./api.Backend.js";

let getAllInterns = () => {
    return apiBackEnd.get('/api/intern/all')
}

let getInternByUuid = (uuid) =>{
    return apiBackEnd.get(`/api/intern/uuid/${uuid}`)
}

export const internService = {
    getAllInterns, getInternByUuid
}