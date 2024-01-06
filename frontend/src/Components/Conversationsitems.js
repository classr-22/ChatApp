import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"

function Conversationsitems({props}) {
  const navigate = useNavigate();
  const lightTheme = useSelector((state)=>state.themeKey)
  return (
   <motion.div 
    whileHover={{scale:"1.02"}} 
    whileTap={{scale:"0.98"}} 
    className='conversation-container CreateGroups-container' 
    onClick={()=>{
    navigate('chat')
  }}>
        <div className='con-icon'>{props.name[0]}</div>
        <div className={'con-title'+ ((lightTheme)?"":" text-dark")}>{props.name}</div>
        <div className='con-lastMessage'>{props.lastMessage}</div>
        <div className={'con-timeStamp'+ ((lightTheme)?"":" text-dark")}>{props.timeStamp}</div>
    </motion.div>
  )
}

export default Conversationsitems