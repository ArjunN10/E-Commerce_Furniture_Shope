import React from 'react';
import { MDBCard, MDBCarousel, MDBCarouselItem, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBCardGroup } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function ProductCart() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='d-flex m-auto w-100 mt-5'>
        <img
          src="https://t4.ftcdn.net/jpg/05/67/53/87/240_F_567538708_Pe1gAKXfcBsuwzv83Ag0CylD2yMMRIqg.jpg"
          className="card-img-top"
          alt="Photos"
          onClick={() => navigate('/allproducts')}
        />
      </div>
      <MDBCardGroup style={{ background: "rgb(231, 240, 248)" }} id="products">
        <h3 style={{ fontFamily: "inherit" }} className='w-100 mt-5 text-center' id='category'>Category</h3>
        <MDBRow className='row-cols-1 row-cols-md-3 my-2 mx-2 mx-md-5 g-4 g-md-5 '>
          <MDBCol>
            <MDBCard onClick={() => navigate('/sofa')} className='h-100 hover-shadow bg-image hover-zoom'>
              <MDBCardImage
                src='https://www.ikea.com/us/en/images/products/haerlanda-sleeper-sofa-with-chaise-ljungen-medium-gray__0622059_pe690274_s5.jpg?f=xxs'
                alt='Photo'
                position='top' />
              <MDBCardBody>
                <MDBCardTitle>Sofas</MDBCardTitle>
                <MDBCardText>
                  Sink into Comfort - Explore Our Luxurious Sofa Collection.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard onClick={() => navigate('/bed')} className='h-100 hover-shadow bg-image hover-zoom'>
              <MDBCardImage
                src='https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-black-brown-luroey__1101552_pe866728_s5.jpg?f=xxs'
                alt='Photos'
                position='top' />
              <MDBCardBody>
                <MDBCardTitle>Beds</MDBCardTitle>
                <MDBCardText>
                  Rest Easy - Choose from a Variety of Stylish Beds.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard onClick={() => navigate('/chair')} className='h-100 hover-shadow bg-image hover-zoom'>
              <MDBCardImage
                src='https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-gunnared-dark-gray__1192238_pe900964_s5.jpg?f=xxs'
                alt='Photos'
                position='top' />
              <MDBCardBody>
                <MDBCardTitle>Chairs</MDBCardTitle>
                <MDBCardText>
                  Sit in Style - Find the Perfect Chair for Any Room.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard onClick={() => navigate('/table')} className='h-100 hover-shadow bg-image hover-zoom'>
              <MDBCardImage
                src='https://www.ikea.com/us/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg?f=xxs'
                alt='Photos'
                position='top' />
              <MDBCardBody>
                <MDBCardTitle>Tables</MDBCardTitle>
                <MDBCardText>
                  Gather 'Round - Discover Functional and Chic Tables.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard onClick={() => navigate('/wardrobe')} className='h-100 hover-shadow bg-image hover-zoom'>
              <MDBCardImage
                src="https://www.ikea.com/us/en/images/products/pax-bergsbo-wardrobe-dark-gray-dark-gray__1154692_pe886251_s5.jpg?f=xxs"
                alt='Photos'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Wardrobes</MDBCardTitle>
                <MDBCardText>
                  Organize with Elegance - Explore Our Wardrobe Selection.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol>
            <MDBCard className='cardst h-100 hover-shadow bg-image hover-zoom'>
              <MDBCardImage
                src="https://m.media-amazon.com/images/I/61cox47w3NL._AC_UL800_FMwebp_QL65_.jpg"
                alt='Photos'
                position='top'
              />
              <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                  <h4 className='text-white mb-0'>Available Soon...</h4>
                </div>
              </div>
              <MDBCardBody>
                <MDBCardTitle>Storage</MDBCardTitle>
                <MDBCardText>
                  Redefine Versatile Storage - Explore Our Storage Furniture Selection
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBCol>
          <MDBCard className='d-flex m-auto w-100 mt-2 mb-0 '>
            <MDBCarousel showControls fade>
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={require("../images/cover8new.jpg")}
                alt='photos'
              />

              <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src={require("../images/cover4newnew.jpg")}
                alt='photos'
              />
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src={require("../images/cover9.png")}
                alt='photos'
              />
            </MDBCarousel>
            <MDBCardImage
              src='https://i.pinimg.com/originals/f9/ba/70/f9ba70456077b039b70d04ce8ec508ad.gif'
              onClick={() => navigate('/allproducts')}
              className="card-img-top"
              alt="Photos" />

            <MDBCardImage
              src={require("../images/4415159.jpg")}
              onClick={() => navigate('/allproducts')}
              className="card-img-top" alt="Photos" />
          </MDBCard>
        </MDBCol>
      </MDBCardGroup>
    </div>
  );
}

export default ProductCart;
