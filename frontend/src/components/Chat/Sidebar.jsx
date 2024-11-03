import React from 'react'
import './chat.css'
import { RiContactsLine } from "react-icons/ri";
import { IconButton } from '@mui/material';
import { FaUsers } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Sidebar() {
  return (
    <div className='sidebar-container'>
       <div className='sb-header'>
        <div>
          <IconButton>
            <RiContactsLine />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <FaUserFriends />
          </IconButton>
          <IconButton>
            <FaUsers />
          </IconButton>
        </div>
       </div>
       <div className='sb-search'>
        <IconButton>
          <FaSearch />
        </IconButton>   
        <input className='search-box' placeholder="Search" />
       </div>
       <div className='sb-conversation'>Conversation</div>
    </div>
  )
}

export default Sidebar
