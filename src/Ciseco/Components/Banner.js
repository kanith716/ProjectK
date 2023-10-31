import React from 'react';

import Slider from "react-slick";   

function Banner() {
    var homeBanner = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        
    };
    
  return (
      <div className='relative'>
    <div className='container mx-auto '>
          <div className='absolute inset-0 bg-[#E3FFE6]'>
              <img src='/ciseco-img/Moon.d5aa06ae.svg'></img>
          </div>
          <Slider {...homeBanner}>
              <div className='relative h-[90vh]'>
                  <div className='grid grid-cols-2 grids-col-12 gap-4 items-center'>
                    <div className='grid-col-6'>
                          <p className='text-[var(--darkblue)] text-xl font-semibold mb-5'>In this season, find the best</p>
                          <h2 className='text-[var(--darkblue)] text-6xl font-bold mb-5'>Exclusive collection for everyone</h2>
                          <a className='text-[var(--darkblue)] bg-[var(--darkblue)] mb-5 text-white text-xl px-5 py-5 inline-block rounded-xl' href='#'>Explore Now</a>
                    </div>
                    <div className='grid-col-6 '>
                          <img className='' src='/ciseco-img/hero-right-2.png'/>
                    </div>
                  </div>
              </div>
             
              <div className='relative h-[90vh]'>
                  <div className='grid grid-cols-2 grids-col-12 gap-4 items-center'>
                      <div className='grid-col-6'>
                          <p className='text-[var(--darkblue)] text-xl font-semibold mb-5'>In this season, find the best</p>
                          <h2 className='text-[var(--darkblue)] text-6xl font-bold mb-5'>Exclusive collection for everyone</h2>
                          <a className='text-[var(--darkblue)] bg-[var(--darkblue)] mb-5 text-white text-xl px-5 py-5 inline-block rounded-xl' href='#'>Explore Now</a>
                      </div>
                      <div className='grid-col-6 '>
                          <img className='' src='/ciseco-img/hero-right-3.png' />
                      </div>
                  </div>
              </div>
          </Slider>  
    </div>
      </div>
  )
}

export default Banner
