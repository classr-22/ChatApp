import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import './myStyles.css'

function CreateGroups() {
  return (
    <div style={{flex:"0.7", display:"flex",alignItems:"center"}}>
      <div style={{
          backgroundColor:"white",display:"flex",justifyContent:"space-between",alignSelf:"center",
          borderRadius:"20px",padding:"20px 10px",margin:"10px",flex:"1"
          }} className='CreateGroups-container'>
          <input type='text' placeholder='Enter Group Name' className='search-box'></input>
          <IconButton>
              <DoneOutlineOutlinedIcon></DoneOutlineOutlinedIcon>
          </IconButton>
      </div>
    </div>
  )
}

export default CreateGroups