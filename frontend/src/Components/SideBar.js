import React, { useState } from 'react'
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

function SideBar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state)=>state.themeKey);
  const [Conversations,setConversations] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message#1",
      timeStamp: "today"
    },
    {
      name: "Test#2",
      lastMessage: "Last Message#2",
      timeStamp: "today"
    },
    {
      name: "Test#3",
      lastMessage: "Last Message#3",
      timeStamp: "today"
    },
    {
      name: "Test#2",
      lastMessage: "Last Message#2",
      timeStamp: "today"
    },
    {
      name: "Test#2",
      lastMessage: "Last Message#2",
      timeStamp: "today"
    },
    {
      name: "Test#2",
      lastMessage: "Last Message#2",
      timeStamp: "today"
    },
    {
      name: "Test#2",
      lastMessage: "Last Message#2",
      timeStamp: "today"
    },
    {
      name: "Test#2",
      lastMessage: "Last Message#2",
      timeStamp: "today"
    },
    {
      name: "Test#2",
      lastMessage: "Last Message#2",
      timeStamp: "today"
    }
  ]);

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
        {Conversations.map((conversation)=>{
          return <Conversationsitems props={conversation} key={conversation.name} ></Conversationsitems>
        })}
      </div>
    </div>
  )
}

export default SideBar