import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './myStyles.css'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios";
import { refreshSidebarFun } from "../Features/refreshSidebar";

function Users_Groups() {
    const [refresh,setRefresh] = useState(true);
    const lightTheme = useSelector((state)=>state.themeKey);
    const [Conversations,setConversations] = useState([]); 
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    const nav = useNavigate();
    const dispatch = useDispatch();

    if(!userData){
        console.log("User is not authenticated");
        nav(-1);
    }

    useEffect(()=>{
        console.log("user refreshed");
        const config = {
            headers:{
                Authorization: `Bearer ${userData.data.token}`
            }
        }

        axios.get("http://localhost:5000/user/fetchUsers/",config).then((data)=>{
            console.log("user Data from API",data)
            setConversations(data.data);
        }).catch(error => {
            console.error('Error:', error.message,"vghsvgcvsdhcvhsdvhvsdh");
          });
    },[refresh]);



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
            <p style={{fontFamily:"sans-serif Tahoma Geneva Verdana 'Segon UI'" , fontWeight:"bold" , 
            color:"rgba(0,0,0,0.54)"}}
            className={((lightTheme)?"":" dark")}
            >
                Online Users
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
            {Conversations.map((conversation,index)=>{
                return( 
                <motion.div 
                    whileHover={{scale:"1.01"}} whileTap={{scale:"0.98"}} 
                    className={'conversation-container CreateGroups-container user-container'+((lightTheme)?"":" dark")} style={{
                    margin:"10px 10px",padding:"15px 10px",
                    display:"flex",justifyContent:"start",alignItems:"center",gap:"10px",borderRadius:"20px",
                    }}
                    key={index}
                    onClick={() => {
                      console.log("Creating chat with ", conversation.name);
                      const config = {
                        headers: {
                          Authorization: `Bearer ${userData.data.token}`,
                        },
                      };
                      axios.post(
                        "http://localhost:5000/chat/",
                        {
                          userId: conversation._id,
                        },
                        config
                      );
                      dispatch(refreshSidebarFun());
                    }}
                >
                    <div className='con-icon'>{conversation.name[0]}</div>
                    <div className={'con-title'+((lightTheme)?"":" text-dark")}>{conversation.name}</div>
                </motion.div>
            )})}
        </div>

    </motion.div>
    </AnimatePresence>
  )
}

export default Users_Groups