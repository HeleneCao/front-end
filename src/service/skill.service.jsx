
import apiBackEnd from "./api.Backend.js";

let getAllSkills = () =>{
    return apiBackEnd.get('/api/skill/all')
   }
   
   
   
   export const skillService = {
       getAllSkills
   }

   