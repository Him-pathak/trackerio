import React from 'react'
import Habits from './Habits'
import DatePicker from 'react-horizontal-datepicker'

const data=[
    {
        "id":1,
        "description":"Drink 4 litres of water",
        "count": 4,
        "notes":[
            'note 1', 'note 2'
        ]
    },
    {
        "id":1,
        "description":"Go for a morning walk",
        "count": 2,
        "notes":[
            'note 1', 'note 2'
        ]
    },
    {
        "id":1,
        "description":"Take shower with cold water",
        "count": 1,
        "notes":[
            'note 1', 'note 2'
        ]
    },
    {
        "id":1,
        "description":"wake up in the morning at 4 am",
        "count": 0,
        "notes":[
            'note 1', 'note 2'
        ]
    },
    {
        "id":1,
        "description":"Do not eat junk food",
        "count": 4,
        "notes":[
            'note 1', 'note 2'
        ]
    },
]

function HabitSection() {
  return (
    <div>
      <div style={{ borderBottom: "1px solid #fff", paddingBottom: "10px" }}>
                    <DatePicker />
            </div>
            {data.map((habit)=>{
            return <Habits description={habit.description} count={habit.count}/>
        })}
    </div>
  )
}

export default HabitSection
