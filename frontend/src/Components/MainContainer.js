import React, { useState } from 'react'
import "./myStyles.css"
import SideBar from './SideBar'
import ChatArea from './ChatArea'
import Welcom from './Welcom'
import CreateGroups from './CreateGroups'

function MainContainer() {

  const [chat,setChat] = useState({name: "Test#1",
  timeStamp: "online"});
  return (
    <div className='Maincontainer'>
        <SideBar></SideBar>
        <CreateGroups></CreateGroups>
        {/* <Welcom></Welcom> */}
        {/* <ChatArea props={chat}></ChatArea> */}
    </div>
  )
}

export default MainContainer