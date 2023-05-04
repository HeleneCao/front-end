import React, { useEffect, useState } from 'react'
import { internService } from '../service/intern.service';
import LogoArchive from "./../images/Vector.png";
import {Link, useParams} from "react-router-dom";
import ModalUpdateIntern from './ModalUpdateIntern.jsx';
import { compareAsc, format } from 'date-fns';





const InternDetails = () => {

  let { uuid } = useParams();
  console.log(uuid);

  const [intern, setIntern] = useState(null);
  const [showModalUpdateIntern, setShowModalUpdateIntern] = useState(false);
  const [update, setUpdate]= useState(false);
  const [dateFr, setDateFr] = useState("");



const confirm = () => {

  setShowModalUpdateIntern(false);
setUpdate(!update)
}

const onClose = () => {
  setShowModalUpdateIntern(false);
}

  useEffect(() => {
    internService
    .getInternByUuid(uuid)
    .then((res) => {
      console.log(res.data);
      setIntern(res.data);
      setDateFr(new Date(res.data.creationDate).toLocaleString('en-GB', { timeZone: 'UTC' }).slice(0, 10))

    })
    .catch((err) => console.log(err));
  }, [update, dateFr]);

  if (!intern) {
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
            Date arrivee
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Date de limite de sortie
          </th>
          {/* <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Numero de telephone
          </th> */}
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Language(s)
          </th>
        
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        
        <tr key={intern.uuid}>
          <td className="px-6 py-4 whitespace-nowrap">{intern.lastName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{intern.firstName}</td>
          <td className="px-6 py-4 whitespace-nowrap">{intern.email}</td>
          <td className="px-6 py-4 whitespace-nowrap">{intern.arrivalDate}</td>
          <td className="px-6 py-4 whitespace-nowrap">{intern.releaseDate}</td>
          {/* <td className="px-6 py-4 whitespace-nowrap">{format(new Date(intern.dateArrivee), 'dd-MM-yyyy')}</td> */}
          {/* <td className="px-6 py-4 whitespace-nowrap">{intern.number}</td> */}
          <td className="px-6 py-4 whitespace-nowrap">{intern.skills.map((skill) => skill.label).join(" - ")}</td>

        </tr>
      </tbody>
    </table>
    <div className="p-7 grid place-items-end">
                    <button
                        className="border-2 border-blue-500 rounded-full p-1 px-2 flex items-end"
                        onClick={() => {setShowModalUpdateIntern(true)}}>
                        Modifier le stagiares
                    </button>
    </div>
    <div>
                    <div>
                <ModalUpdateIntern isOpen={showModalUpdateIntern}
                confirm={confirm}
                onClose={onClose}
                uuid={intern.uuid}
                nomIntern={intern.lastName}
                prenomIntern={intern.firstName}
                email={intern.email}
                dateArrivee={intern.arrivalDate}
                dateFin={intern.releaseDate}
                // numero={intern.number}
                skillsIntern={intern.skills}
                 />
                    </div>  
                </div>
    </div>
  )
}

export default InternDetails
