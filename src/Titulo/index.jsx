import React from 'react';
import logo from '../assets/logo.png';
import { Image } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import { Launches } from '../Launches';
import { LaunchDetail } from '../LaunchDetail';

const Titulo = () => {
    return(
        <>
        <Image m={4} src={ logo } alt='Logo-SpaceX' />
        <Routes>
            <Route path="/" element={<Launches />} />
            <Route path="launch/:launchId" element={<LaunchDetail />} />
        </Routes>
        
        </>
    )
};

export { Titulo };