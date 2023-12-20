import React, { useState } from 'react'
import "./myStyles.css"
import SideBar from './SideBar'
import ChatArea from './ChatArea'
import Welcom from './Welcom'
import CreateGroups from './CreateGroups'
import Users_Groups from './Users_Groups'
import { Outlet } from 'react-router-dom'

function MainContainer() {
  return (
    <div className='Maincontainer'>
        <SideBar></SideBar>
        <Outlet/>
        {/* <Users_Groups></Users_Groups> */}
        {/* <CreateGroups></CreateGroups> */}
        {/* <Welcom></Welcom> */}
        {/* <ChatArea props={chat}></ChatArea> */}
    </div>
  )
}

export default MainContainer