import React from 'react'
import "./Container.css"
import star1 from "../Images/coloredstar.svg"
import star2 from "../Images/graystar.svg"
import img1 from "../Images/Image 1.png"
import img2 from "../Images/num.png"
import img3 from "../Images/Image 3.png"
import img4 from "../Images/Image 4.png"
import img5 from "../Images/Image 5.png"
import img6 from "../Images/Image 6.png"
import img7 from "../Images/Image 7.png"
import imglove from "../Images/path.png"

const Container = () => {
  return (
    <div className='center-body'>
       <div className='side1'>
        <p className='text'>Home/mobiles</p>
        <img src={img1} className="phone1" alt="bybest"/>
        <img src={img2} className="phone2" alt="bybest"/>
        <img src={img3} className="phone3" alt="bybest"/>
        <img src={img4} className="phone4" alt="bybest"/>
        <img src={img5} className="phone5" alt="bybest"/>
        <img src={img6} className="phone6" alt="bybest"/>
</div>
<div className='middle'>
  <img src={img7} className="mainphone" alt="bybest"/>
  {/* <img src={imglove} className="loveimg" alt="bybest"/> */}
  <p className='bottom-para'>Image courtesy of flipkart, www.flipkart.com</p>
  <div className='bottom-buttons'>
<div className='bottom-button1'>Add Cart</div>
    <div className='bottom-button2'>Buy Now</div>
    </div> 
 </div>
  
<div className='right'>
    
    <div className='right-part'>
        <div className='parafirst'>
        <p className='text-top'>ProductCode</p>
        <p className='text-top1'>0DE349879</p>
        </div>
        <img src={imglove} className="loveimg" alt="bybest"/> 
        <div className='para2'>
        {/* <img src={imglove} className="loveimg" alt="bybest"/> */}
    <h3 className='toph2tag'>Honor 8 Pro (Midnight Black, 128GB)<br/> (6GB RAM)</h3>
        </div>
        <div className='starimages'>
            <img src={star1} alt="bybest"/>
            <img src={star1} alt="bybest"/>
            <img src={star1} alt="bybest"/>
            <img src={star1} alt="bybest"/>
            <img src={star2} alt="bybest"/>
            <p>(9303)</p>
</div>
<div className='paradiv'>
<div className='pricedollar'>
<h3 className='h3tag'>$99.99</h3>
<h4 className='h4tag'>$149.99</h4>
<h4 className='h4tag'>30% off</h4>
</div>
<p className='stocktext'>In Stock</p>

</div>
<div className='third-para'>
<p>Color</p>
<p>Sapphire</p>
<p>Blue</p>
</div>
<div className='cirlce-colored'>
    <span className='circle1'></span>
    <span className='circle2'></span>
    <span className='circle3'></span>
</div>
<div className='bottompara'>
<p className='b-para'>Storage 32GB</p>
<p className='b-para'>RAM 4GB</p>
</div>
<div className='buttons-last-right'>
<div className='btn'>64GB</div>
<div className='btn'>128GB</div>
<div className='btn'>2GB</div>
<div className='btn'>4GB</div>

</div>
<h3 className='last-para'>+Product Details</h3>



       
       
       

    </div>



    </div>
    </div>
  )
}

export default Container