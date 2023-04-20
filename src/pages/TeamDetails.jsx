import React, { useEffect, useState } from "react";
import { teamService } from "../service/team.service";
import { useParams } from "react-router-dom";

const TeamDetails = () => {
  let { uuid } = useParams();
  console.log(uuid);

  const [team, setTeam] = useState(null);

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
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr key={team.uuid}>
          <td className="px-6 py-4 whitespace-nowrap">{team.name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{team.skills.map((skill) => skill.label).join(" - ")}</td>
          <td className="px-6 py-4 whitespace-nowrap">{team.nbrIntern}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TeamDetails;
