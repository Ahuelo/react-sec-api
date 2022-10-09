import React from 'react';
import * as API from '../services/launches.js'
import { useEffect, useState } from 'react';
import { LaunchItem } from "../LaunchItem";

const Launches = () =>{
    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
        API.getAllLaunches().then(setLaunches);
    }, []);
    return (
        <section>
            {launches.map(launch=>(
                <LaunchItem 
                key={launch.flight_number} 
                {...launch}/>
            ))}
        </section>
    )

}

export { Launches };