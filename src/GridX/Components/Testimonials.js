import React from 'react'

function Testimonials() {
    const expStartDate = new Date('2021-02-11T09:00:00');
    const expCurrentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = expCurrentDate - expStartDate;

    // Calculate milliseconds in a day, an hour, and a year
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const millisecondsInHour = 60 * 60 * 1000;
    const millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000; // Accounting for leap years

    // Calculate the total number of years
    const years = Math.floor(timeDifference / millisecondsInYear);

    // Calculate the remaining time difference in milliseconds after subtracting full years
    const remainingTimeDifferenceAfterYears = timeDifference - (years * millisecondsInYear);
    const totalDays = timeDifference / millisecondsInDay;
   
    // Calculate the total number of days
    const days = Math.floor(remainingTimeDifferenceAfterYears / millisecondsInDay);

    // Calculate the remaining time difference in milliseconds after subtracting full days
    const remainingTimeDifferenceAfterDays = remainingTimeDifferenceAfterYears - (days * millisecondsInDay);

    // Calculate the total number of hours
    const hours = Math.floor(remainingTimeDifferenceAfterDays / millisecondsInHour);
    const totalHours = timeDifference / millisecondsInHour; 
    console.log(totalHours.toFixed())


    // Calculate hours

   

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
                                 <h3 className='text-4xl font-semibold pb-3'>+{years}</h3>
                                  <p className='text-[--color] text-xs capitalize '> Experience in  <br/> Years</p>
                              </div>
                          </div>
                          <div className='inner-shadow mt-5 sm:mt-0 min-w-[170px] relative py-7 px-7 '>
                              <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                              <div className='shadow-box-overlay text-white text-center flex-row grid grid-rows-1 overflow-hidden py-4'>
                                  <h3 className='text-4xl font-semibold pb-3'>+{totalDays.toFixed()}</h3>
                                  <p className='text-[--color] text-xs capitalize'>Experience in  <br />Days</p>
                              </div>
                          </div>
                          <div className='inner-shadow mt-5 sm:mt-0 min-w-[170px] relative py-7 px-7 '>
                              <img alt='logo' src='./Image/bg1.png' className='w-full h-full absolute top-0 left-0 rounded-[30px] object-fit opacity-10 ' />
                              <div className='shadow-box-overlay text-white text-center flex-row grid grid-rows-1 overflow-hidden py-4'>
                                  <h3 className='text-4xl font-semibold pb-3'>+{totalHours.toFixed()    }</h3>
                                  <p className='text-[--color] text-xs capitalize'>Experience in  <br />Hours</p>
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
