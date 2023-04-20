
import apiBackEnd from "./api.Backend.js";

let getAllTeams = () =>{
 return apiBackEnd.get('/api/team/all')
}

let getTeamByUuid = (uuid) =>{
    return apiBackEnd.get(`/api/team/uuid/${uuid}`)
}

export const teamService = {
    getAllTeams,getTeamByUuid
}