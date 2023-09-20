import React from 'react';
import { Outlet } from 'react-router-dom';
import Adminsidebar from './Adminsidebar';

function AdminHome() {
  return (
    <div className='d-flex'>
      <div className='sticky-left'>
        < Adminsidebar/>
      </div>

      {/* <div>
        <h3>Welcome ADMIN...</h3>
      </div> */}

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminHome;
