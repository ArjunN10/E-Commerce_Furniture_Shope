
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import React, { useState } from 'react'
import Login from './LoginSignup/Login';
import Signup from './LoginSignup/Signup';
import { Mycontext } from './context/Context';
import { productsList } from './components/products/Productslist';
import Sofa from './components/products/Catogery/Sofa';
import Tables from './components/products/Catogery/Tables';
import Bed from './components/products/Catogery/Bed';
import Wardrobes from './components/products/Catogery/Wardrobes';
import Chairs from './components/products/Catogery/Chairs';
// import Profile from './profile/Profile';
import Productview from './components/products/Catogery/Productview';
import Allproducts from './components/products/Catogery/Allproducts';
import Addcart from './components/products/Catogery/Addcart';
import Paymentpage from './components/products/Catogery/Paymentpage';
import Externalpage from './components/products/Catogery/Externalpage';
import AdminHome from './Admin/AdminHome';
import AdminAdd from './Admin/AdminAdd';
import AdminEdit from './Admin/AdminEdit';
import AdminAllproduct from './Admin/AdminAllproduct';
import AdminPageBeds from './Admin/AdminPageBeds';
import AdminPageSofas from './Admin/AdminPageSofas';
import AdminPageChairs from './Admin/AdminPageChairs';
import AdminPageWardrobes from './Admin/AdminPageWardrobes';
import AdminPageTables from './Admin/AdminPageTables';
import AdminUserList from './Admin/AdminUserList';


function App() {
const [products,setproducts]=useState(productsList)
const [user,setuser]=useState([])
const [username,setusername]=useState([])
const [addcart,setaddcart]=useState([])
const [Payment,setpayment]=useState([])
const [loggedIn, setLoggedIn] = useState(true);
  return (
    <>
    <Mycontext.Provider value={{products,setproducts,user,setuser,username,setusername,addcart,setaddcart,loggedIn, setLoggedIn}}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>

      <Route path='/sofa' element={<Sofa/>}/>
      <Route path='/table' element={<Tables/>}/>
      <Route path='/bed' element={<Bed/>}/>
      <Route path='/wardrobe' element={<Wardrobes/>}/>
      <Route path='/chair' element={<Chairs/>}/>
      <Route path='/productview/:id' element={<Productview/>}/>
      <Route path='/allproducts' element={<Allproducts/>}/>
      <Route path='/addcart' element={<Addcart/>}/>
      <Route path='/bill' element={<Paymentpage/>}/>
      <Route path='/*' element={<Externalpage/>}/>

  <Route path="/adminhome/" element={<AdminHome />}>
  <Route path="adminAllproduct" element={<AdminAllproduct />} />
  <Route path="adminAdd" element={<AdminAdd />} />
  <Route path="adminedit" element={<AdminEdit />} />
  <Route path="adminUserlist" element={<AdminUserList/>} />
  <Route path="AdminPageBeds" element={<AdminPageBeds/>} />
  <Route path="AdminPageSofas" element={<AdminPageSofas/>} />
  <Route path="AdminPageChairs" element={<AdminPageChairs/>} />
  <Route path="AdminPageWardrobes" element={<AdminPageWardrobes/>} />
  <Route path="AdminPageTables" element={<AdminPageTables/>} />
   </Route>

     </Routes>
     </Mycontext.Provider>
     

    </>
  );
}

export default App;
