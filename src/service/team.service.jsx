
import apiBackEnd from "./api.Backend.js";

let getAllTeams = () =>{
 return apiBackEnd.get('/api/team/all')
}

let getTeamByUuid = (uuid) =>{
    return apiBackEnd.get(`/api/team/uuid/${uuid}`)
}

let updateByUuid = (uuid) => {
    return apiBackEnd.put(`/api/team/uuid/${uuid}`)
}

let archiveByUuid = (uuid)=> {
    return apiBackEnd.put(`api/team/archive/${uuid}`)
}

let removeInternByUuid = (uuidTeam,uuidIntern) => {
    return apiBackEnd.put(`api/team/${uuidTeam}/remove/intern/${uuidIntern}`)
}


export const teamService = {
    getAllTeams,getTeamByUuid, updateByUuid,archiveByUuid,removeInternByUuid
}