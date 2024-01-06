import { IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './myStyles.css'
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { myContext } from "./MainContainer"

function Groups() {
    const { refresh, setRefresh } = useContext(myContext);
    const lightTheme = useSelector((state)=>state.themeKey);
    const dispatch = useDispatch();
    const [groups, SetGroups] = useState([]);

    const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    console.log("Users refreshed : ", user.token);
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios
      .get("http://localhost:5000/chat/fetchGroups", config)
      .then((response) => {
        console.log("Group Data from API ", response.data);
        SetGroups(response.data);
      });
  }, [refresh]);

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
        style={{display:"flex",flex:"0.7",flexDirection:"column"}}
    >
        
        <div style={{
            display:"flex",justifyContent:"start",alignItems:"center",gap:"10px",
            backgroundColor:"white",borderRadius:"20px",margin:"10px",padding:"14px 10px"    
        }} className={'CreateGroups-container'+((lightTheme)?"":" dark")}>
            <img style={{height:"40px",width:"40px"}} src={require('./live-chat.png')}></img>
            <p 
            style={{fontFamily:"sans-serif Tahoma Geneva Verdana 'Segon UI'" , fontWeight:"bold" , 
            color:"rgba(0,0,0,0.54)"}}
            className={((lightTheme)?"":" dark")}>
                Available Groups
            </p>
        </div>
        
        <div className={'sb-search'+((lightTheme)?"":" dark")}>
            <IconButton>
            <SearchIcon className={((lightTheme)?"":" dark")}></SearchIcon>
            </IconButton>
            <input type='text' placeholder='search' className={'search-box'+((lightTheme)?"":" dark")}></input>
        </div>
        
        <div style={{flex:"1",overflowY:"scroll"}} 
        className='Users_Groups_container'>
            {groups.map((group)=>{
                return( 
                <motion.div whileHover={{scale:"1.01"}} whileTap={{scale:"0.98"}}  
                    className={'conversation-container CreateGroups-container user-container'+((lightTheme)?"":" dark")} style={{
                    margin:"10px 10px",padding:"15px 10px",
                    display:"flex",justifyContent:"start",alignItems:"center",gap:"10px",borderRadius:"20px",
                }}>
                    <div className='con-icon'>{group.chatName[0]}</div>
                    <div className={'con-title'+((lightTheme)?"":" text-dark")}>{group.chatName}</div>
                </motion.div>
            )})}
        </div>

    </motion.div>
    </AnimatePresence>
  )
}

export default Groups