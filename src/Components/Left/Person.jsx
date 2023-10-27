import React, { useState } from 'react'
import Flexbetween from './styles/Flexbetween'
import { Avatar, Stack, Typography } from '@mui/material'
import data from '../../Assets/inspiration.json'
import { createContext } from 'react'

const PersonContext = createContext(null);

function Person() {
    const [currentName, setCurrentName] = useState(null);

    return (
        <PersonContext.Provider value={currentName}>
            {
                data.persons.map(person => {
                    return <Flexbetween onClick={()=>setCurrentName(person.name)}>
                        <Avatar alt={person.name} src={`${person.img}`} />
                        <Stack>
                            <Typography variant="subtitle1">{person.name}</Typography>
                            <Typography variant="body2">{person.profession}</Typography>
                        </Stack>
                    </Flexbetween>
                })
            }
        </PersonContext.Provider>


    )
}

export default Person
