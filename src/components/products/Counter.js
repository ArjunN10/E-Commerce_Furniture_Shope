import { MDBBtn, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";

const Counter = (props) => {
  const [quantity, setQuantity] = useState(props.obj.qty);

  const decrementCount = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      props.obj.qty = quantity - 1;
      // props.dummy(a => a-1)
    }
  };

  const incrementCount = () => {
    setQuantity(quantity + 1);
    props.obj.qty = quantity + 1;
    //   props.dummy(a => a+1)
  };

  return (
    <div>
      <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
        <MDBBtn variant="light" className="px-3 me-2" onClick={decrementCount}>
          <img
            src="https://img.icons8.com/?size=2x&id=gzeZVqbrQKDg&format=png"
            alt="icons"
            style={{ maxWidth: "20px", height: "auto" }}
          />
        </MDBBtn>

        <span>
          <h5>{quantity}</h5>
        </span>

        <MDBBtn variant="light" className="px-3 ms-2" onClick={incrementCount}>
          <img
            src="https://img.icons8.com/?size=50&id=63650&format=png"
            alt="icon"
            style={{ maxWidth: "20px", height: "auto" }}
          />
        </MDBBtn>
      </div>
      <div>
        <MDBTypography tag="h5" className="fw-bold ">
          Total:  ${props.obj.price2 * props.obj.qty}
        </MDBTypography>
      </div>
    </div>
  );
};
export default Counter;
