import React from 'react'
import imgS from '../src/img.js'
import ham from '../src/assets/menu-line.png'
import shp from '../src/assets/shop.svg'
const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center m-3 border border-b rounded-2xl p-2 h-17 bg-white'>

      <img className='h-[70%] ' src={ham} alt="" />
      <img className='h-[80%] ' src={imgS[0]} alt="" />
      <img className='h-[60%]' src={shp} alt="" />
    </nav>
    </>
  )
}

export default Navbar