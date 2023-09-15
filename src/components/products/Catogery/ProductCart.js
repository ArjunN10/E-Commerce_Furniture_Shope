import React  from 'react'
import {MDBCard,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBCardGroup} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
// import { Mycontext } from '../../context/Context';

function ProductCart() {
  // const {productsList}=useContext(Mycontext)
  const navigate=useNavigate()
  return (
    <div>
        <div className='d-flex m-auto w-100 mt-5'>
        <img src="https://t4.ftcdn.net/jpg/05/67/53/87/240_F_567538708_Pe1gAKXfcBsuwzv83Ag0CylD2yMMRIqg.jpg"className="card-img-top" alt="Photos" />
    </div> 
  <MDBCardGroup style={{background:"rgb(231, 240, 248)"}} id="products">
  <h3 style={{fontFamily:"inherit"}} className='w-100 mt-5 text-center' id='category'>Category</h3>
<MDBRow className='row-cols-1 row-cols-md-3 my-2 mx-5 g-5 '>
      <MDBCol>
        <MDBCard onClick={()=>navigate('/sofa')} className='h-100 w-75 hover-shadow  bg-image hover-zoom'>
          <MDBCardImage
            src='https://www.ikea.com/us/en/images/products/haerlanda-sleeper-sofa-with-chaise-ljungen-medium-gray__0622059_pe690274_s5.jpg?f=xxs'
            alt='Photo'
            position='top'/>
          <MDBCardBody>
            <MDBCardTitle>Sofas</MDBCardTitle>
            <MDBCardText>
            Sink into Comfort - Explore Our Luxurious Sofa Collection.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard onClick={()=>navigate('/bed')} className='h-100 w-75 hover-shadow bg-image hover-zoom'>
          <MDBCardImage
            src='https://www.ikea.com/us/en/images/products/malm-high-bed-frame-2-storage-boxes-black-brown-luroey__1101552_pe866728_s5.jpg?f=xxs'
            alt='Photos'
            position='top'/>
          <MDBCardBody>
            <MDBCardTitle>Beds</MDBCardTitle>
            <MDBCardText>
              Rest Easy - Choose from a Variety of Stylish Beds.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard onClick={()=>navigate('/chair')} className='h-100 w-75 hover-shadow  bg-image hover-zoom'>
          <MDBCardImage
            src='https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-gunnared-dark-gray__1192238_pe900964_s5.jpg?f=xxs'
            alt='Photos'
            position='top'/>
          <MDBCardBody>
            <MDBCardTitle>Chairs</MDBCardTitle>
            <MDBCardText>
            Sit in Style - Find the Perfect Chair for Any Room.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol>
        <MDBCard onClick={()=>navigate('/table')} className='h-100 w-75 hover-shadow  bg-image hover-zoom'>
          <MDBCardImage
            src='https://www.ikea.com/us/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg?f=xxs'
            alt='Photos'
            position='top'/>
          <MDBCardBody>
            <MDBCardTitle>Tables</MDBCardTitle>
            <MDBCardText>
            Gather 'Round - Discover Functional and Chic Tables.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol>
        <MDBCard onClick={()=>navigate('/wardrobe')} className='h-100 w-75 hover-shadow  bg-image hover-zoom'>
          <MDBCardImage
            src="https://www.ikea.com/us/en/images/products/pax-bergsbo-wardrobe-dark-gray-dark-gray__1154692_pe886251_s5.jpg?f=xxs"
            alt='Photos'
            position='top'/>
          <MDBCardBody>
            <MDBCardTitle>Wardrobes</MDBCardTitle>
            <MDBCardText>
            Organize with Elegance - Explore Our Wardrobe Selection.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBCardGroup>



    {/* <div className='d-flex m-auto w-100 mt-5'>
        
        <img src={require("./images/cover(1).jpg")}   className="card-img-top" alt="Photos" />
    </div>  */}

    
   </div>
   
  )
}


export default ProductCart