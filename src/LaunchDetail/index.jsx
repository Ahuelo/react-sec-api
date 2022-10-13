import { useState, useEffect } from 'react';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import * as API from '../services/launches';
import { Box, Flex,Text,Spacer,Tag, Badge, Button,Image, Center } from '@chakra-ui/react';

const LaunchDetail = () => {
    const [launch, setLaunch] = useState({});
    /* Para recibir la información enviada desde react-router-dom, es necesario usar el useparams */
    const { launchId } = useParams();

    useEffect(()=>{
        API.getLaunchByFlightNumber(launchId)
            .then(setLaunch)
            .catch(console.error);
    },[launchId]);
    return(
        <Box bg='gray.100' p={4} m={4} borderRadius='lg'>
            {!launch ? <div>Loading...</div> : (
                <>
                    <Flex>
                        <Text fontSize='2xl'>
                            Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                        </Text>
                        <Spacer/>
                        <Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'} >
                            {launch.launch_success ? 'Success' : 'Failure'}
                        </Tag>
                    </Flex>
                    <Flex>
                    <Box fontSize={'l'}>
                        Rocket: <Badge variant={'subtle'} colorScheme={'purple'}>
                                    {launch.rocket?.rocket_name} 
                                </Badge>
                    Rocket Type:<Badge variant={'subtle'} colorScheme={'purple'}>
                                    {launch.rocket?.rocket_type}
                                </Badge>
                    </Box>

                    <Spacer/>
                    <Button colorScheme={'purple'} size={'sm'}> <Link to={`/rockets/${launch.rocket?.rocket_id}`}>Rocket Detail</Link></Button>                    
                    </Flex>
                    <Center h='150px' color='white'>
                    <Image src={launch.links?.mission_patch} boxSize={'150px'} />
                    </Center>
                    
                </>
            )}
        </Box>
    )
};

export { LaunchDetail };