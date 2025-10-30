import React from 'react'
import heroImage from '../../assets/hero-image.png'
 import {motion } from "framer-motion"
import {fadeIn, textVariant} from '../../utils/motion'

function Hero() {
  return (
    <section id="home" className='container flex flex-col md:flex-row justify-content items-center mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
    {/* left content  */}
    <div className='w-full md:w-1/2 space-y-8 md:pl-5'>
     { /* star badge */ }
    <motion.div
     variants ={fadeIn('right' , 0.2)}
      initial = "hidden"
      whileInView ="show"
    className='flex items-center gap-2 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors curser-pointer group '>
      <span className='text-blue-600 group-hover:scale-110 transition-transform'>⭐</span>   
      <p className='text-sm font-medium' >Jump start your growth</p>  
    </motion.div> 

    { /* heading  */ }
    <div
  
    >
    <motion.h1 
       variants ={textVariant(.3)}
      initial = "hidden"
      whileInView ="show"
    className=' text-4xl md:text-5xl lg:text-6xl leading-tight font-bold'> 
        We boost the growth for  <span className='text-blue-600'>startup to
         fortune 500</span> companies
    </motion.h1> 
    <motion.p 
      variants ={fadeIn('up' , .5)}
      initial = "hidden"
      whileInView ="show"
    className='text-gray-600 text-lg  md:text-xl max-w-xl'>Get the most accurate leads , sales people training and <br />  conversions , tools and more  - all within the same one biling </motion.p>   
    </div> 
     
    </div>
    {/* right content  */}
    <motion.div 
    variants ={fadeIn('left' , 0.2)}
      initial = "hidden"
      whileInView ="show"
     
     className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 '> 
      <div className='relative'>
        <img src={heroImage} alt=" hero image" className='rounded-lg relative z-10  hover:scale-[1.02] transition-transform duration-300' />
      </div>
      <div></div>
      <div></div>
    
    </motion.div>
    </section>
  )
}

export default Hero
