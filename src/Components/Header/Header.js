import React from 'react'
import "./Header.css"
import path from "../Images/path.svg"
import bell from "../Images/bellicon.svg"
import person from "../Images/personicon.svg"
import searchicon from "../Images/search.png"
import crossxicon from "../Images/crossx.png"
const Header = () => {
  return (
    <>
<div className='header-main'>
   <div className='first-nav'>
    <nav className='nav-bar1'>
      <li className='li1'>WISHLIST</li>
      <img src={path} className="img1" alt="bybest"/>
      <li className='li2'>CART</li>
      <img src={bell} className="img2" alt="bybest"/>
      <img src={person} alt="bybest" className="img3"/>
      <li className='li3'>SAIRAM kEESARA</li>
      {/* <img src={person} alt="bybest" className="img3"/> */}
      
    </nav>
   </div>
   <div className='second-nav'>
    <div className='starting-box'>KRAYA.</div>
    <li className='phone-text'>PHONE</li>
    <li className='telivision'>TELEVISION</li>
    <li className='refrigirator'>REFRIGIRATOR</li>
    <li className='lap'>LAPTOP</li>
    <li className='washmachine'>WASHINGMACHINE</li>
    <li className='download'>DOWNLOADS</li>
    <img src={searchicon} alt="bybest" className='searchimg'/>
    <li className='search-space'>Search for Products</li>
    <img src={crossxicon} alt="bybest"/>
   </div>
</div>
    </>
    
  )
}

export default Header