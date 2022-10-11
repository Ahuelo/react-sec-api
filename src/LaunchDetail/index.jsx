import React from 'react';
import { useParams } from 'react-router-dom';

const LaunchDetail = () => {
    const { launchId } = useParams();
    return(
        <h1>{`Hola ${launchId}`}</h1>
    )
};

export { LaunchDetail };