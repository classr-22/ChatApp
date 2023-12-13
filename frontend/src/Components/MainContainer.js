import React from 'react'
import "./myStyles.css"
import WorkArea from './WorkArea'
import SideBar from './SideBar'

function MainContainer() {
  return (
    <div className='Maincontainer'>
        <WorkArea></WorkArea>
        <SideBar></SideBar>
    </div>
  )
}

export default MainContainer