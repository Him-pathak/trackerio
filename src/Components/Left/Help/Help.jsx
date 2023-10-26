import React from 'react'
import Flexbetween from '../styles/Flexbetween'
import { Typography } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

function Help() {
    return (
        <Flexbetween>
            <ContactSupportIcon />
            <Typography>Help</Typography>
        </Flexbetween>
    )
}

export default Help
