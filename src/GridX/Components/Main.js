import React from 'react';
import '../Css/gridx.css'
import PortfollioAbout from './PortfollioAbout';
import Services from './Services';
import Testimonials from './Testimonials';


function Main() {
  return (
      <main className=''>
       
        <PortfollioAbout></PortfollioAbout>
        <Services></Services>
        <Testimonials></Testimonials>
   
      </main>
  )
}

export default Main
