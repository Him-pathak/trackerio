import React from 'react'
import Profile from '../Components/Left/Profile'
import AllHabits from '../Components/Left/AllHabits'
import AddHabits from '../Components/Left/AddHabits'
import { Typography } from '@mui/material'
import Menu from '../Components/Left/styles/menu'
import Person from '../Components/Left/Person'
import AppSettings from '../Components/Left/AppSettings'
import Help from '../Components/Left/Help/Help'

function Left() {
    return (
        <div style={{ padding: "15px" }}>
            <Profile />
            <AllHabits />
            <AddHabits />
            <Menu><Typography>Inspirations</Typography></Menu>
            <div style={{ maxHeight: "40vh", overflow: "scroll", marginBottom:"15px" }}>
                {/* map all the persons */}
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
                <Person />
            </div>

            <Menu><Typography>Preferences</Typography></Menu>

            <AppSettings/>
            <Help/>

        </div>
    )
}

export default Left
