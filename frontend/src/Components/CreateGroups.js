import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import './myStyles.css'

function CreateGroups() {
  return (
    <div style={{
        backgroundColor:"white", flex:"0.7",display:"flex",justifyContent:"space-between",alignSelf:"center",
        borderRadius:"20px",padding:"20px 10px",margin:"10px"
        }} className='CreateGroups-container'>
        <input type='text' placeholder='MY Sample Group' className='search-box'></input>
        <IconButton>
            <DoneOutlineOutlinedIcon></DoneOutlineOutlinedIcon>
        </IconButton>
    </div>
  )
}

export default CreateGroups