import React from "react";
import Nav from "../../Nav";
import { useContext, useEffect } from "react";
import { Mycontext } from "../../../context/Context";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";

function Tables() {
  const navigate = useNavigate();
  const { products,setproducts } = useContext(Mycontext);
  const FilterProduct = products.filter(
    (e) => e.type.toLowerCase() === "table"
  );
  // console.log(FilterProduct);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
  return (
    <>
      <div className=" sticky-top">
        <Nav />
      </div>
      <MDBContainer className="container py-5">
        <div className="d-flex flex-wrap ">
          {FilterProduct.map((productsList) => (
            <div key={productsList.id} className="w-25 p-2">
              <MDBCard
                onClick={() => navigate(`/productview/${productsList.id}`)}
              >
                <MDBCardImage
                  src={productsList.src}
                  alt="Photo"
                  className="card-img-top"
                />
                <MDBCardBody>
                  <MDBCardTitle>{productsList.name}</MDBCardTitle>
                  <MDBCardText className="card-text">
                    {productsList.price}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}
        </div>
      </MDBContainer>
      <div className='mt-3'>
     <Footer/>
     </div>
    </>
  );
}
export default Tables;
