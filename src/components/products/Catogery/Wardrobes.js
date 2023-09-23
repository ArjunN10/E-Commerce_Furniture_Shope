import { useContext, useEffect } from 'react';
import Nav from '../../Nav';
import { Mycontext } from '../../../context/Context';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer';

function Wardrobes() {
  const navigate = useNavigate();
  const { products } = useContext(Mycontext);
  const FilterProduct = products.filter((e) => e.type.toLowerCase() === 'wardrobe');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='sticky-top'>
        <Nav />
      </div>
      <div>
        <MDBContainer className='container py-5'>
          <MDBRow className='row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
            {FilterProduct.map((productsList) => (
              <MDBCol key={productsList.id} className='mb-4'>
                <MDBCard onClick={() => navigate(`/productview/${productsList.id}`)}>
                  <MDBCardImage src={productsList.src} alt='Photo' className='card-img-top' />
                  <MDBCardBody>
                    <MDBCardTitle>{productsList.name}</MDBCardTitle>
                    <MDBCardText className='card-text'>{productsList.price}</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
      <div className='mt-3'>
        <Footer />
      </div>
    </div>
  );
}

export default Wardrobes;
