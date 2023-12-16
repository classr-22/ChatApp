import React from 'react'

function Conversationsitems({props}) {
  return (
   <div className='conversation-container'>
        <div className='con-icon'>{props.name[0]}</div>
        <div className='con-title'>{props.name}</div>
        <div className='con-lastMessage'>{props.lastMessage}</div>
        <div className='con-timeStamp'>{props.timeStamp}</div>
    </div>
  )
}

export default Conversationsitems