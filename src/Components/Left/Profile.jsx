import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import FlexCenter from '../../utils/FlexCenter'

function Profile() {
  return (
    <FlexCenter style={{border: "1px solid #E0E9EC",
    borderRadius: "3px",
    margin:"12px 0", gap:'10px',
    justifyContent:"flex-start"}}>

        <Avatar sx={{ bgcolor: deepPurple[500] ,width: 30, height: 30 }}>H</Avatar>
        <Typography>Himanshu</Typography>
    </FlexCenter>
    
  )
}

export default Profile
