import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../context/Context'


function AdminAdd() {
const {products,setproducts}=useContext(Mycontext)
// const navigate=useNavigate()

const handleAdding=(item)=>{
item.preventDefault()
const productname=item.target.name.value
const productUrl=item.target.url.value
const productPrice=item.target.price.value
const productOffer=item.target.offer.value
const producDescription=item.target.description.value

item.target.reset()
setproducts([...products,{name:productname,src:productUrl,price:productPrice,price2:productOffer,description:producDescription,id:Date.now()}])
}


  return (
    <>
   
   <div className="container" >
      <h1>Add Product</h1>
      <form onSubmit={handleAdding}>

        
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name"  required />
        </div>


    
        <div className="mb-3">
          <label htmlFor="src" className="form-label">Image:</label>
          <input type="text" className="form-control" id="url"  required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="text" className="form-control" id="price"   required />
        </div>
        <div className="mb-3">
          <label htmlFor="price2" className="form-label">Price 2:</label>
          <input type="text" className="form-control" id="offer"   required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description"   required />
        </div>
        <button  className="btn btn-primary" >Add Product</button>
        <br/>
        <br/>
        {/* <button  className="btn btn-success"  onClick={()=>navigate('/admin')} >Back To All Product</button> */}
      </form>
    </div>
    </>
  )
}

export default AdminAdd