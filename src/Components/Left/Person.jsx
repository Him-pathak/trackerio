import React from 'react'
import Flexbetween from './styles/Flexbetween'
import { Avatar, Stack, Typography } from '@mui/material'
import Elon from '../../Assets/Elon.jpeg'

function Person() {
  return (
    <Flexbetween>
        <Avatar alt="Elon" src={Elon} />
        <Stack>
        <Typography variant="subtitle1">Elon Musk</Typography>
        <Typography variant="body2">Enterprenuer</Typography>
        </Stack>
    </Flexbetween>
  )
}

export default Person
