import React from 'react'
import CustomImages from './CustomImages'

function HeroSection() {
    const images = [
         "/images/recepies/image_1.jpg",
         "/images/recepies/image_3.jpg",
         "/images/recepies/image_4.jpg",
         "/images/recepies/image_5.jpg",
         "/images/recepies/image_6.jpg",
         "/images/recepies/image_7.jpg",
         "/images/recepies/image_8.jpg",
         "/images/recepies/image_9.jpg",
         "/images/recepies/image_10.jpg",
    ]
  return <> 
        <div className="section hero">
            <div className="col typography">
                <h1 className="title"> What are We About</h1>
                <p className="para">FoodiesZone is a place where you can please your soul and tummy with delicious food recepies of all cusine.
                 And our service is absolutely free. So Start Exploring Now </p>
                <button className="btn1">explore now</button>
            </div>
            <div className="col gallery">
                {images.map ((src,index)=>
                     <CustomImages imgSrc={src} key={index} pt={"90%"}/>
                )}
                
            </div>
    
        </div> 
  
  </>
    
  
}

export default HeroSection