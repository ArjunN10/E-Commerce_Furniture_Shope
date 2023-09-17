
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
import Footer from './components/Footer';
import Profile from './profile/Profile';
import Productview from './components/Productview';
import Allproducts from './components/Allproducts';
import Addcart from './components/Addcart';
import Paymentpage from './components/Paymentpage';

function App() {
const [user,setuser]=useState([])
const [username,setusername]=useState([])
const [addcart,setaddcart]=useState([])
  return (
    <>
    <Mycontext.Provider value={{productsList,user,setuser,username,setusername,addcart,setaddcart}}>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>

      <Route path='/sofa' element={<Sofa/>}/>
      <Route path='/table' element={<Tables/>}/>
      <Route path='/bed' element={<Bed/>}/>
      <Route path='/wardrobe' element={<Wardrobes/>}/>
      <Route path='/chair' element={<Chairs/>}/>
      <Route path='/productview/:id' element={<Productview/>}/>
      <Route path='/allproducts' element={<Allproducts/>}/>
      <Route path='/addcart' element={<Addcart/>}/>
      <Route path='/bill' element={<Paymentpage/>}/>
     </Routes>
     </Mycontext.Provider>
     <div className='mt-3'>
      <Footer/>
     </div>

    </>
  );
}

export default App;
