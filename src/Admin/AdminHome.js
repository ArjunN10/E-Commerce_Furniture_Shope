import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Adminsidebar from './Adminsidebar';
import './AdminHome.css'

function AdminHome() {
  const location = useLocation();

  const isHomePage = location.pathname === '/adminhome'; 

  return (
    <div>
      <div className='fixed-sidebar'>
        <Adminsidebar />
      </div>

      {isHomePage && (
        <div className="d-flex flex-column justify-content-center align-items-center mx-auto">
          <h3 style={{ fontFamily: 'monospace' }}>Welcome ADMIN...</h3>
        </div>
      )}

      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminHome;
