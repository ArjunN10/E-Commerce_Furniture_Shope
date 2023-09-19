import React, { useContext, useState } from "react";

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../../context/Context";

const Search = () => {
  const { products,setproducts } = useContext(Mycontext);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <MDBDropdown>
        <MDBDropdownToggle className="shadow-none bg-transparent border-0 overflow-hidden">
          <form className="d-flex">
            <MDBInput
              type="search "
              placeholder="Search Here"
              className="me-2 my-2"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <MDBBtn outline color="success"  className="my-1 my-1">
              <MDBIcon icon="search"/>
            </MDBBtn>
          </form>
        </MDBDropdownToggle>
        <MDBDropdownMenu end className="overflow-hidden">
          {filteredProducts.map((item) => (
            <MDBDropdownItem
              key={item.id}
              onClick={() => navigate(`/productview/${item.id}`)}
            >
              <img src={item.src} className="w-25" alt={item.name} />{" "}
              {item.name}
            </MDBDropdownItem>
          )).splice(0,6)}
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

export default Search;
