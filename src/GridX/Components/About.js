import React from 'react'
import Testimonials from './Testimonials';
import { BiHappyAlt } from "react-icons/bi";


function About() {
  return (
    <div>
      <div className='container  m-auto w-[90%] mx-auto sm:w-full mt-10'>
        <div className='items-stretch lg:flex   flex-col  sm:flex-row  sm:p-10'>
          <div className='lg:w-[45%] xl:w-[35%] self-center w-[100%] shadow-box-overlay relative p-5 '>
            <div className='flex-none  bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 h-[180px] w-[200px] sm:w-[340px] sm:h-[330px]  rounded-[30px] mx-auto overflow-hidden'>
              <a href='#' className='inline-block'>
                <img src='./Image/me2.png' className='object-fit' alt='logo' />
              </a>
            </div>
          </div>
         
          <div className=' self-end flex flex-col lg:w-[55%] xl:w-[65%] lg:ml-5 pt-5 lg:pt-0'>
            <div className={
             'flex justify-between items-center py-5 px-0'
            }>
              <img
                className='flex-none'
                alt='star'
                src='./Image/star-2.png' />
              <div className='flex-1 '>
                <h2 className='text-7xl w-7/10 text-white font-semibold  text-center mx-auto w-full md:w-5/6'> SELF SUMMARY</h2>

              </div>
              <img className='flex-none' src='./Image/star-2.png' />
            </div>
            <div className='relative '>
              <img alt='logo' src='./Image/icon2.png' className='w-[30px] h-[80px] absolute top-0 left-10 rounded-[30px] opacity-9 ' />
              <div className='shadow-box-overlay pb-10 pt-[70px]'>
                <div className=' pt-8 px-6 '>
                  <h2 className='text-4xl text-white font-semibold'>Welcome to My Portfolio</h2>
                  <p className='pt-2'>My name is Kanith. I'm a web developer passionate about creating user-friendly websites. Skilled in HTML, CSS, and JavaScript. Explore my exciting projects!</p>
                </div>
              </div>
           </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <div className='relative'>
            <div className='shadow-box-overlay p-10'>
              <h3 className='text-xl text-white font-semibold pb-4'>EXPERIENCE</h3>
              <div>
                <p className='text-[var(--color)] font-semibold pt-2'>2021 - 2022</p>
                <h4 className='text-white text-xl font-semibold'>Front End Developer</h4>
                <h6>Imperial Info Systems, Iyyappanthangal, Chennai, Tamil Nadu.</h6>
              </div>
              <div className='pt-5'>
                <p className='text-[var(--color)] font-semibold pt-2'>2022 - 2024</p>
                <h4 className='text-white text-xl font-semibold'>Associate Developer</h4>
                <h6>Xerago, Perungudi, Chennai, Tamil Nadu.</h6>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='shadow-box-overlay p-10'>
              <h3 className='text-xl text-white font-semibold '> EDUCATION</h3>
              <div className='pt-5'>
                <p className='text-[var(--color)] font-semibold pt-2'>2013 - 2016</p>
                <h4 className='text-white text-xl font-semibold'>Diploma in Mechanical Engineering</h4>
                <h6>Varadharajan Polytechnic College, Varisaipatti Village, Ariyalur – Thittagudi Road, Tamil Nadu.</h6>
              </div>
              <div className='pt-5'>
                <p className='text-[var(--color)] font-semibold pt-2'>2019 - 2022</p>
                <h4 className='text-white text-xl font-semibold'>Bachelor of Business Administration</h4>
                <h6>Annamalai University, Chidambaram, Tamil Nadu.</h6>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <Testimonials></Testimonials>
    </div>
  )
}

export default About
