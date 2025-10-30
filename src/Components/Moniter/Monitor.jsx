import React from 'react'
import monitor from '../../assets/monitor-card.webp'
const Monitor = () => {
  return (
     <section className='max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 py-16 px-8 gap-8 '>
          <div>
             <div className='flex flex-col justify-center h-full'>
                <p className='text-green-500 mb-5 '>MONITOR</p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-5 '> Introducing best mobile <br /> carousals </h2>
                <p className='text-gray-500 mb-5'> Take control of your time and boost productivity with our intellgent schelduling system .Automate appointments , manage team availabitity , and deliver expentional coustomer experinecse through seamless clender management </p>
                  
                  <p><a  className='text-blue-500 cursor-pointer underline-offset-0 hover:underline-offset-4'>Explore scheldulaing features </a></p>
             </div>
          </div>

          <div className='mx-5 bg-gray-300/2'>
              <img src={monitor} alt=" stats web"  className=' w-full h-full roundes-sm'/>
          </div>
        </section>
  )
}

export default Monitor
