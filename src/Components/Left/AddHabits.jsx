import React from 'react'
import Flexbetween from './styles/Flexbetween'
import { Box, Modal, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#1f2026',
    // border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddHabits() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Flexbetween onClick={handleOpen}>
                <AddIcon />
                <Typography>Add Habits</Typography>
            </Flexbetween>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography>New Habit</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                    />
                </Box>
            </Modal>
        </div>
    )
}

export default AddHabits
