import React from 'react'
import "./chat.css"
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'

function ChatArea({props}){
  return (
    <div className='chat-area'>
      <div className='chat-header'>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className='messages-con'>Messages</div>
      <div className='text-input-area'>
        <input type="text" placeholder='Mời bạn nhập vào' className='search-box'/>
        <IconButton>
            <SendIcon />
        </IconButton>        
      </div>
    </div>
  )
}

export default ChatArea
