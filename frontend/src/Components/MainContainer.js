import React, { useState } from 'react'
import "./myStyles.css"
import SideBar from './SideBar'
import ChatArea from './ChatArea'
import Welcom from './Welcom'
import CreateGroups from './CreateGroups'
import Users_Groups from './Users_Groups'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { createContext} from "react";

export const myContext = createContext();
function MainContainer() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);
  return (
    <div className='Maincontainer'>
       <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <SideBar></SideBar>
        <Outlet/>
        </myContext.Provider>
        {/* <Users_Groups></Users_Groups> */}
        {/* <CreateGroups></CreateGroups> */}
        {/* <Welcom></Welcom> */}
        {/* <ChatArea props={chat}></ChatArea> */}
    </div>
  )
}

export default MainContainer