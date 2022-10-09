import React from 'react';
import logo from '../assets/logo.png';
import { Heading, Image } from '@chakra-ui/react'

const Title = () => {
    return(
        <>
        <Image m={4} src={ logo } alt='Logo-SpaceX' />
        <Heading as='h1' size='xl' m={4}>SpaceX Launches</Heading>
        </>
    )
};

export { Title };