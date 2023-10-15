import React from 'react'

function Header() {
  return (
    <header>
          <div className='container mx-auto'>
              <div className='grid  grid-col-3 grid-cols-12 gap-3'>
                  <div className='col-span-3 p-10 bg-gray-400'></div>
                  <div className='col-span-6 bg-black p-10'></div>
                  <div className='col-span-3 bg-gray-400 p-10'></div>
                  <div></div>
            </div>
        </div>
    </header>
  )
}

export default Header
