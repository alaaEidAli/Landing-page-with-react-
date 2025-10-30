import React from 'react'
import statsWeb from '../../assets/stats.Webp';

const Schedule = () => {
  return (
    <section className='max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 py-16 px-8 gap-8 '>
      <div className='mx-5 bg-gray-300/2'>
          <img src={statsWeb} alt=" stats web"  className=' w-full h-full roundes-sm'/>
      </div>
      <div>
         <div className='flex flex-col justify-center h-full'>
            <p className='text-amber-400 mb-5 '>SCHEDULE</p>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-5 '>Streamline Your Business <br /> With Smart Scheduling Solutions </h2>
            <p className='text-gray-500 mb-5'> Take control of your time and boost productivity with our intellgent schelduling system .Automate appointments , manage team availabitity , and deliver expentional coustomer experinecse through seamless clender management </p>
              
              <p><a  className='text-blue-500 cursor-pointer underline-offset-0 hover:underline-offset-4'>Explore scheldulaing features </a></p>
         </div>
      </div>
    </section>
  )
}

export default Schedule
