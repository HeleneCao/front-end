import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { supervisorService } from "../service/supervisor.service";


const SupervisorDetails = () => {
  let {uuid} = useParams();
  console.log(uuid);

  const[supervisor, setSupervisor] = useState(null);

  useEffect(() => {
    supervisorService
      .getSupervisorByUuid(uuid)
      .then((res) => {
        console.log(res.data);
        setSupervisor(res.data);
      })
      .catch((err) => console.log(err));
    }, []);
  
  if (!supervisor) {
    return <div> Chargement ...</div>
  }

  console.log(supervisor);
  

  return (
    <div>
       <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nom
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Prenom
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Role
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Numero de telephone
          </th>
        
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        
        <tr key={supervisor.uuid}>
          <td className="px-6 py-4 whitespace-nowrap">{supervisor.lastName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{supervisor.firstName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{supervisor.email}</td>
          <td className="px-6 py-4 whitespace-nowrap">{supervisor.roleName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{supervisor.number}</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default SupervisorDetails


