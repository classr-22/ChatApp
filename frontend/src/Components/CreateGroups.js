import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import './myStyles.css'
import { useSelector } from 'react-redux';

function CreateGroups() {
  const lightTheme = useSelector((state)=>state.themeKey)
  return (
    <div style={{flex:"0.7", display:"flex",alignItems:"center",minWidth:"0px"}} className='CreateGroupsClass'>
      <div style={{
          backgroundColor:"white",display:"flex",justifyContent:"space-between",alignSelf:"center",
          borderRadius:"20px",padding:"20px 10px",margin:"10px",flex:"1"
          }} className={'CreateGroups-container'+((lightTheme)?"":" dark")}>
          <input type='text' placeholder='Enter Group Name' className={'search-box'+((lightTheme)?"":" dark")}></input>
          <IconButton>
              <DoneOutlineOutlinedIcon className={((lightTheme)?"":" dark")}></DoneOutlineOutlinedIcon>
          </IconButton>
      </div>
    </div>
  )
}

export default CreateGroups