import React, { useEffect, useState } from "react";
import { teamService } from "../service/team.service";
import {useParams} from "react-router-dom";

 const TeamDetails = () => {

     let {uuid} = useParams();
     console.log(uuid);
     // { match }

    const [team, setTeam] = useState();

     useEffect(() => {
         teamService.getTeamByUuid(uuid)
             .then(res => {
                 console.log(res.data.content)
             })
             .catch(err => console.log(err))
     },[]);
    //
    // useEffect(() => {
    //     teamService.getTeamByUuid(match.params.id)
    //         .then(res => {
    //             setTeam(res.data);
    //         })
    //         .catch(err => console.log(err));
    // }, [match.params.id]);
    //
    // if (!team) {
    //     return <div>Chargement...</div>;
    // }

    return (
        <div>
            {/*<h1>{team.name}</h1>*/}
            {/*<p>{team.description}</p>*/}
            <h1>user edit</h1>
        </div>
    );
};

export default TeamDetails;