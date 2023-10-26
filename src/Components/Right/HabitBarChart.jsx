import * as React from 'react';
import { BarChart } from '@mui/x-charts';
import FlexCenter from '../../utils/FlexCenter';
import Flexbetween from '../Left/styles/Flexbetween';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Typography } from '@mui/material';

const uData = [40, 30, 20, 27, 18, 29, 90];
const xLabels = [
  'Mon',
  'Tue',
  'wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
];

export default function HabitBarChart() {
  return (
    <div style={{ backgroundColor: "#7b7c7c", borderRadius: '5px' }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "6.5px",
        color: 'black',
        gap: '5px',
        marginTop: '10px'
      }}>
        <LeaderboardIcon />
        <Typography>Weekly stats</Typography>
      </div>

      <BarChart
        width={400}
        height={200}
        series={[{ data: uData, type: 'bar' }]}
        xAxis={[{ scaleType: 'band', data: xLabels }]}
      >
      </BarChart>
    </div>

  );
}