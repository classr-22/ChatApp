import React, { useContext, useEffect, useState } from 'react'
import "./myStyles.css"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Conversationsitems from './Conversationsitems';
import { useNavigate } from 'react-router-dom';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { toogleTheme } from '../Features/themeSlice';
import axios from "axios";
import { refreshSidebarFun } from "../Features/refreshSidebar";
import { myContext } from "./MainContainer";
import { motion, AnimatePresence } from "framer-motion"

function SideBar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state)=>state.themeKey);
  const [Conversations,setConversations] = useState([]);

  const { refresh, setRefresh } = useContext(myContext);
  console.log("Context API : refresh : ", refresh);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  const user = userData.data;
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.get("http://localhost:5000/chat/", config).then((response) => {
      console.log("Data refresh in sidebar ", response.data);
      setConversations(response.data);
    });
  }, [refresh]);


  return (
    <div className='SideBar-Container'>
      <div className={'sb-header'+ ((lightTheme)?"":" dark")}>
        <div className='sb-header-1'>
          <IconButton>
            <AccountCircleOutlinedIcon className={'icon'+ ((lightTheme)?"":" dark")}></AccountCircleOutlinedIcon>
          </IconButton>
        </div>
        <div className='sb-header-2'>
        <IconButton onClick={()=>{
            navigate('users');
        }}>
          <PersonAddAltOutlinedIcon className={'icon'+ ((lightTheme)?"":" dark")}></PersonAddAltOutlinedIcon>
        </IconButton>
        <IconButton onClick={()=>{
            navigate('groups');
        }}>
          <GroupAddOutlinedIcon style={{padding:"5px"}} className={'icon'+ ((lightTheme)?"":" dark")}></GroupAddOutlinedIcon>
        </IconButton>
        <IconButton onClick={()=>{
            navigate('create-groups');
        }}>
          <ControlPointOutlinedIcon className={'icon'+ ((lightTheme)?"":" dark")}></ControlPointOutlinedIcon>
        </IconButton>
        <IconButton onClick={()=>{
          dispatch(toogleTheme())
        }}>
          {lightTheme && <DarkModeOutlinedIcon className={'icon'+ ((lightTheme)?"":" dark")}></DarkModeOutlinedIcon>}
          {!lightTheme && <LightModeOutlinedIcon className={'icon'+ ((lightTheme)?"":" dark")}></LightModeOutlinedIcon>}
        </IconButton>
        </div>
      </div>
      <div className={'sb-search'+ ((lightTheme)?"":" dark")}>
        <IconButton>
        <SearchIcon className={((lightTheme)?"":" dark")}></SearchIcon>
        </IconButton>
        <input type='text' placeholder='search' className={'search-box'+ ((lightTheme)?"":" dark")}></input>
      </div>
      <div className={'sb-coversations'+ ((lightTheme)?"":" dark")}>
        {Conversations.map((conversation,index)=>{
          if (conversation.users.length === 1) {
            return <div key={index}></div>;
          }

          if (conversation.latestMessage === undefined) {
            // console.log("No Latest Message with ", conversation.users[1]);
            return (
              <div
                key={index}
                onClick={() => {
                  console.log("Refresh fired from sidebar");
                  // dispatch(refreshSidebarFun());
                  setRefresh(!refresh);
                }}
              >
                <motion.div 
                whileHover={{scale:"1.02"}} 
                whileTap={{scale:"0.98"}} 
                className='conversation-container CreateGroups-container' 
                key={index}
                onClick={()=>{
                  navigate(
                    "chat/" +
                      conversation._id +
                      "&" +
                      conversation.users[1].name
                  );
              }}>
                  <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                    {conversation.users[1].name[0]}
                  </p>
                  <p className={'con-title'+ ((lightTheme)?"":" text-dark")} >
                    {conversation.users[1].name}
                  </p>

                  <p className="con-lastMessage">
                    No previous Messages, click here to start a new chat
                  </p>

                
              </motion.div>
              </div>
            );
          } else {
            return (
              <motion.div 
                whileHover={{scale:"1.02"}} 
                whileTap={{scale:"0.98"}} 
                className='conversation-container CreateGroups-container' 
                key={index}
                onClick={()=>{
                  navigate(
                          "chat/" +
                            conversation._id +
                            "&" +
                            conversation.users[1].name
                        );
              }}>
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                  {conversation.users[1].name[0]}
                </p>
                <p className={'con-title'+ ((lightTheme)?"":" text-dark")}>
                  {conversation.users[1].name}
                </p>

                <p className="con-lastMessage">
                  {conversation.latestMessage.content}
                </p>
              </motion.div>);
          }
        })}
      </div>
    </div>
  )
}

export default SideBar