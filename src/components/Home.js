import Nav from './Nav'
import Carousal from './products/Carousal'
import ProductCart from './products/Catogery/ProductCart'
import Footer from './Footer'


function Home() {
  return (
    <>
      <div className='sticky-top'><Nav/></div>
      <Carousal/>
        <ProductCart/>
        <div className='mt-3'>
      <Footer/>
     </div>
    </>
  )
}

export default Home








