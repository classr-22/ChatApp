import { Button } from '@mui/material'
import React from 'react'
import './myStyles.css'
import TextField from '@mui/material/TextField';
import { motion, AnimatePresence } from "framer-motion"

function Login() {
   
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
        style={{
        backgroundColor:"#f4f5f8",display:"flex",justifyContent:"center",alignItems:"center",height:"90vh",
        width:"90vw",borderRadius:"20px"   
        }} 
        className='Login-container'
    >
        
        <div style={{display:"flex",flex:"0.3",justifyContent:"center",alignItems:"center"}}>
            <img src="live-chat.png" style={{height:"300px",width:"300px"}}/>
        </div>

        <div style={{
            backgroundColor:"white",display:"flex",flex:"0.7",justifyContent:"center",alignItems:"center",
            height:"85vh",width:"85vw",margin:"20px",borderRadius:"20px",flexDirection:"column",gap:"20px",
            fontFamily:"sans-serif,Geneva,Verdana,Segoe UI",color:"#63d7b0",fontWeight:"bolder"
        }} className='Login-container'>
            <p style={{marginBottom:"20px",fontSize:"40px",fontWeight:"bolder"}}>Login to your Account</p>
            <div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    defaultValue=""
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                
            </div>
            <Button variant="outlined" size='large'>Login</Button>
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Login