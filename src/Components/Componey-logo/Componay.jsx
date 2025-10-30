import React from 'react'
import "./Company.css"
import slack from "../../assets/slack.png"
import amazon from "../../assets/amazon.png"
import woocommerce from "../../assets/woocommerce.png"
import meundies from "../../assets/meundies.png"
import sitepoint from "../../assets/sitepoint.png"
   
function Componay() {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <div id="about" className='max-w-7xl mx-auto overflow-hidden container  py-20   flex sm:flex-row flex-col sm:items-center  items-start'>
    <div className='w-[300px]  relative shrink-0 text-gray-600 border-l-4 border-blue-500 py-2 px-6 text-xl z-10 font-semibold sm:text-base  text-left' > Pround partner  at <br /> Hubspot & Segment</div>
        
        <div className='flex animate-marquee whitespace-nowrap relative  z-0'>
          {
            logos.map((logo , index) =>{
              return (
                <img key={index} src={logo} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70  hover:grayscale-0 hover:opacity-100 transition-all ' />
              )
            })
          }
           {
            logos.map((logo , index) =>{
              return (
                <img key= {`duplicate-${index}`} src={logo} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70  hover:grayscale-0 hover:opacity-100 transition-all ' />
              )
            })
          }
        </div>
        <div></div>
    </div>
  )
}

export default Componay
