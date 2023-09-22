import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../context/Context'


function AdminAdd() {
const {products,setproducts}=useContext(Mycontext)
const navigate=useNavigate()

const handleAdding=(item)=>{
item.preventDefault()
const productname=item.target.name.value
const productUrl=item.target.url.value
const producttype=item.target.type.value
const productPrice=item.target.price.value
const productOffer=item.target.offer.value
const producDescription=item.target.description.value

item.target.reset()
if(producttype){
setproducts([...products,{name:productname,src:productUrl,price:productPrice,price2:productOffer,qty:1,type: producttype,description:producDescription,id:products.length+1}])
}else{
  alert("select category")
}
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
          <label htmlFor="type" className="form-label">Type:</label>
          <select  id="type">
                <option value="">select</option>
                <option value="table">Table</option>
                <option value="chair">Chair</option>
                <option value="sofa">Sofa</option>
                <option value="bed">Bed</option>
                <option value="wardrobe">wardrobe</option>
         </select>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="text" className="form-control" id="price"   required />
        </div>
        <div className="mb-3">
          <label htmlFor="price2" className="form-label">Offer Price:</label>
          <input type="text" className="form-control" id="offer"   required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description"   required />
        </div>
        <button  className="btn btn-primary" >Add Product</button>
        <br/>
        <br/>
        <button  className="btn btn-success"  onClick={()=>navigate('/admin')} >Back To All Product</button>
      </form>
    </div>
    </>
  )
}

export default AdminAdd