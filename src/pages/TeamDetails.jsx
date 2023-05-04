import React, { useEffect, useState } from "react";
import { teamService } from "../service/team.service";
import {Link, useParams} from "react-router-dom";
import ModalUpdateTeam from './ModalUpdateTeam.jsx'
import { compareAsc, format } from 'date-fns';
import LogoArchive from "./../images/Vector.png";
import ModalAddInternTeam from "./ModalAddInternTeam.jsx";
import ModalAddReviewTeam from "./ModalAddReviewTeam.jsx";

const TeamDetails = () => {
  let { uuid } = useParams();


  const [team, setTeam] = useState(null);
    const [showModalUpdateTeam, setShowModalUpdateTeam] = useState(false);
    const [showModalAddReviewTeam, setShowModalAddReviewTeam] = useState(false);
    const [showModalAddInternTeam, setShowModalAddInternTeam] = useState(false);
    const [update, setUpdate]= useState(false);
    const [dateFr, setDateFr] = useState("");

  
 const confirm = () => {

  setShowModalUpdateTeam(false);
  setShowModalAddReviewTeam(false);
  setShowModalAddInternTeam(false);
  setUpdate(!update)
}

const onClose = () => {
  setShowModalUpdateTeam(false);
  setShowModalAddReviewTeam(false);
  setShowModalAddInternTeam(false);
}

  useEffect(() => { 
    teamService
      .getTeamByUuid(uuid)
      .then(res => {
        console.log(res.data);
        setTeam(res.data);
        setDateFr(new Date(res.data.creationDate).toLocaleString('en-GB', { timeZone: 'UTC' }).slice(0, 10))
        
        
      })
      .catch(err => console.log(err))
    }, [update, dateFr]);

  
const handleRemoveInternTeam = (uuidTeam,uuidIntern) => {
    teamService.removeInternByUuid(uuidTeam, uuidIntern);
    setTeam((prevTeam) => {
        const cloneTeam = {...prevTeam}
        let interns = cloneTeam.interns;
        interns = interns.filter((i) => i.uuid !== uuidIntern)
        cloneTeam.interns = interns;
        return cloneTeam;
    })
}

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
          <td className="px-6 py-4 whitespace-nowrap">{dateFr}</td>
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
                uuid={team.uuid}
                skillsTeam={team.skills}
                 />
                    </div>  
                </div>
          <div className="mx-10 my-10">
            <div className="overflow-x-auto">
                <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                    <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">
                      Reviews</h2>
                </div>
                <table className="w-full border-slate-300">
                    <thead className="text-left border border-t-gray-300">
                    <tr>
                        <th scope="col">Date
                        </th>
                        <th scope="col">Commentaire
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {team.reviews.map((review,index) => (
                        <tr key={index}>
                            <td>{format(new Date(review.date), 'dd-MM-yyyy')}</td>
                            <td>{review.comment}</td>
                        </tr>
                    ))
                    }
                    </tbody>

                </table>
                <div className="p-7 grid place-items-end">
                    <button
                        className="border-2 border-blue-500 rounded-full p-1 px-2 flex items-end"
                        onClick={() => {setShowModalAddReviewTeam(true)}}>
                        Ajouter une review
                    </button>
                </div>

                <div>
                  <div>
                    <ModalAddReviewTeam isOpen={showModalAddReviewTeam}
                    uuidTeam={team.uuid}
                   confirm={confirm}
                   onClose={onClose}
                    />
                  </div>
                </div>
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
             <th scope="col">
                 Nom
              </th>
              <th scope="col">
                  Prenom
             </th>
             <th scope="col">
                 Email
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
                      src={LogoArchive}
                      alt="Bouton archivé"
                      className="h-3 w-auto mr-2"
                      onClick={() => handleRemoveInternTeam(team.uuid,intern.uuid)}
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
            className="border-2 border-blue-500 rounded-full p-1 px-2 flex items-end"
            onClick={() => {setShowModalAddInternTeam(true)}}>
          Ajouter un stagiaire
        </button>
      </div>

      
      <div>
                  <div>
                    <ModalAddInternTeam isOpen={showModalAddInternTeam}
                    uuidTeam={team.uuid}
                   confirm={confirm}
                   onClose={onClose}
                    />
                  </div>
                </div>
    </div>
    </div>
</div>
  );
};

export default TeamDetails;