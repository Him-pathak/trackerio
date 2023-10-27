import Checkbox from '@mui/material/Checkbox';
import { IconButton, Typography } from '@mui/material';
import Popover from '@mui/material/Popover';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FlexCenter from '../../utils/FlexCenter';
import Flexbetween from '../Left/styles/Flexbetween';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const label = { inputProps: { 'aria-label': 'controlled' } };

function Habits({description,count}) {
    const [isHovered, setIsHovered] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        padding: '6.5px',
        margin: '15px 0',
        color: isHovered ? '#fff' : '#7b7c7c',
        backgroundColor: isHovered ? '#105b72c2' : 'transparent',
        border: '1px solid #7b7c7c',
        borderRadius: '3px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    return (
        <div
            style={containerStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <FlexCenter>

                <Checkbox {...label}
                    checked={checked}
                    onChange={handleChange}
                    color="success"
                />
                <Typography>{description}</Typography>
            </FlexCenter>

            <IconButton sx={{ color: "#fff" }} onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={
                    {'.MuiPopover-paper':{
                    backgroundColor:'#36373d'
                }}}
            >
                <div style={{ border: '1px solid #7b7c7c' }}>
                <Flexbetween>
                    <EditIcon/>
                    <Typography>Edit</Typography>
                    </Flexbetween>
                <Flexbetween><DeleteIcon/><Typography>Delete</Typography></Flexbetween>
                <Flexbetween><NoteAddIcon/><Typography>Add Note</Typography></Flexbetween>
                </div>
            </Popover>

        </div>
    );
}

export default Habits;
