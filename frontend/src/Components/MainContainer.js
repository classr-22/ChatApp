import React, { useState } from 'react'
import "./myStyles.css"
import SideBar from './SideBar'
import ChatArea from './ChatArea'

function MainContainer() {

  const [chat,setChat] = useState({name: "Test#1",
  timeStamp: "online"});
  return (
    <div className='Maincontainer'>
        <SideBar></SideBar>
        <ChatArea props={chat}></ChatArea>
    </div>
  )
}

export default MainContainer