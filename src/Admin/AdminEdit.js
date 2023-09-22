import React, { useContext,} from 'react'
import { useParams } from 'react-router-dom'
import { Mycontext } from '../context/Context'
import {MDBContainer,MDBRow, MDBCol,MDBCard,MDBListGroupItem ,MDBCardHeader,MDBListGroup} from 'mdb-react-ui-kit'


function AdminEdit() {
  const {products,setproducts}=useContext(Mycontext)
  // console.log(products);

  const {id}=useParams()
  const productID=id

  const editfilter=products.filter((item)=>parseFloat(item.id) === parseFloat(productID))
  // console.log(editfilter);
  
  const handleEditChange = (event) => {
    event.preventDefault()
    console.log(event.target.src.value);
    const updatedProduct=products.map((e)=>{
    const productimage = event.target.src.value || e.src;
    const productname= event.target.name.value  || e.name;
    const producttype= event.target.type.value  || e.type;
    const productDescription = event.target.description.value  || e.description;
    const productPrice = event.target.price.value  || e.price;
    const productOffer = event.target.offer.value  || e.price2;

    if (e.id === parseInt(productID)) { 
      return {
        ...products,
        id:e.id,
        name:productname,
        src: productimage,
        type: producttype,
        price: productPrice ,
        price2: productOffer,
        description: productDescription,
    };  
    } 
    else {
      return e;
      
  }});
  setproducts(updatedProduct)
   
    };


  return (
    <>
     <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
           <MDBRow>
          <MDBCol md="6" className="position-relative">
    <div>
        <div className="container" >
      <h1>Edit Product</h1>
      {editfilter.map((e)=>
      <form onSubmit={handleEditChange} key={e.id}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input 
          type="text"
           className="form-control" 
           id="name" 
            />
        </div>
        <div className="mb-3">
          <label htmlFor="src" className="form-label">Image:</label>
          <input 
          type="text"
           className="form-control" 
           id="src"
           />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type:</label>
          <input 
          type="text"
           className="form-control" 
           id="type"
           />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
           type="text"
            className="form-control" 
            id="price"  
            />
        </div>
        <div className="mb-3">
          <label htmlFor="price2" className="form-label">Offer price:</label>
          <input 
          type="text" 
          className="form-control" 
          id="offer" 
           />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea 
          className="form-control" 
          id="description"  
          />
        </div>
        <button  className="btn btn-primary" >Edit </button>
        <br/>
        <br/>
      </form>
    )}
    </div>
    </div>
    </MDBCol>
    <MDBCol className='ms-5'>
      {editfilter.map((e)=>
    <MDBCard 
    style={{boxshadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}  key={e.id}>
       <MDBCardHeader className="mx-auto rounded text-primary">DETAILS</MDBCardHeader>
      <MDBListGroup flush>
        <MDBListGroupItem>
         <label className='bg-secondary rounded px-3 text-white'>Name:-</label> 
           {e.name}
          </MDBListGroupItem>
        <MDBListGroupItem>
        <label className='bg-secondary rounded px-3 text-white'>Image:-</label> 
          {e.src}
          </MDBListGroupItem>
        <MDBListGroupItem>
        <label className='bg-secondary rounded px-3 text-white'>Type:-</label> 
          {e.type}
          </MDBListGroupItem>
        <MDBListGroupItem>
        <label className='bg-secondary rounded px-3 text-white'>Price:-</label> 
          {e.price}
          </MDBListGroupItem>
        <MDBListGroupItem>
        <label className='bg-secondary rounded px-3 text-white'>Offer Price:-</label> 
          {e.price2}
          </MDBListGroupItem>
        <MDBListGroupItem>
        <label className='bg-secondary rounded px-3 text-white'>Description:-</label> 
          {e.description}
          </MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
    )}
    </MDBCol>
    </MDBRow>
      </MDBContainer>
    </>
  )
}

export default AdminEdit