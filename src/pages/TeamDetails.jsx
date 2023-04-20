import React, { useEffect, useState } from "react";
import { teamService } from "../service/team.service";
import {useParams} from "react-router-dom";

 const TeamDetails = () => {

     let {uuid} = useParams();
     console.log(uuid);

    const [team, setTeam] = useState([]);

     useEffect(() => {
         teamService.getTeamByUuid(uuid)
             .then(res => {
                 console.log(res.data)
             })
             .catch(err => console.log(err))
     },[]);

    return (
        <div>
            <h1>user edit</h1>
        </div>
    );
};

export default TeamDetails;