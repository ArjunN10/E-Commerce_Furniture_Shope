import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Adminsidebar from './Adminsidebar';

function AdminHome() {
  const location = useLocation();

  const isHomePage = location.pathname === '/adminhome'; 

  return (
    <div className='d-flex'>
      <div className=''>
        <Adminsidebar />
      </div>

      {isHomePage && (
        <div className="d-flex flex-column justify-content-center align-items-center mx-auto">
          <h3 style={{ fontFamily: 'monospace' }}>Welcome ADMIN...</h3>
        </div>
      )}

      <div className='overflow-auto'>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminHome;
