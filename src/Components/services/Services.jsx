import React from 'react'
import {BsStack} from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { HiLightBulb } from 'react-icons/hi'
import { BiTime } from 'react-icons/bi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../../utils/motion';
const Services = () => {
  //   services section
const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]
  return (
    <section id="services" className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg-px-8 py-16 '>
        <motion.div     
          variants={fadeIn('rigth', 0.3)} className='mb-16 md:mb-0'>
            <motion.h2 
            variants={textVariant(0.5)}  className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 '>Future of Support with <br /> new shape </motion.h2>
            <motion.p variants={fadeIn('up', 0.5)} className=' text-gray-600 mb-6'>Discuss your gaols , determine success mertrics , <br /> identity problems</motion.p>
            <ul className='text-gray-600 list-disc   space-y-2 ml-5 mb-7'>
                <li>
                    UX design content strategy
                </li>
                <li>Development bring</li>
            </ul>
            <button className='bg-blue-700 text-white rounded-full px-10 py-3 hover:bg-blue-950'> Get started</button>
        </motion.div>
       
       <div >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10  relative'>
             {
              services.map((service , index) =>{
                return(
                  <div key={index}  className='bg-white cursor-pointer  roundede-2xl relative top-0 hover:-top-10 hover:shadow-xl  hover:scale-105 transition-all duration-700' >
                    <div className={`mb-4 animate-bounce transition-animate ${index === 0  || index === 3  ? ' duration-300' : 'duration-1000'} `}>{service.icon}</div>
                    <h3 className='font-semibold text-xl mb-2'>{service.title}</h3>
                    <p className='text-gray-600 mb-4'>{service.description}</p>
                    <button className='bg-white text-blue-800 cursor-pointer pb-5'>LEARN MORE</button>
                  </div>
                )
              })
             }
          </div>
       </div>
    </section>
  )
}

export default Services
