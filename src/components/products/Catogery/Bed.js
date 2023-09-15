import React from 'react'
import { useContext } from 'react'
import Nav from '../../Nav';
import { Mycontext } from '../../../context/Context'
import {MDBCard,MDBCardImage, MDBCardOverlay,MDBCardBody,MDBCardTitle,MDBCardText,MDBContainer, } from 'mdb-react-ui-kit';
import {  useNavigate } from 'react-router-dom';
function Bed() {
const navigate=useNavigate()
  const {productsList}=useContext(Mycontext)
  const FilterProduct=productsList.filter((e)=>e.type.toLowerCase() === 'bed')
  console.log(FilterProduct);
  return (
    <div>

<div  className=' sticky-top'>
     <Nav/>
    </div>
    {/* <MDBCard background='dark' className='text-white'>
      <MDBCardImage overlay src='https://i.pinimg.com/564x/51/e6/c4/51e6c4b5741c3d9126230a7704acd659.jpg' alt='...' />
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
    </div>
  )
}

export default Bed