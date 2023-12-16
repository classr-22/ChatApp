import React from 'react'

function MessageSelf() {

  var props2 = {name:"You",message:"This is simple message"}

  return (
    <div className='chat-MessageSelf'>
       <div className='messageBox' style={{backgroundColor:"#6CB398", padding:"10px" , borderRadius:"20px"}}>
        <p>{props2.message}</p>
        <p className='con-timeStamp' style={{display:"flex",justifyContent:"flex-end"}}>12.00am</p>
       </div>
    </div>
  )
}

export default MessageSelf