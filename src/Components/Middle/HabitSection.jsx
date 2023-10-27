import React from 'react'
import Habits from './Habits'
import DatePicker from 'react-horizontal-datepicker'


function HabitSection() {
  return (
    <div>
      <div style={{ borderBottom: "1px solid #fff", paddingBottom: "10px" }}>
                    <DatePicker />
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

export default HabitSection
