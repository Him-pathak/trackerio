import React from 'react'
import { PieChart } from '@mui/x-charts'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Typography } from '@mui/material';

function HabitDonutChart() {
    return (
        <div style={{ backgroundColor: "#7b7c7c", borderRadius: '5px', margin: '20px 0', paddingBottom: '10px' }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "6.5px",
                color: 'black',
                gap: '5px',
                margin: '10px'
            }}>
                <TaskAltIcon />
                <Typography>Today's completion</Typography>
            </div>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10 },
                            { id: 1, value: 15 },
                        ],
                        innerRadius: 54,
                        outerRadius: 100,
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    )
}

export default HabitDonutChart
