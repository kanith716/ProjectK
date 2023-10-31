import React from 'react';
import Slider from "react-slick";  

function Discover() {

    var discover = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        centerPadding:"500px",

    };

  return (
    <div className='py-[15vh]'>
      <div className='container mx-auto'>
        <div>
                  <h2 className='text-4xl font-semibold px-5 pb-10'><span className='text-[var(--darkblue)]'>Discover more. </span>Good things are waiting for you</h2>
        </div>
        <Slider {...discover}>
                  <div className='px-5 '>
                      <div className='relative grid grids-col-12  grid-cols-2 gap-4 items-center bg-red-50 rounded-xl p-5'>
                          <div className='grid-col-6 flex flex-col justify-center'>
                              <div>
                                  <span className="block mb-2 text-sm text-slate-700 font-semibold">Digital gift cards</span>
                                  <h3 className='text-[var(--darkblue)] font-bold text-2xl'>Give the gift of Choise</h3>
                              </div>
                              <div className='pt-10'>
                                  <a href="#" className='inline-block px-8 py-3 rounded-xl text-[var(--darkblue)] bg-white font-semibold'>Show me all</a>
                              </div>
                          </div>
                          <div className='grid-col-6'>
                            <div>
                                <img src='/ciseco-img/1.png' className='sm:w-[80%] mx-auto'></img>
                            </div>
                          </div>
                    </div>
                      
                  </div>
                  <div className='px-5'>
                      <div className='relative grid grids-col-12  grid-cols-2 gap-4 items-center bg-blue-50 rounded-xl p-5'>
                          <div className='grid-col-6 flex flex-col justify-center'>
                              <div>
                                  <span className="block mb-2 text-sm text-slate-700 font-semibold">Digital gift cards</span>
                                  <h3 className='text-[var(--darkblue)] font-bold text-2xl'>Give the gift of Choise</h3>
                              </div>
                              <div className='pt-10'>
                                  <a href="#" className='inline-block px-8 py-3 rounded-xl text-[var(--darkblue)] bg-white font-semibold'>Show me all</a>
                              </div>
                          </div>
                          <div className='grid-col-6'>
                              <div>
                                  <img src='/ciseco-img/5.png' className='sm:w-[80%] mx-auto'></img>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='px-5'>
                      <div className='relative grid grids-col-12  grid-cols-2 gap-4 items-center bg-green-50 rounded-xl p-5'>
                          <div className='grid-col-6 flex flex-col justify-center'>
                              <div>
                                  <span className="block mb-2 text-sm text-slate-700 font-semibold">Digital gift cards</span>
                                  <h3 className='text-[var(--darkblue)] font-bold text-2xl'>Give the gift of Choise</h3>
                              </div>
                              <div className='pt-10'>
                                  <a href="#" className='inline-block px-8 py-3 rounded-xl text-[var(--darkblue)] bg-white font-semibold'>Show me all</a>
                              </div>
                          </div>
                          <div className='grid-col-6'>
                              <div>
                                  <img src='/ciseco-img/4.png' className='sm:w-[80%] mx-auto'></img>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='px-5'>
                      <div className='relative grid grids-col-12  grid-cols-2 gap-4 items-center bg-yellow-50 rounded-xl p-5'>
                          <div className='grid-col-6 flex flex-col justify-center'>
                              <div>
                                  <span className="block mb-2 text-sm text-slate-700 font-semibold">Digital gift cards</span>
                                  <h3 className='text-[var(--darkblue)] font-bold text-2xl'>Give the gift of Choise</h3>
                              </div>
                              <div className='pt-10'>
                                  <a href="#" className='inline-block px-8 py-3 rounded-xl text-[var(--darkblue)] bg-white font-semibold'>Show me all</a>
                              </div>
                          </div>
                          <div className='grid-col-6'>
                              <div>
                                  <img src='/ciseco-img/3.png' className='sm:w-[80%] mx-auto'></img>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='px-5'>
                      <div className='relative grid grids-col-12  grid-cols-2 gap-4 items-center bg-red-50 rounded-xl p-5'>
                          <div className='grid-col-6 flex flex-col justify-center'>
                              <div>
                                  <span className="block mb-2 text-sm text-slate-700 font-semibold">Digital gift cards</span>
                                  <h3 className='text-[var(--darkblue)] font-bold text-2xl'>Give the gift of Choise</h3>
                              </div>
                              <div className='pt-10'>
                                  <a href="#" className='inline-block px-8 py-3 rounded-xl text-[var(--darkblue)] bg-white font-semibold'>Show me all</a>
                              </div>
                          </div>
                          <div className='grid-col-6'>
                              <div>
                                  <img src='/ciseco-img/5.png' className='sm:w-[80%] mx-auto'></img>
                              </div>
                          </div>
                      </div>
                  </div>
        </Slider>
      </div>
    </div>
  )
}

export default Discover
