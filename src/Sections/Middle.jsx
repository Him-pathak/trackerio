import React from 'react'
import Habits from '../Components/Middle/Habits'
import HabitSection from '../Components/Middle/HabitSection'
import InspirationPeople from '../Components/Middle/InspirationPeople'

function Middle() {
    return (
        <div style={{ borderInline: "1px solid #7b7c7c", height: "100vh", padding: "15px" }}>
            <HabitSection/>            
            {/* <InspirationPeople/> */}
        </div>
    )
}

export default Middle
