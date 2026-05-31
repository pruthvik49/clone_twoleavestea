import React from 'react'
import imgS from '../src/img.js'
import ham from '../src/assets/menu-line.png'
import shp from '../src/assets/shop.svg'
const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between items-center m-3 border border-b rounded-2xl p-3 h-20 '>

      <img className='h-[80%] ' src={ham} alt="" />
      <img className='h-[80%] ' src={imgS[0]} alt="" />
      <img className='h-[80%]' src={shp} alt="" />
    </nav>
    </>
  )
}

export default Navbar