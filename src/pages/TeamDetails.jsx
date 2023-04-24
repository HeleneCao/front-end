import React, { useEffect, useState } from "react";
import { teamService } from "../service/team.service";
import {Link, useParams} from "react-router-dom";
import ModalUpdateTeam from './ModalUpdateTeam.jsx'
import { compareAsc, format } from 'date-fns'
const TeamDetails = () => {
  let { uuid } = useParams();
  console.log(uuid);

  const [team, setTeam] = useState(null);
    const [showModalUpdateTeam, setShowModalUpdateTeam] = useState(false);

  
 const confirm = () => {

  setShowModalUpdateTeam(false);
}

const onClose = () => {
  setShowModalUpdateTeam(false);
}

  useEffect(() => {
    teamService
      .getTeamByUuid(uuid)
      .then((res) => {
        console.log(res.data);
        setTeam(res.data);

      })
      .catch((err) => console.log(err));
  }, []);

  if (!team) {
    return <div>Chargement...</div>;
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
            Nom de team
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Langage utilisé
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nombre de personnes
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Date de création
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Url backlog
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Url repository
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr key={team.uuid}>
          <td className="px-6 py-4 whitespace-nowrap">{team.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{team.skills.map((skill) => skill.label).join(" - ")}</td>
          <td className="px-6 py-4 whitespace-nowrap">{team.interns.length}</td>
          <td className="px-6 py-4 whitespace-nowrap">{format(new Date(team.creationDate), 'dd-MM-yyyy')}</td>
          <td className="px-6 py-4 whitespace-nowrap">{team.urlRepository}</td>
          <td className="px-6 py-4 whitespace-nowrap">{team.urlBacklog}</td>
        </tr>
      </tbody>
    </table>
    <div className="p-7 grid place-items-end">
                    <button
                        className="border-2 border-blue-500 rounded-full p-1 px-2 flex items-end"
                        onClick={() => {setShowModalUpdateTeam(true)}}>
                        Modifier la team
                    </button>
                </div>

                <div>
                    <div>
                <ModalUpdateTeam isOpen={showModalUpdateTeam}
                confirm={confirm}
                onClose={onClose}
                nomTeam={team.name}
                dateCreation={team.creationDate}
                repo={team.urlRepository}
                backlog={team.urlBacklog}
                 />
                    </div>  
                </div>
      <div className="p-28">
        <div className="overflow-x-auto">
          <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
           <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">Liste des Interns de la Team</h2>
         </div>
         <table className="w-full border-slate-300">
            <thead className="text-left border border-t-gray-300">
           <tr>
             <th scope="col">Nom
              </th>
              <th scope="col">Prenom
             </th>
             <th scope="col">adresse mail
             </th>
             <th scope="col">

             </th>
             
           </tr>
           
            </thead>
            
            <tbody>
        {team.interns.map((intern,index) => (
            <tr key={index}>
              <td>{intern.firstName}</td>
              <td>{intern.lastName}</td>
              <td>{intern.email}</td>
              <td className="text-center">
                <button>
                  <img
                      src="src\images\Vector.png"
                      alt="Bouton archivé"
                      className="h-3 w-auto mr-2"
                  />
                </button>
              </td>
            </tr>
        ))
        }
        
        </tbody>
       
      </table>
  
      <div className="p-7 grid place-items-end">
        <button
            className="border-2 border-blue-500 rounded-full p-1 px-2 flex items-end">
          Ajouter un membre
        </button>
      </div>
    </div>
    </div>
</div>
  );
};

export default TeamDetails;