import React from 'react'

function Welcom() {
  return (
    <div 
    style={{flex:"0.7",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",
    gap:"20px",fontFamily:"sans-serif,Geneva,Verdana,Segoe UI",color:"rgba(0,0,0,0.54)",borderBottom:"5px solid #63d7b0",borderRadius:"20px"}}>
        <img src='live-chat.png' style={{height:"300px", width:"300px"}} />
        <p>view and text directly to people present in the chat Rooms</p>
    </div>
  )
}

export default Welcom