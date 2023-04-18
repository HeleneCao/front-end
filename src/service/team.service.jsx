import Axios from "./caller.services.jsx";
import apiBackEnd from "./api.Backend.js";

let getAllTeams = () =>{
 return apiBackEnd.get('/api/team/all')
}



export const teamService = {
    getAllTeams
}