import React from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  
function Carousal() {
  return (
    
    <div id='home'>
         <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={require("./images/carosal-3new.jpg")} 
        alt='Photos'
      >
      
        <h5 style={{fontFamily:"revert-layer", color:"white"}}>"Discover Endless Style: Shop our curated collection of furniture today."</h5>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={require("./images/carosil-4.jpg")}        
        alt='Photos'
      >
        <h5 style={{fontFamily:"revert-layer", color:"white"}}>"Quality Furniture, Delivered to Your Doorstep: Redefine your living spaces effortlessly."</h5>
      </MDBCarouselItem>

      <MDBCarouselItem
      
        className='w-100 d-block'
        itemId={3}
        src={require("./images/cover(1).jpg")} 
        alt='Photos'
      >
      <h3 className='mb-2 ms-5' style={{fontFamily:"revert-layer",color:"white"}}>"Furnish Your Dreams with Our Exquisite Collections."</h3>

      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  )
}

export default Carousal