import React, { useContext, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import { Mycontext } from '../../../context/Context';
import { useNavigate } from 'react-router-dom';
import Nav from '../../Nav';
import Footer from '../../Footer';

function Allproducts() {
  const { products } = useContext(Mycontext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='sticky-top'>
        <Nav />
      </div>
      <div className='container mt-2'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
          {products.map((items) => (
            <div key={items.id} className='col mb-4'>
              <MDBCard className='h-100'>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src={items.src} fluid alt='Photo' />
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{items.name}</MDBCardTitle>
                  <MDBCardText>{items.description}</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className='my-auto mx-auto'>
                  <MDBBtn onClick={() => navigate(`/productview/${items.id}`)}>View Product</MDBBtn>
                </MDBCardFooter>
              </MDBCard>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-3'>
        <Footer />
      </div>
    </>
  );
}

export default Allproducts;
