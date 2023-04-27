
import apiBackEnd from "./api.Backend.js";

let getAllSupervisors = () =>{
    return apiBackEnd.get('/api/supervisor/all')
}

let getSupervisorByUuid = (uuid) => {
    return apiBackEnd.get(`/api/supervisor/admin/uuid/${uuid}`)
}

let updateByUuid = (uuid) => {
    return apiBackEnd.put(``)
}
 

export const supervisorService = {
    getAllSupervisors, getSupervisorByUuid
}