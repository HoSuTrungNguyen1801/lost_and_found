import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SectionRight from './components/SectionRight';
import SectionLeft from './components/SectionLeft';
import ChatBox from './components/Chat/ChatBox';

// Biểu tượng loading
const LoadingIndicator = () => {
  return (
    <div className="loading-overlay">
      <div className="loader"></div>
      <p className="loading-text">Đang tải...</p>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Hiện biểu tượng tải khi chuyển trang
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500); // Thay đổi thời gian tùy ý
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <LoadingIndicator />}
      <Navbar />
      <main className="min-h-screen flex">
        <nav className="sidebar left-sidebar">
          <SectionLeft />
        </nav>  
        <div className="content flex-1">
          <Outlet />
        </div>    
        <aside className="sidebar right-sidebar">
          <SectionRight />
        </aside>
      </main>
      <Footer />
    </>
  );
}

export default App;
