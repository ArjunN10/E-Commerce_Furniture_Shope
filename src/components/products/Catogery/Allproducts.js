import React, { useContext,useEffect } from 'react'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardFooter,MDBCardImage,MDBBtn,MDBRipple} from 'mdb-react-ui-kit';
import { Mycontext } from '../../../context/Context';
import { useNavigate } from 'react-router-dom';
import Nav from '../../Nav';
import Footer from '../../Footer';


function Allproducts() {
    const {products}=useContext(Mycontext)
    // console.log(productsList);
    const navigate=useNavigate()
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <div  className=' sticky-top'>
     <Nav/>
    </div>
    <div className='container mt-2 '>
      <div className='row'>
        {products.map((items)=>(
            // <div className=''>
<MDBCard key={products.id} className='w-25 mt-2'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={items.src} fluid alt='Photo' />
        {/* <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a> */}
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{items.name}</MDBCardTitle>
        <MDBCardText>
         {items.description}
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className='my-auto mx-auto'>
      <MDBBtn onClick={()=>navigate(`/productview/${items.id}`)}>view product</MDBBtn>

          </MDBCardFooter>
    </MDBCard>
    //  </div>
    ))}
    </div>
    </div>
    <div className='mt-3'>
      <Footer/>
     </div>
    </>
  )
}

export default Allproducts