import { React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../services/launches';

const RocketDetail = () =>{
    const [rocket, setRocket]=useState({});

    const { rocketId }=useParams();

    useEffect(()=>{
        API.getRocketById(rocketId)
        .then(setRocket)
        .catch(console.error);
    },[rocketId]);

    return(
        <>
        <h1>{`Hola ${rocket.rocket_id}`}</h1>
        </>
        
        
    )
}

export { RocketDetail };