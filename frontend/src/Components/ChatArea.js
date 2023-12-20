import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MessageOther from './MessageOther';
import MessageSelf from './MessageSelf';


function ChatArea() {

    const [props,setChat] = useState(
        {
            name: "Test#1",
            timeStamp: "online"
        }
    );


  return (
    <div className='Chat-Container'>
        <div className='Chat-header'>
            <p className='con-icon'>{props.name[0]}</p>
            <div className='header-text'>
                <p className='con-title'>{props.name}</p>
                <p className='con-timeStamp'>{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
            </IconButton>
        </div>
        <div className='Chat-messages'>
            <MessageSelf></MessageSelf>
            <MessageOther></MessageOther>
            <MessageSelf></MessageSelf>
            <MessageSelf></MessageSelf>
            <MessageSelf></MessageSelf>
            <MessageOther></MessageOther>
            <MessageOther></MessageOther>
            <MessageOther></MessageOther>
        </div>
        <div className='Chat-textarea'>
            <input type='text' placeholder='Type a message' className='search-box'></input>
            <IconButton>
                <SendOutlinedIcon></SendOutlinedIcon>
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea