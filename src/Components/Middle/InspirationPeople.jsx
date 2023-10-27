import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import FlexCenter from '../../utils/FlexCenter'
import elon from '../../Assets/Elon.jpeg'

function InspirationPeople({ }) {
    return (
        <Stack sx={{ padding: '15px', paddingTop: "28px", overflowY: "scroll", overflowX: 'hidden', maxHeight: "95vh" }}>

            <FlexCenter style={{ marginBottom: "10px" }}>
                <Typography variant='h4'>Elon Musk</Typography>
            </FlexCenter>

            <FlexCenter>
                <Avatar
                    alt="Elon Musk"
                    src={elon}
                    sx={{ width: 156, height: 156 }}
                />
            </FlexCenter>

            <Typography variant='h5' sx={{ marginBottom: "10px" }}>Elon musk's daily routine</Typography>
            <Typography variant='subtitle1' sx={{ marginBottom: "10px" }}>The CEO of Tesla and SpaceX seems to be one of the busiest people in the world.

                Well-known for his time blocking habits and his 20 hours per day work routine, Elon Musk's time management skills never cease to amaze.

                Apart from putting a tremendous amount of hours into work, and plotting MARS colonization with NASA, Musk still finds enough hours in a day to spend quality time with his family.

                Does he have more hours per day than an average person? Let's find out.</Typography>
            <Typography variant='h6' sx={{ marginBottom: "10px" }}>Elon Musk's schedule</Typography>
            <ul>
                <li><Typography variant='subtitle1' sx={{ marginBottom: "10px" }}>Elon Musk usually wakes up at 7 a.m. after getting no more than 6 hours of sleep.</Typography></li>
                <li><Typography variant='subtitle1' sx={{ marginBottom: "10px" }}>Immediately after waking up, he takes a shower and never skips coffee. Breakfast, however, is optional, depending on how busy he is.</Typography></li>
                <li><Typography variant='subtitle1' sx={{ marginBottom: "10px" }}>Elon Musk usually wakes up at 7 a.m. after getting no more than 6 hours of sleep.</Typography></li>
                <li><Typography variant='subtitle1' sx={{ marginBottom: "10px" }}>Immediately after waking up, he takes a shower and never skips coffee. Breakfast, however, is optional, depending on how busy he is.</Typography></li>
                <li><Typography variant='subtitle1' sx={{ marginBottom: "10px" }}>Elon Musk usually wakes up at 7 a.m. after getting no more than 6 hours of sleep.</Typography></li>
                <li><Typography variant='subtitle1' sx={{ marginBottom: "10px" }}>Immediately after waking up, he takes a shower and never skips coffee. Breakfast, however, is optional, depending on how busy he is.</Typography></li>
                <li><Typography variant='subtitle1' sx={{ marginBottom: "10px" }}>Elon Musk usually wakes up at 7 a.m. after getting no more than 6 hours of sleep.</Typography></li>
                <li><Typography variant='subtitle1' sx={{ marginBottom: "10px" }}>Immediately after waking up, he takes a shower and never skips coffee. Breakfast, however, is optional, depending on how busy he is.</Typography></li>
            </ul>


            <Typography variant='h6' sx={{ marginBottom: "10px" }}>Key elements of Elon Musk's routine</Typography>
            <Typography variant='subtitle1' sx={{ marginBottom: "10px" }}>By developing a habit of breaking his workday into 5-minute blocks, Musk manages to have better control of his time and maintain high productivity levels.
                Taking a shower immediately after waking up is beneficial for his productivity too since research has shown that this habit regulates our circadian rhythm and helps us engage in critical thinking.</Typography>

        </Stack>
    )
}

export default InspirationPeople
