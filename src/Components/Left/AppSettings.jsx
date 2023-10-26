import React from 'react'
import Flexbetween from './styles/Flexbetween'
import { Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';

function AppSettings() {
  return (
    <Flexbetween>
        <SettingsIcon/>
        <Typography>
            App Settings
        </Typography>
    </Flexbetween>
  )
}

export default AppSettings
