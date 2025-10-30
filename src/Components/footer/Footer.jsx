import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }


  return (
    <footer className='bg-gray-200 mt-20'>
      <div className='container max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-12 gap-8 lg:gap-12 py-10 px-8 mt-5 '>
        <div className='grid  lg:col-span-4 '>
           {/* logo section */}
        <div className='flex items-center gap-0 curser-pointer text-center mb-5 '>
          <div className='h-4 w-4 bg-blue-400 rounded-full hover:bg-blue-700 transition-bg'></div>
          <div className='h-4 w-4 bg-red-600  rounded-full -ml-1 hover:bg-red-400 transition-bg'></div>
                   <h2 className='font-semibold pl-2 text-2xl '>The Next Design</h2>  
        </div>
          <p className='text-gray-600'>The copy warned the Little Blind Text , that where it came from if would have been rewritten a thounsand times</p>
          <div className='flex flex-row gap-3 items-center justify-start  text-gray-600 mt-4 px-3'>
            <a className='size-8 hover:text-blue-500 hover:scale-[1.05] transition-all duration-500'><FaFacebookF /> </a>
            <a className='size-8 hover:text-blue-500 hover:scale-105 transition-all duration-500'><AiOutlineTwitter /> </a>
            <a className='size-8 hover:text-blue-500 hover:scale-105 transition-all duration-500'><FaLinkedinIn /> </a>
          </div>
        </div>
        <div className='lg:col-span-8' >
            <div className='grid gird-cols-2 md:grid-cols-4 gap-8'>
         {

              Object.entries(footerLinks).map(([category , links] ) =>{
                return(
                    <div key={category}>
                        <h3 className='text-lg font-medium mb-4 uppercase'>{category}</h3>
                         <ul className='space-y-3'>
                        {
                            links.map((link , index) =>{
                                return(
                                <li key= {index} >
                               <a href="" className='text-gray-600 hover:text-gray-900'>  {link.name}</a>
                                </li>
                                
                                )
                            })
                        }
                        </ul>
                    </div>
                )
              })
          



           
         }  
         </div>  
        </div>
         
        
      </div>
    </footer>
  )
}

export default Footer
