import React from 'react'
import './myStyles.css'
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion"


function Welcom() {
  const lightTheme = useSelector((state)=>state.themeKey);
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
      style={{flex:"0.7",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",
        gap:"20px",fontFamily:"sans-serif,Geneva,Verdana,Segoe UI",color:"rgba(0,0,0,0.54)",
        borderBottom:"5px solid #63d7b0",borderRadius:"20px"
      }} 
      className={'Welcom-container'+ ((lightTheme)?"":" dark")}
    >
        <img src={require('./live-chat.png')} style={{height:"300px", width:"300px"}} className='welcome-image' />
        <p className='welcome-text'>view and text directly to people present in the chat Rooms</p>
    </motion.div>
    </AnimatePresence>
  )
}

export default Welcom