import React from 'react'
import Menu from '../Left/styles/menu'
import { Typography } from '@mui/material'

function AllNotes() {
  return (
    <ul>
        <li><Menu><Typography>It lubricates the joints</Typography></Menu></li>
        <li><Menu><Typography>It forms saliva and mucus</Typography></Menu></li>
        <li><Menu><Typography>It cushions the brain, spinal cord, and other sensitive tissues</Typography></Menu></li>
    </ul>   
  )
}

export default AllNotes
