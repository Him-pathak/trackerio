import { Stack, Typography } from '@mui/material'
import React from 'react'
import Heading from '../Components/Right/Heading'
import HabitBarChart from '../Components/Right/HabitBarChart'
import HabitDonutChart from '../Components/Right/HabitDonutChart'
import Flexbetween from '../Components/Left/styles/Flexbetween'
import AllNotes from '../Components/Right/AllNotes'
import NotesIcon from '@mui/icons-material/Notes';

function Right() {
  return (
    <Stack sx={{padding:'15px', paddingTop:"28px", overflowY:"scroll",overflowX:'hidden', maxHeight:"97vh"}}>
        <Heading/>
        <HabitBarChart/>
        <HabitDonutChart/>
        <Flexbetween style={{color:"white"}}>
            <NotesIcon/>
            <Typography>All Notes</Typography>
        </Flexbetween>
        <AllNotes/>
    </Stack>
  )
}

export default Right
