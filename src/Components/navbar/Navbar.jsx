import React, { useState} from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
 import {motion } from "framer-motion"
import {fadeIn} from '../../utils/motion'
function Navbar() {
     const [isMenuOpen , setIsMenuOpen] = useState(false)    
      const [activeLink , setActiveLink] = useState('#home')

    const navLinks =[
        {label: "Home", href: '#home'},      
        {label: "About", href: '#about'},       
        {label: "Our Services", href: '#services'},      
        {label: "Testimonial", href: '#Testimontial'},
    ]
  return (
    <motion.nav
     variants ={fadeIn('down' , 0.2)}
     initial = "hidden"
     whileInView ="show"
     viewPort = {{once:true}}
    className = "fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="w-full container mx-auto flex item-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16" 
      >  
      {/* logo section */}
        <div className='flex items-center gap-0 curser-pointer '>
          <div className='h-4 w-4 bg-blue-400 rounded-full hover:bg-blue-700 transition-bg'></div>
          <div className='h-4 w-4 bg-red-600  rounded-full -ml-1 hover:bg-red-400 transition-bg'></div>  
        </div>

        {/* mobile menu  */ }
             <button 
             className='md:hidden p-2' 
             onClick= {() =>{setIsMenuOpen(!isMenuOpen)}}
             >
                {
                    isMenuOpen ?  <HiX className="size-6" /> : <HiMenu className="size-6" />
                }
             </button>

            {/* nav links section */}
        <div className='hidden md:flex items-center gap-10'>
            {
            
            navLinks.map((link , index)=>{
                return (
                  <a key={index}
                 href={link.href}
                 onClick={() => setActiveLink(link.href)}
                 className={`text-sm font-medium relative after:absolute after:bottom-0  after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all 
                 ${activeLink === link.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'} `}
                 >{link.label}</a>
                )
               
            })
            
        }
            
        </div>


            <button className='hidden md:block my-5 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shodow-lg hove:shodow-blue-600'>
            <a href="#newslatter"> Get In touch</a>     
           </button>

      </div>


      { /* mobile menu items  */}
      {
        isMenuOpen && (
          
            <div className='md:hidden  bg-white  border-t border-gray-100 py-4'>
              <div className='container mx-auto px-4  space-y-3'>
                {navLinks.map((link , index) => {
                  return (
                      <a  
                      onClick={ () =>{
                        setActiveLink(link.href)
                        setIsMenuOpen(false)
                      }}
                      className={`block text-sm font-meduim py-2  ${activeLink === link.href ? "text-blue-600" : "text-gray-600 hover: text-gray-900"}`}  key={index} href={link.href}> {link.label}</a>
                  )
                })
                }
                <button className='w-full md:hidden my-5 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shodow-lg hove:shodow-blue-600'>
            <a href="#newslatter"> Get In touch</a>     
           </button>
              </div>
            </div>

          
    )
  }
    </motion.nav>
  ) 
}

export default Navbar

