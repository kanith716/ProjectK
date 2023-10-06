import React from 'react';
import { AiOutlineCamera } from "react-icons/ai";
import { PiPencilCircleFill } from "react-icons/pi";
import { IoColorFilterOutline } from "react-icons/io5";
import { BsPhoneVibrate } from "react-icons/bs";

function Services() {
  return (
    <div>
          <div className='container m-auto w-[90%] sm:w-full'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  <div className='relative mt-5 pb-5 sm:pb-0 col-span-4 sm:col-span-2 lg:col-span-1'>
                      <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                      <div className='shadow-box-overlay  flex-row grid grid-rows-1 overflow-hidden py-4'>
                          <img src='./Image/gfonts.png' className='mx-auto' />
                      </div>
                      <div className='flex items-center self-center justify-between px-5 py-5'>
                          <div className='ps-5 pt-3'>
                              <p className='text-xs font-semibold'>Blog</p>
                              <h3 className='text-2xl text-white font-semibold'>GFonts</h3>
                          </div>
                          <div className='pr-5 sm:pr-0'>
                              <a href='#' className='opacity-60'>
                                  <img src='./Image/icon.svg'></img>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className='relative mt-5 pb-5 sm:pb-0 col-span-4 lg:col-span-2 order-last lg:order-none'>
                      <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                      <div className='shadow-box-overlay py-10 text-white flex-row grid grid-rows-1  items-center grid-cols-4 gap-1 overflow-hidden mt-5'>
                          <div className='mx-auto'>
                              <AiOutlineCamera size={40}></AiOutlineCamera>
                         </div>
                           <div className='mx-auto'>
                              <PiPencilCircleFill size={40}></PiPencilCircleFill>
                          </div>
                           <div className='mx-auto'>
                              <IoColorFilterOutline size={40}></IoColorFilterOutline>
                          </div>
                           <div className='mx-auto'>
                              <BsPhoneVibrate size={40}></BsPhoneVibrate>
                          </div>
                      </div>
                      <div className='flex items-center self-center justify-between px-5 mt-5 py-5'>
                          <div className='ps-5 pt-3'>
                              <p className='text-xs font-semibold'>SPECIALIZATION</p>
                              <h3 className='text-2xl text-white font-semibold'>Services Offering</h3>
                          </div>
                          <div className='pr-5 sm:pr-0'>
                              <a href='#' className='opacity-60'>
                                  <img src='./Image/icon.svg'></img>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className='relative mt-5 pb-5 sm:pb-0 col-span-4 sm:col-span-2 lg:col-span-1 '>
                      <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                      <div className='shadow-box-overlay  flex-row grid grid-rows-1 overflow-hidden py-4'>
                          <img src='./Image/gfonts.png' className='mx-auto' />
                      </div>
                      <div className='shadow-box-overlay h-5 w-5'>

                      </div>
                      <div className='flex items-center self-center justify-between px-5 py-5'>
                          <div className='ps-5 pt-3'>
                              <p className='text-xs font-semibold'>STAY WITH ME</p>
                              <h3 className='text-2xl text-white font-semibold'>Profiles</h3>
                          </div>
                          <div className='pr-5 sm:pr-0'>
                              <a href='#' className='opacity-60'>
                                  <img src='./Image/icon.svg'></img>
                              </a>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Services
