import React from 'react'
import Nav from '../../Nav';
import { useContext } from 'react'
import { Mycontext } from '../../../context/Context'
import {MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBContainer,
    // MDBRow, MDBCol
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


function Sofa() {
  const navigate=useNavigate()
    const {productsList}=useContext(Mycontext)
    const FilterProduct=productsList.filter((e)=>e.type.toLowerCase() === 'sofa')
    // console.log(FilterProduct);
  return (
    <div>
          
<div className=' sticky-top'>
     <Nav/>
    </div>
        <MDBContainer className="container py-5">
  <div className="d-flex flex-wrap ">
    {FilterProduct.map((productsList) => (
      <div key={productsList.id} className="w-25 p-2">
        <MDBCard onClick={()=>navigate(`/productview/${productsList.id}`)}>
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

export default Sofa