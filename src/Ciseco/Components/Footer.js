import React from 'react';
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoPinterestAlt } from "react-icons/bi";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
   <footer className='pt-10'>
    <div className='container mx-auto'>
              <div className='grid grid-col-5 grid-cols-12 gap-4'>
                  <div className='col-span-3'>
                      <div>
                          <img src='./ciseco-img/logo.svg' />
                      </div>
                      <ul className='pl-0 pt-3'>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#' className='flex items-center'><BiLogoFacebookCircle className='mr-2 text-[#1877F2]'></BiLogoFacebookCircle><span>FaceBook</span></a>
                          </li>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#' className='flex items-center'><BiLogoInstagram className='text-[#FCAF45] mr-2 '></BiLogoInstagram><span>Instagram</span></a>
                          </li>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#' className='flex items-center'><BiLogoPinterestAlt className='text-[#E60023] mr-2'></BiLogoPinterestAlt><span>Pintersest</span></a>
                          </li> <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#' className='flex items-center'><FiYoutube className='text-[#FF0000] mr-2'></FiYoutube><span>Youtube</span></a>
                          </li>

                      </ul>
            </div>
                  <div className='col-span-3'>
                      <h3 className='font-semibold text-[16px] text-[var(--darkblue)]'>Explore</h3>
                      <ul className='pl-0 pt-3'>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Release Notes</a>
                          </li>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Upgrade Guide</a>
                          </li>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Browser Support</a>
                          </li> <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Security</a>
                          </li>

                      </ul>
                  </div>
                  <div className='col-span-2'>
                      <h3 className='font-semibold text-[16px] text-[var(--darkblue)]'>Getting Notes</h3>
                      <ul className='pl-0 pt-3'>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Release Notes</a>
                          </li>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Upgrade Guide</a>
                          </li>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Browser Support</a>
                          </li> <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Security</a>
                          </li>

                      </ul>
                  </div>
                  <div className='col-span-2'>
                      <h3 className='font-semibold text-[16px] text-[var(--darkblue)]'>Getting Notes</h3>
                      <ul className='pl-0 pt-3'>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Release Notes</a>
                          </li>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Upgrade Guide</a>
                          </li>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Browser Support</a>
                          </li> <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Security</a>
                          </li>

                      </ul>
                  </div>
                  <div className='col-span-2'>
                      <h3 className='font-semibold text-[16px] text-[var(--darkblue)]'>Getting Notes</h3>
                      <ul className='pl-0 pt-3'>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Release Notes</a>
                          </li>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Upgrade Guide</a>
                          </li>
                          <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Browser Support</a>
                          </li> <li className='text-md pb-2 pl-0 pt-2 text-[var(--lightdark)]'>
                              <a href='#'>Security</a>
                          </li>

                      </ul>
                  </div>
            
        </div>
    </div>
   </footer>
  )
}

export default Footer
