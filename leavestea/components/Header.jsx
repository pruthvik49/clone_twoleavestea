import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <>
    <section className="bg-[url('/src/assets/firstbg.png')] bg-cover bg-center h-150 ">
        <Navbar/>
       <section className='h-[78%]'>
        <div id="top" className='flex flex-col justify-between items-center relative w-full h-full border border-black'>
            <h1 id='' className='text-5xl absolute top-50 matchatext'>
                Meet Your <br /> Matcha 
                
            </h1>
            <div className='absolute bottom-0 flex flex-col justify-center items-center px-4 text-center'>

            <p className='matchatext max-w-xl text-base  md:text-lg mx-auto my-4'>
              Whether your mornings are more grab-and-go or intentional and slow, we have matcha and matcha lattes for every ritual.
            </p>
            <button className='bg-[#26235F] text-white text-2xl rounded-3xl p-3 px-15'>Shop Now</button>
            </div>
        </div>
        <div id="cent"></div>
        <div id="bot"></div>

       </section>
    </section>
    
    </>
  )
}

export default Header