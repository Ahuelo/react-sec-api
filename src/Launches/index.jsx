import React from 'react';
import * as API from '../services/launches.js'
import { useEffect, useState } from 'react';
import { LaunchItem } from "../LaunchItem";
import { v4 as uuidv4 } from 'uuid';

const Launches = () =>{
    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
        API.getAllLaunches().then(setLaunches);
    }, []);
    return (
        <section>
            {launches.map(launch=>(
                <LaunchItem 
                key={uuidv4()} 
                {...launch}/>
            ))}
        </section>
    )

}

export { Launches };