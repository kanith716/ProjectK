import React from 'react';
import { useState } from 'react';
import '../Css/gridx.css';
import { GiHamburgerMenu } from "react-icons/gi";

function Header(subscribeHandle) {

    const [nav, setNave] = useState(false);
    

    function handleClick() {
        setNave(!nav)
    }

  return (
      <header className='flex items-center justify-between  container m-auto min-h-[90px] pb-[50px] pt-[20px]'>
          <div className={
            nav ? 'block absolute w-full top-0 left-0 right-0 h-screen bg-[var(--bg-color)]  md:none  text-center flex-col items-center flex ease-in duration-300 justify-center z-20':
            'top-[-100%] ease-in duration-200 right-0 absolute left-0'
          }>
              <ul className='block md:flex justify-between items-center'>
                  <li>
                      <a href='/'>Home</a>
                  </li>
                  <li>
                      <a href='/about'>About</a>
                  </li>
                  <li>
                      <a href='/works'>Works</a>
                  </li>
                  <li>
                      <a href='/contact'>Contact</a>
                  </li>
              </ul>
              <p className='text-white font-2xl bg-[var(--dark)] flex-col items-center  rounded-[20px] py-[10px] px-6 my-6 sm:hidden inline-block cursor-pointer'>Log In </p>
          </div>
          <div>
              <img src='./Image/logo.svg' alt='Logo' />
          </div>
          <div className='hidden md:block  '>
              <ul className='block md:flex justify-between items-center'>
                  <li>
                      <a className='text-lg' href='/'>Home</a>
                  </li>
                  <li>
                      <a className='text-lg' href='/about'>About</a>
                  </li>
                  <li>
                      <a className='text-lg' href='/works'>Works</a>
                  </li>
                  <li>
                      <a className='text-lg' href='/contact'>Contact</a>
                  </li>
            </ul>
              <p className='text-white font-2xl bg-[var(--dark)] rounded-[20px] py-[10px] px-6 hidden sm:hidden cursor-pointer'>Log In </p>
          </div>
          <div>
              <p onClick={subscribeHandle.onClick} className='hidden sm:block text-white font-2xl bg-[var(--dark)] rounded-[20px] py-[10px] px-6 cursor-pointer'>Log In </p>
          </div>
          <div>
              <p>Let's Talk</p>
          </div>
          <div className='sm:hidden z-10' onClick={handleClick}>
              <GiHamburgerMenu size={20} className='mr-4 cursor-pointer' />
          </div>
   </header>
  )
}

export default Header
