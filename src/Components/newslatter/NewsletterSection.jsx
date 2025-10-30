import React from 'react'

const NewsletterSection = () => {
  return (
    <section className='max-w-7xl mx-auto mt-10  bg-linear-120 from-blue-600 to-blue-800 rounded-lg  py-10 px-16  md:py-20'>
     <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div>
            <h2 className='text-white text-2xl md:text-3xl mb-2 '>Subscribe Newsletter</h2>
            <p className='text-white'> Best cooks and best delivery guys all at your services . Hot tasty food</p>
        </div>

        <div className='flex justify-start  md:justify-end items-center  rounded-full mt-5 md:mt-0'>
            <input type="email" className='w-1/2 h-[50px] bg-white  rounded-l-lg pl-2' placeholder='Enter you email' />
            <button className='cursor-pointer rounded-r-lg bg-green-500 text-white hover:bg-green-700 hover:scale-105 transition-all duration-300 h-[50px] px-3 '>
                Discover
            </button>
        </div>
     </div>
    </section>
  )
}

export default NewsletterSection
