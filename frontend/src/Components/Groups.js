import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './myStyles.css'

function Groups() {

    const [Conversations,setConversations] = useState([
        {
          name: "Test User#1",
          lastMessage: "Last Message#1",
          timeStamp: "today"
        },
        {
            name: "Test User#1",
            lastMessage: "Last Message#1",
            timeStamp: "today"
        },
        {
            name: "Test User#1",
            lastMessage: "Last Message#1",
            timeStamp: "today"
        },
        {
            name: "Test User#1",
            lastMessage: "Last Message#1",
            timeStamp: "today"
        },
        {
            name: "Test User#1",
            lastMessage: "Last Message#1",
            timeStamp: "today"
        },
        {
            name: "Test User#1",
            lastMessage: "Last Message#1",
            timeStamp: "today"
        },
        {
            name: "Test User#1",
            lastMessage: "Last Message#1",
            timeStamp: "today"
        },
        {
            name: "Test User#1",
            lastMessage: "Last Message#1",
            timeStamp: "today"
        },
        {
            name: "Test User#1",
            lastMessage: "Last Message#1",
            timeStamp: "today"
        }
    ]); 

  return (
    <div style={{display:"flex",flex:"0.7",flexDirection:"column"}}>
        
        <div style={{
            display:"flex",justifyContent:"start",alignItems:"center",gap:"10px",
            backgroundColor:"white",borderRadius:"20px",margin:"10px",padding:"14px 10px"    
        }} className='CreateGroups-container'>
            <img style={{height:"40px",width:"40px"}} src={require('./live-chat.png')}></img>
            <p style={{fontFamily:"sans-serif Tahoma Geneva Verdana 'Segon UI'" , fontWeight:"bold" , color:"rgba(0,0,0,0.54)"}}>Available Groups</p>
        </div>
        
        <div className='sb-search'>
            <IconButton>
            <SearchIcon></SearchIcon>
            </IconButton>
            <input type='text' placeholder='search' className='search-box'></input>
        </div>
        
        <div style={{flex:"1",overflowY:"scroll"}} 
        className='Users_Groups_container'>
            {Conversations.map((conversation)=>{
                return( 
                <div className='conversation-container CreateGroups-container user-container' style={{
                    margin:"10px 10px",padding:"15px 10px",
                    display:"flex",justifyContent:"start",alignItems:"center",gap:"10px",borderRadius:"20px",
                }}>
                    <div className='con-icon'>{conversation.name[0]}</div>
                    <div className='con-title'>{conversation.name}</div>
                </div>
            )})}
        </div>

    </div>
     
  )
}

export default Groups