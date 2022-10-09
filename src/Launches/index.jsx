import React from 'react';
import * as API from '../services/launches.js'
import { useEffect, useState } from 'react';

const Launches = () =>{
    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
        API.getAllLaunches() .then(setLaunches);
    },[]);
    return (
        <ul>
            {launches.map(launch=>(
            <li key={launch.flight_number}>
                {launch.mission_name} ({launch.launch_year})
            </li>
            ))}
        </ul>
    )

}

export { Launches };