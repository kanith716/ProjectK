import React from 'react';
import { AiFillFire, AiOutlineClockCircle } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"

function TopBar() {
  return (
      <div className='flex justify-between item-center p-3'>
        <div className='flex items-center'>
              <AiFillFire size={30} className='text-[var(--primary-dark)]'/>
              <h1 className='font-bold text-xl'>Fire Fox</h1>
        </div>
          <div className='flex items-center'>
              <div className='hidden md:flex items-center px-6 '>
                  <AiOutlineClockCircle className='mr-2 text-[var(--primary-dark)]'/>
                  <p>9am - 10am</p>
              </div>
              <div className='hidden md:flex items-center px-6 '>
                  <BiPhoneCall className='mr-2 text-[var(--primary-dark)]'/>
                  <p>000-444-8888</p>
              </div>
         </div>
          <button>Get a Free Quote</button>
    </div>
  )
}

export default TopBar
