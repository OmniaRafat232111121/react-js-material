import React from 'react'
type MessageProps={
    text:'Add'|'update'|'DElEtE'
}
const Message = (props:MessageProps) => {
  if(props.text==='Add'){
    return <p>User is Add</p>
  }
  else if(props.text==='update'){
    return <p>User is Updated</p>
  }
  else {
    return <p>User is Deleted</p>
  }
}

export default Message
