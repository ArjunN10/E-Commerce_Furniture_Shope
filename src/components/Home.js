// import Profile from '../profile/Profile'
import Nav from './Nav'
import Carousal from './products/Carousal'
import ProductCart from './ProductCart'


function Home() {
  return (
    <>
      <div className='sticky-top'><Nav/></div>
      <Carousal/>
        <ProductCart/>
        {/* <Profile/> */}

    </>
  )
}

export default Home








