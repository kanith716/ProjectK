import React from 'react'
import PortfollioAbout from './PortfollioAbout';
import '../Css/gridx.css';
import { useState, useEffect } from 'react';

function Popup() {

    const [quate, getQuate] = useState();

    // Function to collect Random Quate
    const getApiData = async () => {
        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        ).then((response) => response.json());
        getQuate(response);
        
    };

    useEffect(() => {
        getApiData();
    }, []);


    var currentDate = new Date();
    const curDeptMonth = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const month = curDeptMonth[(currentDate.getMonth()-1)]
  return (
      <div className='bg-[var(--bg-color)] pb-10'>

          <div className='container  m-auto w-[90%] mx-auto sm:w-full mt-10'>
              <div className='items-center flex   flex-col  sm:flex-row  p-10'>
                  <div className='w-[35%] shadow-box-overlay relative p-5 '>
                      <div className='flex-none  bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 w-[340px] h-[330px]  rounded-[30px] mx-auto overflow-hidden'>
                          <a href='#' className='inline-block'>
                              <img src='./Image/me2.png' className='object-fit' alt='logo' />
                          </a>
                      </div>
                  </div>
                <div className='relative  w-[65%] ml-5'>
                      <div className='shadow-box-overlay pt-8 px-6 w-[80%]'>
                          <h2 className='text-4xl text-white font-semibold'>Welcome to My Portfolio</h2>
                          <p className='pt-2'>My name is Kanith. I'm a web developer passionate about creating user-friendly websites. Skilled in HTML, CSS, and JavaScript. Explore my exciting projects!</p>
                    </div>
                      <div className='flex items-end justify-between px-5 pb-8'>
                          <div className='w-[80%]'>
                              <p className='text-2xl text-white font-semibold  pb-1 pt-10'>Here's a fun quote to brighten your day:</p>
                            

                                  {
                                      quate && (<h3 className=' text-lg text-[var(--color)]' > {quate.quote}    </h3>)
                                     
                                  }

                                
                          </div>

                          <div className='float-right'>
                              <p className='text-xl text-white font-semibold  pb-1 pt-10'>Date</p>
                              <p>{`${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`}</p>
                          </div>
                      </div>
                  </div>
              </div>
         </div>

    </div>
  )
}

export default Popup
