import apiBackEnd from "./api.Backend.js";

let getAllRoles = () =>{
    return apiBackEnd.get('/api/role/all')
   }
   
   
   export const roleService = {
       getAllRoles
   }

   