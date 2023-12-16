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

function SideBar() {

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
    }
  ]);

  return (
    <div className='SideBar-Container'>
      <div className='sb-header'>
        <div>
          <IconButton>
            <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          </IconButton>
        </div>
        <div>
        <IconButton>
          <GroupAddOutlinedIcon style={{padding:"5px"}}></GroupAddOutlinedIcon>
        </IconButton>
        <IconButton>
          <PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon>
        </IconButton>
        <IconButton>
          <ControlPointOutlinedIcon></ControlPointOutlinedIcon>
        </IconButton>
        <IconButton>
          <DarkModeOutlinedIcon></DarkModeOutlinedIcon>
        </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
        <SearchIcon></SearchIcon>
        </IconButton>
        <input type='text' placeholder='search' className='search-box'></input>
      </div>
      <div className='sb-coversations'>
        {Conversations.map((conversation)=>{
          return <Conversationsitems props={conversation} key={conversation.name}></Conversationsitems>
        })}
      </div>
    </div>
  )
}

export default SideBar