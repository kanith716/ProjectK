import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialPintarest, SlSocialSpotify } from "react-icons/sl";

function Navbar() {
  const [nav , setNave] = useState(false);

  function handleClick(){
    setNave(!nav)
  }

  return (
    <div className='w-full min-h-[50] flex justify-between items-center absolute z-10 text-white bg-gray-700/80 py-2'>
        <ul className='hidden sm:flex px-4 '>
        <li>
          <a href='' className=''>
            Home
          </a>
        </li>
        <li>
          <a href='#gallery' className=''>
            Gallery
          </a>
        </li>
        <li>
          <a href='#deals' className=''>
            Deals
          </a>
        </li>
        <li>
          <a href='#conatct' className=''>
            Conatct
          </a>
        </li>
        </ul>
        <div className='flex justify-between '>
          <SlSocialFacebook className='mx-4'/>
          <SlSocialInstagram className="mx-4" />
          <SlSocialSpotify className="mx-4" />
          <SlSocialPintarest className="mx-4"/>
        </div>
      <div className='sm:hidden z-10' onClick={handleClick}>
          <GiHamburgerMenu size={20} className='mr-4 cursor-pointer'/>
        </div>
      <div onClick={handleClick} className= {
        nav
        ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0  h-screen w-full bg-black/90 px-4 py-7 flex flex-col' 
        : 'absolute top-0 h-screen left-[-100%] ease-in duration-500' } >
          <ul className='w-full h-full text-center pt-12'>
        <li className='text-2xl py-6'>
          <a href='/' className=''>
            Home
          </a>
        </li>
        <li className='text-2xl py-6'>
          <a href='#gallery' className=''>
            Gallery
          </a>
        </li>
        <li className='text-2xl py-6'>
          <a href='#deals' className=''>
            Deals
          </a>
        </li>
        <li className='text-2xl py-6'>
          <a href='#conatct' className=''>
            Conatct
          </a>
        </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar
