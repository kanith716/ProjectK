import React from 'react'

function PortfollioAbout() {
    return (
        <div className='container  m-auto w-[90%] mx-auto sm:w-full mt-10'>
            <div className='flex flex-col lg:flex-row items-start justify-center '>
                <div className='items-center flex relative  flex-col sm:flex-row w-full xl:w-[50%] p-10 shadow-box-overlay'>
                    <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                    <div className='flex-none bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 w-[224px] h-[224px] rounded-s-[30px] rounded-b-[30px] rounded-es-sm overflow-hidden'>
                        <a href='#' className='inline-block'>
                            <img src='./Image/me.png' className='object-fit' alt='logo' />
                        </a>
                    </div>
                    <div className='px-8 self-center'>
                        <h4 className='text-md font-semibold pb-1'>A WEB DESIGNER</h4>
                        <h1 className='text-white pb-3  text-4xl font-semibold'>Kanithkar</h1>
                        <p>I am a Web Designer based in san francisco.</p>
                        <a href='#' className='items-end flex justify-end mr-[-20px] cursor-pointer z-[2] relative opacity-60'>
                            <img src='./Image/icon.svg' className='' />
                        </a>
                    </div>
                </div>
                <div className=' w-full lg:w-[50%]  lg:mx-5 mt-5 lg:mt-0'>
                    <div className='overflow-hidden relative'>
                        <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                        <div className=' shadow-box-overlay flex-row grid grid-rows-1  whitespace-nowrap py-4 '>
                            <p className='text-xs px-5'>LATEST WORK AND  <span className='text-white font-semibold'>FEATURED</span> LATEST WORK AND  <span className='text-white font-semibold'>FEATURED</span> LATEST WORK AND  <span className='text-white font-semibold'>FEATURED</span> LATEST WORK AND  <span className='text-white font-semibold'>FEATURED</span></p>
                        </div>
                    </div>
                    <div className='mt-5 md:mt-0 sm:grid sm:grid-cols-2 sm:gap-5'>
                        <div className='relative mt-5'>
                            <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                            <div className='shadow-box-overlay flex-row grid grid-rows-1  overflow-hidden py-4'>
                                <img src='./Image/sign.png' className='mx-auto' />
                                <div className='flex items-center self-center justify-between'>
                                    <div className='ps-5 pt-7'>
                                        <p className='text-xs font-semibold'>MORE ABOUT ME</p>
                                        <h3 className='text-2xl text-white font-semibold'>Credentials</h3>
                                    </div>
                                    <div className='pr-5 sm:pr-0'>
                                        <a href='#' className='opacity-60'>
                                            <img src='./Image/icon.svg'></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative mt-5 pb-5 sm:pb-0'>
                            <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                            <div className='shadow-box-overlay  flex-row grid grid-rows-1 overflow-hidden py-4'>
                                <img src='./Image/my-works.png' className='mx-auto' />
                            </div>
                            <div className='flex items-center self-center justify-between'>
                                <div className='ps-5 pt-3'>
                                    <p className='text-xs font-semibold'>SHOWCASE</p>
                                    <h3 className='text-2xl text-white font-semibold'>Projects</h3>
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
        </div>
       
    )
}

export default PortfollioAbout
