
import apiBackEnd from "./api.Backend.js";

let getAllSupervisors = () =>{
    return apiBackEnd.get('/api/supervisor/all')
}

let getSupervisorByUuid = (uuid) => {
    return apiBackEnd.get(`/api/supervisor/uuid/${uuid}`)
}

export const supervisorService = {
    getAllSupervisors, getSupervisorByUuid
}