import React from 'react'
import './myStyles.css'

function MessageOther() {
  var props1 = {name: "RandomUser", message:"This is simple message"}
  return (
    <div className='Chat-MessagesOther'>
      <div className='conversation-container'>
        <p className='con-icon'>{props1.name[0]}</p>
        <div className='other-text-content' style={{backgroundColor:"#d9d9d9", borderRadius:"20px", padding:"10px"}}>
          <p className='con-title'>{props1.name}</p>
          <p className='con-lastMessage'>{props1.message}</p>
          <p className='con-timeStamp' style={{display:"flex",justifyContent:"flex-end"}}>12.00am</p>
        </div>
      </div>
    </div>
  )
}

export default MessageOther