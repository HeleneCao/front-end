import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { supervisorService } from "../service/supervisor.service";
import LogoArchive from "./../images/Vector.png";
import ModalUpdateSupervisor from "./ModalUpdateSupervisor.jsx";

const SupervisorDetails = () => {
  let { uuid } = useParams();
  console.log(uuid);

  const[supervisor, setSupervisor] = useState(null);
  const [showModalUpdateSupervisor, setShowModalUpdateSupervisor] = useState(false);
  const [update, setUpdate]= useState(false);


const confirm = () => {

setShowModalUpdateSupervisor(false);
setUpdate(!update)
}

const onClose = () => {
setShowModalUpdateSupervisor(false);
}
  

  useEffect(() => {
    supervisorService
      .getSupervisorByUuid(uuid)
      .then((res) => {

        setSupervisor(res.data);
      })
      .catch((err) => console.log(err));
    }, [update]);
  
  if (!supervisor) {
    return <div> Chargement ...</div>
  }

  

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
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Language(s)
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
          <td className="px-6 py-4 whitespace-nowrap">{supervisor.skills.map((skill) => skill.label).join(" - ")}</td>

        </tr>
      </tbody>
    </table>
    <div className="p-7 grid place-items-end">
                    <button
                        className="border-2 border-blue-500 rounded-full p-1 px-2 flex items-end"
                        onClick={() => {setShowModalUpdateSupervisor(true)}}>
                        Modifier le supervisor
                    </button>
    </div>
    <div>
                    <div>
                <ModalUpdateSupervisor isOpen={showModalUpdateSupervisor}
                confirm={confirm}
                onClose={onClose}
                uuid={supervisor.uuid}
                nomSupervisor={supervisor.lastName}
                prenomSupervisor={supervisor.firstName}
                email={supervisor.email}
                role={supervisor.role}
                numero={supervisor.number}
                skillsSupervisor={supervisor.skills}
                 />
                    </div>  
                </div>
    </div>
  )
}

export default SupervisorDetails


