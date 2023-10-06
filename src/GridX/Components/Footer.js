import React from 'react'

function Footer() {
  return (
    <div className='pt-[100px] pb-[60px]' >
        <div className='container  m-auto w-[90%] mx-auto sm:w-full mt-10'>
            <div className='grid grid-rows-1 text-center gap-4'>
                  <div>
                      <a href='#' className='block'> <img src='./Image/logo.svg' className='mx-auto' alt='Logo' /></a>
                  </div>
                  <div>
                    <ul>
                          <li className='inline-block'>
                              <a href='/'>Home</a>
                          </li>
                          <li className='inline-block'>
                              <a href='/about'>About</a>
                          </li>
                          <li className='inline-block'>
                              <a href='/works'>Works</a>
                          </li>
                          <li className='inline-block'>
                              <a href='/contact'>Contact</a>
                          </li>
                    </ul>
                  </div>
                  <div>
                      <p class="text-gray">© All rights reserved by <span>WordPress River</span></p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
