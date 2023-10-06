import React from 'react'

function Testimonials() {
  return (
    <div>
        <div className='container  m-auto w-[90%] mx-auto mt-5 sm:w-full'>
              <div className='grid grid-cols-12 gap-4 '>
                  <div className='col-span-12 lg:col-span-6 relative shadow-box-overlay py-5 px-5 '>
                      <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                      <div className='sm:flex place-content-evenly uppercase items-center'>
                          <div className='inner-shadow  sm:mt-0 min-w-[170px] relative py-7 px-7 '>
                              <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                              <div className='shadow-box-overlay text-white text-center  flex-row grid grid-rows-1 overflow-hidden py-4'>
                                 <h3 className='text-4xl font-semibold pb-3'>07</h3>
                                  <p className='text-[--color] text-xs'>Years <br />Experience</p>
                              </div>
                          </div>
                          <div className='inner-shadow mt-5 sm:mt-0 min-w-[170px] relative py-7 px-7 '>
                              <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                              <div className='shadow-box-overlay text-white text-center flex-row grid grid-rows-1 overflow-hidden py-4'>
                                  <h3 className='text-4xl font-semibold pb-3'>+125</h3>
                                  <p className='text-[--color] text-xs'>CLIENTS  <br />WORLDWIDE</p>
                              </div>
                          </div>
                          <div className='inner-shadow mt-5 sm:mt-0 min-w-[170px] relative py-7 px-7 '>
                              <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                              <div className='shadow-box-overlay text-white text-center flex-row grid grid-rows-1 overflow-hidden py-4'>
                                  <h3 className='text-4xl font-semibold pb-3'>+213</h3>
                                  <p className='text-[--color] text-xs'>Total  <br />Projects</p>
                              </div>
                          </div>
                    </div>
                  </div>
                  <div className='col-span-12 lg:col-span-6 relative shadow-box-overlay'>
                      <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                      <img alt='logo' src='./Image/icon2.png' className='w-[30px] h-[80px] absolute top-0 left-10 rounded-[30px] opacity-9 ' />
                      <div className='flex justify-between pt-[100px] pb-[50px] px-10 items-end'>
                          <div>
                              <h2 className='text-[44px] leading-10 text-white font-semibold'>Let`s<br />Work <span className='inline-block pt-2 text-blue-600/100'>  Together</span></h2>
                          </div>
                          <div>
                              <a href='#' className='items-end flex justify-end mr-[-20px] cursor-pointer z-[2] relative opacity-60'>
                                  <img src='./Image/icon.svg' className='' />
                              </a>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
