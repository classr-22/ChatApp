import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MessageOther from './MessageOther';
import MessageSelf from './MessageSelf';
import { useSelector } from 'react-redux';


function ChatArea() {
    const lightTheme = useSelector((state)=>state.themeKey);
    const [props,setChat] = useState(
        {
            name: "Test#1",
            timeStamp: "online"
        }
    );


  return (
    <div className='Chat-Container'>
        <div  className={'Chat-header'+ ((lightTheme)?"":" dark")}>
            <p className='con-icon'>{props.name[0]}</p>
            <div className='header-text'>
                <p  className={'con-title'+ ((lightTheme)?"":" text-dark")}>{props.name}</p>
                <p  className={'con-timeStamp'+ ((lightTheme)?"":" text-dark")}>{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteOutlineOutlinedIcon className={((lightTheme)?"":"dark")}></DeleteOutlineOutlinedIcon>
            </IconButton>
        </div>
        <div className={'Chat-messages'+ ((lightTheme)?"":" dark")}>
            <MessageSelf></MessageSelf>
            <MessageOther></MessageOther>
            <MessageSelf></MessageSelf>
            <MessageSelf></MessageSelf>
            <MessageSelf></MessageSelf>
            <MessageOther></MessageOther>
            <MessageOther></MessageOther>
            <MessageOther></MessageOther>
        </div>
        <div className={'Chat-textarea'+ ((lightTheme)?"":" dark")}>
            <input type='text' placeholder='Type a message' className={'search-box'+ ((lightTheme)?"":" dark")}></input>
            <IconButton>
                <SendOutlinedIcon className={((lightTheme)?"":" dark")}></SendOutlinedIcon>
            </IconButton>
        </div>
    </div>
  )
}

export default ChatArea