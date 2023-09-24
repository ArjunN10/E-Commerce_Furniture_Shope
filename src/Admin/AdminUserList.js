import React, { useContext } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Mycontext } from '../context/Context';

function AdminUserList() {
  const {user}=useContext(Mycontext)
  console.log(user);

  
  return (
    <div style={{width:'130vh',marginLeft:'70px',marginTop:'70px'}}>
        <MDBTable responsive className='caption-top '>
      <caption>Total Registered users:{user.length}</caption>
      <MDBTableHead>
        <tr>
          <th scope='col'>NO</th>
          <th scope='col'>UserName</th>
          <th scope='col'>Email</th>
        </tr>
      </MDBTableHead>
      {user.map((data,index)=>
      
      <MDBTableBody>
        <tr key={index}>
          <th scope='row'>{index+1}</th>
          <td>{data.name}</td>
          <td>{data.email}</td>
        </tr>
      </MDBTableBody>
        
      )}
       
    </MDBTable>
    </div>
  )
}

export default AdminUserList