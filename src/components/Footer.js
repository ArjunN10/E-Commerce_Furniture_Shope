import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <h6 className='text-decoration-underline'>Follow us</h6>
          <div className='d-flex justify-content-center'>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#3b5998' }}
              href='https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi_qc7biaOBAxVKo2YCHdFuCqsYABABGgJzbQ&gclid=Cj0KCQjw9fqnBhDSARIsAHlcQYQywJKvHRoZVBw1HWZ_gs8jwgzFsS4-0bUQHWplt5K1g_pKMq9K8S4aAoGGEALw_wcB&ohost=www.google.com&cid=CAESauD2gEfsvEgMCooD7aKXoUgfnmyteduoIkeCGj5od6tfFXCv4fowKpn30tbgpg3O5Lll2YBpzCPQvIpnBGRKpj81PAqlRJT40jLDvQWI7pcBzuv2PWYNTKCX-MoWZVSQI43sFJd97UeN_AI&sig=AOD64_0aqFlOMSE-Hv4ISAAs987UoJXddw&adurl&ved=2ahUKEwiLysjbiaOBAxW0a2wGHWRoCzUQqyQoAHoECAUQCw'
              role='button'
            >
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#55acee' }}
              href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyBsYW5nIjoiZW4ifQ%3D%3D%22%7D'
              role='button'
            >
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#dd4b39' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='google' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#ac2bac' }}
              href='https://www.instagram.com/accounts/login/'
              role='button'
            >
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              href='https://www.linkedin.com/login'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              href='https://github.com/login'
              role='button'
            >
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </div>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className='container'>
          <div className='row'>
            <MDBCol md='4' className='mb-4'>
              <div className='text-center'>
                <h3>"Wood Gallery"</h3>
                <p>Your ultimate destination for top-quality furniture, transforming your space with elegance and comfort</p>
              </div>
            </MDBCol>
            <MDBCol md='4' className='mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Category</h6>
              <div className='text-center'>
                <p>
                  <Link to='/sofa' className='text-reset'>
                    Sofas
                  </Link>
                </p>
                <p>
                  <Link to='/bed' className='text-reset'>
                    Beds
                  </Link>
                </p>
                <p>
                  <Link to='/chair' className='text-reset'>
                    Chairs
                  </Link>
                </p>
              </div>
            </MDBCol>
            <MDBCol md='4' className='mb-4'>
              <div className='text-center'>
                <p>
                  <Link to='table' className='text-reset'>
                    Tables
                  </Link>
                </p>
                <p>
                  <Link to='/wardrobes' className='text-reset'>
                    Wardrobes
                  </Link>
                </p>
              </div>
            </MDBCol>
          </div>
        </div>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <p>
          Copyright © 2023. All rights reserved | <br />
          Created by Wood Gallery
        </p>
      </div>
    </MDBFooter>
  );
}

export default Footer;
