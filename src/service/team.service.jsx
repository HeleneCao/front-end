
import apiBackEnd from "./api.Backend.js";

let getAllTeams = () =>{
 return apiBackEnd.get('/api/team/all')
}


export const teamService = {
    getAllTeams
}