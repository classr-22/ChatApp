import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import './myStyles.css'
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion"

function CreateGroups() {
  const lightTheme = useSelector((state)=>state.themeKey)
  return (
    <AnimatePresence>
    <motion.div 
      initial={{ opacity: 0 , scale:0}}
      animate={{ opacity: 1 , scale:1}}
      exit={{ opacity: 0, scale:0}}
      transition={{
          ease: "anticipate",
          duration: "0.3"
      }}
      style={{flex:"0.7", display:"flex",alignItems:"center",minWidth:"0px"}} className='CreateGroupsClass'
    >
      <div style={{
          backgroundColor:"white",display:"flex",justifyContent:"space-between",alignSelf:"center",
          borderRadius:"20px",padding:"20px 10px",margin:"10px",flex:"1"
          }} className={'CreateGroups-container'+((lightTheme)?"":" dark")}>
          <input type='text' placeholder='Enter Group Name' className={'search-box'+((lightTheme)?"":" dark")}></input>
          <IconButton>
              <DoneOutlineOutlinedIcon className={((lightTheme)?"":" dark")}></DoneOutlineOutlinedIcon>
          </IconButton>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default CreateGroups