import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../../utils/motion';
const Features = () => {
    
  const features= [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]
  return (
    <motion.section 
     variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
    className='max-w-7xl mx-auto px-4 py-16'>
     <motion.div
      variants={fadeIn('up', 0.3)}
     className=' text-center mb-12'>
        <motion.h2 variants={textVariant(0.2)} className='font-semibold text-3xl md:text-4xl  leading-tight text-gray-900 '>How can we help your business</motion.h2>
        <motion.p variants={fadeIn('up', 0.4)} className=' text-gray-600 '>When you resell bensik , you build trust and increase</motion.p>
     </motion.div>

     <div className='grid grid-cols-1  md:grid-cols-3 gap-8 '>
       {
        features.map((feature , index) =>{
           return (
            <motion.div variants={fadeIn('up', 0.3 * (index + 1))} key={index} className='flex flex-col text-center items-center  p-6' >
                 <motion.div variants={fadeIn('down', 0.4 * (index + 1))} className='bg-green-200 w-24 mt-1  h-24 mb-6 rounded-full flex items-center justify-center '>
                <motion.div variants={fadeIn('up', 0.5 * (index + 1))} className='text-3xl mt-1'>  {feature.icon}</motion.div>  
                </motion.div>
                
                    <motion.h3  variants={textVariant(0.3)}className='text-2xl font-medium mb-3'>{feature.title}</motion.h3>
                    <motion.p variants={fadeIn('up', 0.6 * (index + 1))} className='text-gray-500 '>{feature.description}</motion.p>
                 
            </motion.div>
           )  
        })
       }

      
     </div>

      <div className='  flex items-center justify-center mt-6'>
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full dont-medium hover:bg-blue-700  transition-color  ">Become a Partner</button>
         {/* <div className='absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-2xl top-0 left-0'></div> */}
       </div>
    </motion.section>
  )
}

export default Features
