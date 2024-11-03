import "./chat.css"
import Sidebar from './Sidebar'
import ChatArea from './ChatArea';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import { IconButton } from '@mui/material';


function ChatBox () {
  return (
    <div className='main-container'>
      <Sidebar />
      <ChatArea />
    </div>
  )
}

export default ChatBox
