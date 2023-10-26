import React from 'react'
import Flexbetween from '../styles/Flexbetween'
import { Popover, Typography } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Help() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (

        <>
            <Flexbetween onClick={handleClick}>
                <ContactSupportIcon />
                <Typography>Help</Typography>

            </Flexbetween><Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                sx={
                    {
                        '.MuiPopover-paper': {
                            backgroundColor: '#36373d'
                        }
                    }}
            >
                <div style={{ border: '1px solid #7b7c7c' }}>

                    <Flexbetween><SupportAgentIcon /><Typography>Support</Typography></Flexbetween>
                    <Flexbetween><InstagramIcon /><Typography>Instagram</Typography></Flexbetween>
                    <Flexbetween><TwitterIcon /><Typography>Twitter</Typography></Flexbetween>

                </div>
            </Popover>
        </>
    )
}

export default Help
