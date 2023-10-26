import React from 'react'
import { Typography } from '@mui/material'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import Flexbetween from './styles/Flexbetween';

function AllHabits() {
  return (
    <Flexbetween>
        <CollectionsBookmarkIcon/>
        <Typography>All Habits</Typography>
    </Flexbetween>
  )
}

export default AllHabits
