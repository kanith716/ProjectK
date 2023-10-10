import React from 'react';
import { BiLogoReact } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoBootstrap } from "react-icons/bi";
import { BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import { DiDrupal } from "react-icons/di";

function Services() {
  return (
    <div>
          <div className='container m-auto w-[90%] sm:w-full'>
              <div className='grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  <div className='relative mt-5 pb-5 sm:pb-0 col-span-4 sm:col-span-2 lg:col-span-1'>
                      <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                      <div className='shadow-box-overlay  flex-row grid grid-rows-1 overflow-hidden py-4'>
                          <img src='./Image/WEBSITE-LOGO.png' className='mx-auto' />
                      </div>
                      <div className='flex items-center self-center justify-between px-5 pt-5'>
                          <div className='ps-5 pt-3'>
                              <h3 className='text-2xl text-white font-semibold'>Xerago</h3>
                              <p className='text-xs font-semibold pt-1'>Shaping the future through innovation and dedication</p>
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
                      <div className='shadow-box-overlay py-5 text-white flex-row grid grid-rows-1  items-center grid-cols-4 gap-1 overflow-hidden mt-5'>
                          <div className='mx-auto text-center'>
                              <BiLogoReact className='text-blue-500' size={40}></BiLogoReact>
                              <p>React</p>
                         </div>
                           <div className='mx-auto text-center'>
                              <TbBrandJavascript className='text-yellow-500 mx-auto' size={40}></TbBrandJavascript>
                              <p>JavaScript</p>
                          </div>
                           <div className='mx-auto text-center'>
                              <FaNodeJs className='text-green-500 mx-auto' size={40}></FaNodeJs>
                              <p>NodeJs</p>
                          </div>
                           <div className='mx-auto text-center'>
                              <BiLogoTailwindCss className=' text-blue-500 mx-auto' size={40}></BiLogoTailwindCss>
                              <p>Tailwind</p>
                          </div>
                      </div>
                      <div className='shadow-box-overlay  py-5 text-white flex-row grid grid-rows-1  items-center grid-cols-4 gap-1 overflow-hidden mt-5'>
                          <div className='mx-auto text-center'>
                              <BsFiletypeHtml className='text-orange-500 mx-auto' size={40}></BsFiletypeHtml>
                              <p>HTML</p>
                          </div>
                          <div className='mx-auto text-center'>
                              <BsFiletypeCss className='text-blue-500 mx-auto' size={40}></BsFiletypeCss>
                              <p>CSS</p>
                          </div>
                          <div className='mx-auto text-center'>
                              <DiDrupal className='text-purple-500 mx-auto' size={40}></DiDrupal>
                              <p>Drupal</p>
                          </div>
                          <div className='mx-auto text-center'>
                              <BiLogoBootstrap className='text-indigo-500 mx-auto' size={40}></BiLogoBootstrap>
                              <p>Bootstrap</p>
                          </div>
                      </div>
                     
                  </div>
                  <div className='relative mt-5 pb-5 sm:pb-0 col-span-4 sm:col-span-2 lg:col-span-1 '>
                      <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                      <div className='shadow-box-overlay  flex-row grid grid-rows-1 overflow-hidden '>
                          <img src='./Image/logo1.png ' className='mx-auto w-3/6' />
                      </div>
                    
                      <div className='flex items-center self-center justify-between px-5 '>
                          <div className='ps-5 pt-3 pb-5'>
                              <h3 className='text-2xl text-white font-semibold'>Imperial</h3>
                              <p className='text-xs font-semibold'>Imperial brought high happiness and exploration to my life.</p>
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
