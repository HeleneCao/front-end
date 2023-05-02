import React, {useState,useEffect} from "react";
import {internService} from "../service/intern.service.jsx";
import LogoArchive from "./../images/Vector.png";
import ModalInternAdd from "./ModalInternAdd.jsx";
import {Link} from "react-router-dom";

const ManagementInterns = () => {

    const [interns,setInterns] =useState([]);
    const [update, setUpdate]= useState(false);
    const [showModalInternAdd, setShowModalInternAdd] = useState(false);

    useEffect(() => {
    internService.getAllInterns()
        .then(res => {
            setInterns(res.data.content)
        })
        .catch(err => console.log(err))
    }, []);


    const confirm = () => {

        setShowModalInternAdd(false);
        setUpdate(!update)
   
    }
   
    const onClose = () => {
        setShowModalInternAdd(false);
    }

    return (

        <div className="p-28">
            <div className="overflow-x-auto">
                <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                    <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">Liste des
                        stagiaires</h2>
                </div>
                <table className="w-full border border-slate-300">
                    {/* head */}
                    <thead className=" text-left border border-t-gray-300">
                    <tr>
                        <th className="p-2" scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Nom de la team</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {interns.map((intern,index) => (
                        <tr key={index}>
                            <td><Link to={`/gestionStagiaires/detail/${intern.uuid}`}>{intern.lastName}</Link></td>
                            <td><Link to={`/gestionStagiaires/detail/${intern.uuid}`}>{intern.firstName}</Link></td>
                            <td><Link to={`/gestionStagiaires/detail/${intern.uuid}`}>{intern.nomTeam.join(" - ")}</Link></td>
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

                    </tbody>
                </table>
                <div className="p-7 grid place-items-end">
                    <button className="border-2 border-blue-500 rounded-full p-1 px-2 flex items-end"
                    onClick={() => {setShowModalInternAdd(true)}}>
                        Ajouter un Stagiaire
                    </button>
                </div>

                <div>
                    <div>
                <ModalInternAdd isOpen={showModalInternAdd}
                confirm={confirm}
                onClose={onClose}
                 />
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default ManagementInterns;
