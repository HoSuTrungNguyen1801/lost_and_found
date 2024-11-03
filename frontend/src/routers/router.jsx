import {createBrowserRouter} from "react-router-dom"
import App from '../App'
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import PostDetail from "../pages/home/PostDetail";
import Login from "../components/Login";
import ChatPages from "../pages/home/ChatPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/profile/status", element: <div>Thông tin cá nhân</div> },
      { path: "/post/:id", element: <PostDetail /> },
      { path: "/header", element: <Header /> }
    ]
  },
  { path: "/dangnhap",element: <Login /> },
  { path: "/chatbox",element: <ChatPages /> },
]);

export default router;