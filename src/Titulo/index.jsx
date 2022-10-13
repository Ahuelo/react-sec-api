import React from 'react';
import logo from '../assets/logo.png';
import { Image, Center } from '@chakra-ui/react';
import { Routes, Route } from "react-router-dom";
import { Launches } from '../Launches';
import { LaunchDetail } from '../LaunchDetail';
import { RocketDetail } from '../RocketDetail';


const Titulo = () => {
    return(
        <>
        <Center className='contenedor-logo'>
            <Image m={4} src={ logo } alt='Logo-SpaceX' h={'150px'} />
        </Center>
        {/* Este es el paso 2, establecer las rutas y el path */}
        <Routes>
            <Route path="/" element={<Launches />} />
            <Route path="launch/:launchId" element={<LaunchDetail />} />
            <Route path="rockets/:rocketId" element={<RocketDetail />}></Route>
        </Routes>
        
        </>
    )
};

export { Titulo };