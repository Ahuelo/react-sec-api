import React from 'react';
import * as API from '../services/launches.js'
import { useEffect, useState } from 'react';
import { LaunchItem } from "../LaunchItem";
import { v4 as uuidv4 } from 'uuid';
import { Heading } from '@chakra-ui/react';

const Launches = () =>{
    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
        API.getAllLaunches().then(setLaunches);
    }, []);
    return (
        <section>
            <Heading as='h1' size='xl' m={4}>SpaceX Launches</Heading>
            {launches.map(launch=>(
                <LaunchItem 
                key={uuidv4()} 
                {...launch}/>
            ))}
        </section>
    )

}

export { Launches };