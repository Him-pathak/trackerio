import React from 'react'
import Menu from '../Left/styles/menu'
import { Typography } from '@mui/material'

function AllNotes() {
  return (
    <>
    {/* map all notes */}
    <Menu style={{color:"whitesmoke"}}>
        <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae reprehenderit blanditiis facilis dicta corrupti illo nisi voluptatum recusandae sit ut asperiores impedit placeat non fugit magni consequuntur repudiandae exercitationem error, officiis accusamus. Quam aperiam recusandae ipsum eaque explicabo officia.
        </Typography>
    </Menu>
    <Menu>
        <Typography>
            This is my note 2 for habit 1
        </Typography>
    </Menu>
    <Menu>
        <Typography>
            This is my note 3 for habit 1
        </Typography>
    </Menu>
    </>
  )
}

export default AllNotes
