import React, {useState,useEffect} from 'react';
import {supervisorService} from "../service/supervisor.service.jsx";

const GestionResponsables = () => {

    const [supervisors,setSupervisors] =useState([]);

    useEffect(() => {
        supervisorService.getAllSupervisors()
            .then(res => {
                setSupervisors(res.data.content)
            })
            .catch(err => console.log(err))
    }, []);
console.log(supervisors);
    return (
        <div className="p-28">
            <div className="overflow-x-auto">
                <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                    <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">Liste des
                        Responsable</h2>
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
                    {supervisors.map((supervisor , index) => (
                        <tr key={index}>
                            <td>{supervisor.lastName}</td>
                            <td>{supervisor.firstName}</td>
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

                    {/* row 2 */}
                    </tbody>
                </table>
                <div className="p-7 grid place-items-end">
                    <button className="border-2 border-blue-500 rounded-full p-1 px-2 flex items-end">Ajouter un
                        membre
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GestionResponsables;
