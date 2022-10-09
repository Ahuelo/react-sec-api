import React from 'react';
import * as API from '../services/launches.js'
import { useEffect, useState } from 'react';
import { Box, Flex, Text,Spacer, Tag } from '@chakra-ui/react';

const Launches = () =>{
    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
        API.getAllLaunches().then(setLaunches);
    }, []);
    return (
        <section>
            {launches.map(launch=>(
            <Box 
            key={launch.flight_number} 
            bg='gray.100' 
            p={4} 
            m={4} 
            borderRadius='lg'>
                <Flex>
                    <Text fontSize='2xl'>
                        Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                    </Text>
                    <Spacer/>
                    <Tag p={4} colorScheme={launch.launch_success ? 'green' : 'red'} >
                        {launch.launch_success ? 'Success' : 'Failure'}
                    </Tag>
                </Flex>
                <p>
                {launch.mission_name} ({launch.launch_year})
                </p>
            </Box>
            ))}
        </section>
    )

}

export { Launches };