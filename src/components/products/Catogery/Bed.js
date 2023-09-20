import React from 'react'
import { useContext,useEffect } from 'react'
import Nav from '../../Nav';
import { Mycontext } from '../../../context/Context'
import {MDBCard,MDBCardImage, MDBCardOverlay,MDBCardBody,MDBCardTitle,MDBCardText,MDBContainer, } from 'mdb-react-ui-kit';
import {  useNavigate } from 'react-router-dom';
import Footer from '../../Footer';

function Bed() {
const navigate=useNavigate()
  const {products,setproducts}=useContext(Mycontext)
  const FilterProduct=products.filter((e)=>e.type.toLowerCase() === 'bed')
  // console.log(FilterProduct);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

<div  className=' sticky-top'>
     <Nav/>
    </div>
    {/* <MDBCard background='dark' className='text-white w-100 h-5' >
      <MDBCardImage overlay src='https://img.freepik.com/premium-photo/black-sofa-black-living-room-interior-with-copy-space_43614-843.jpg?w=900' alt='...' />
      <MDBCardOverlay>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText>
        <MDBCardText>Last updated 3 mins ago</MDBCardText>
      </MDBCardOverlay>
    </MDBCard> */}
<MDBContainer className="container py-5">
  <div className="d-flex flex-wrap ">
    {FilterProduct.map((productsList) => (
      <div key={productsList.id} className="w-25 p-2">
        <MDBCard onClick={()=>navigate(`/productview/${productsList.id}`)}>     {/* it navigate to product view */}
          <MDBCardImage
            src={productsList.src}
            alt="Photo"
            className="card-img-top"/>
          <MDBCardBody>
            <MDBCardTitle >{productsList.name}</MDBCardTitle>
            <MDBCardText className="card-text">{productsList.price}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    ))}
  </div>
</MDBContainer>
<div className='mt-3'>
      <Footer/>
     </div>
    </div>
  )
}

export default Bed