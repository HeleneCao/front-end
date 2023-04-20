import React, {useEffect, useState} from 'react';
import {teamService} from "../service/team.service.jsx";
import {Link, useNavigate} from 'react-router-dom';


const GestionEquipes = () => {

    const [teams,setTeams] =useState([]);
    // const [selectedTeamUuid, setSelectedTeamUuid] = useState(null);
    // const navigate = useNavigate();


    useEffect(() => {
        teamService.getAllTeams()
            .then(res => {
                setTeams(res.data.content)
            })
            .catch(err => console.log(err))
    },[]);

    // const handleTeamClick = (uuid) => {
    //     navigate('/team/uuid/' + uuid)
    // };
 console.log(teams);
    return (
        <div className="p-28">
            <div className="overflow-x-auto">
                <div className="p-3 bg-blue-500 text-center border border-blue-500 rounded-t-2xl">
                    <h2 className="font-mono not-italic font-bold text-2xl leading-9 text-white">Liste des Teams</h2>
                </div>
                <table className="w-full border-slate-300">
                    <thead className="text-left border border-t-gray-300">
                    <tr>
                        <th scope="col">Nom de
                            la team
                        </th>
                        <th scope="col">Langage
                            utilisé
                        </th>
                        <th scope="col">Nombre
                            de Personnes
                        </th>
                        <th scope="col">

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {teams.map((team,index) => (
                            <tr key={index}>
                                <td><Link to={`/detail/${team.uuid}`}>{team.name}</Link></td>
                                <td><Link to={`/detail/${team.uuid}`}>{team.skills.map((skill) => skill.label).join(" - ")}</Link></td>
                                <td><Link to={`/detail/${team.uuid}`}>{team.nbrIntern}</Link></td>
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
                        Ajouter une team
                    </button>
                </div>
            </div>
        </div>

    );
};

export default GestionEquipes;
