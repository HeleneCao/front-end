import React, {useState,useEffect} from 'react';
import {supervisorService} from "../service/supervisor.service.jsx";
import ModalSupervisorAdd from './ModalSupervisorAdd.jsx';

const ManagementSupervisors = () => {

    const [supervisors,setSupervisors] =useState([]);
    const [update, setUpdate]= useState(false);
    const [showModalSupervisorAdd, setShowModalSupervisorAdd] = useState(false);

    useEffect(() => {
        supervisorService.getAllSupervisors()
            .then(res => {
                setSupervisors(res.data.content)
            })
            .catch(err => console.log(err))
    }, [update]);

console.log(supervisors);

const confirm = () => {

    setShowModalSupervisorAdd(false);
    setUpdate(!update)

}

const onClose = () => {
    setShowModalSupervisorAdd(false);
}

console.log(supervisors)


    return (
        <div className="p-28">
            <div className="overflow-x-auto">
                <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                    <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">Liste des
                     responsables</h2>
                </div>
                <table className="w-full border border-slate-300">
                    {/* head */}
                    <thead className=" text-left border border-t-gray-300">
                    <tr>
                        <th  scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                    </tr>
                    </thead>
                    <tbody>
                    {supervisors.map((supervisor,index) =>  (
                        <tr key={index}>        
                            <td><Link to={`/gestionResponsables/detail/${supervisor.uuid}`}>{supervisor.lastName}</Link></td>
                            <td><Link to={`/gestionResponsables/detail/${supervisor.uuid}`}>{supervisor.firstName}</Link></td>
                            <td className="text-center">
                                <button>
                                    <img
                                        src={LogoArchive}
                                        alt="Bouton archivé"
                                        className="h-3 w-auto mr-2"
                                    />
                                </button>
                            </td>
                        </tr>
                        ))
                    }

                    {/* row 2 */}
                    </tbody>
                </table>
                <div className="p-7 grid place-items-end">
                    <button className="border-2 border-blue-500 rounded-full p-1 px-2 flex items-end"
                    onClick={() => {setShowModalSupervisorAdd(true)}}>
                        Ajouter un Responsable
                    </button>
                </div>
                <div>
                    <div>
                <ModalSupervisorAdd isOpen={showModalSupervisorAdd}
                confirm={confirm}
                onClose={onClose}
                 />
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default ManagementSupervisors;
