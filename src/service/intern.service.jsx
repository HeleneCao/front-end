
import apiBackEnd from "./api.Backend.js";

let getAllInterns = () => {
    return apiBackEnd.get('/api/intern/all')
}

let getInternByUuid = (uuid) =>{
    return apiBackEnd.get(`/api/intern/uuid/${uuid}`)
}

let updateByUuid = (uuid) => {
    return apiBackEnd.put(`/api/intern/update/${uuid}`)
}

export const internService = {
    getAllInterns, getInternByUuid, updateByUuid
}