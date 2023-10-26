import React from 'react'
import DatePicker from 'react-horizontal-datepicker'
import Habits from '../Components/Middle/Habits'

function Middle() {
    return (
        <div style={{ borderInline: "1px solid #fff", height: "100vh", padding: "15px" }}>
            <div style={{ borderBottom: "1px solid #fff", paddingBottom: "10px" }}>
                {/* <Calendar/> */}

                <div>
                    <DatePicker />
                </div>
            </div>


            <Habits />
            <Habits />
            <Habits />
            <Habits />
            <Habits />
            <Habits />

        </div>
    )
}

export default Middle
