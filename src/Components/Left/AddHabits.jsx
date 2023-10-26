import React from 'react'
import Flexbetween from './styles/Flexbetween'
import { Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function AddHabits() {
  return (
    <Flexbetween>
        <AddIcon/>
        <Typography>Add Habits</Typography>
    </Flexbetween>
  )
}

export default AddHabits
