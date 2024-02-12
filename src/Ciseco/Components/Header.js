import React from 'react';
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { PiShoppingCartLight, PiNotepadLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHelpCircle, BiLogOutCircle } from "react-icons/bi";

function Header() {
  return (
    <header className='border'>
      <div className='container mx-auto'>
        <div className='grid  grid-col-3 grid-cols-12 gap-x-3 bg-white items-center'>
          <div className='col-span-3  '>
            <div>
              <img src='./ciseco-img/logo.svg' />
            </div>
          </div>
          <div className='col-span-6 mx-auto'>
            <div>
              <ul className='nav-link'>
                <li className='align-text-bottom inline-block'>
                  <a className='font-semibold text-[16px] text-[var(--darkblue)]' href='./men'>Men</a>
                </li>
                <li className='align-text-bottom inline-block'>
                  <a className='font-semibold text-[16px] text-[var(--darkblue)]' href='./women'>Women</a>
                </li>
                <li className='align-text-bottom inline-block'>
                  <a className='font-semibold text-[16px] text-[var(--darkblue)]' href='./beauty'>Beauty</a>
                </li>
                <li className='align-text-bottom inline-block sports-link relative  group'>
                  <a className='font-semibold text-[16px] group-hover:block   text-[var(--darkblue)]' href='./sports'>Sports<RiArrowDropDownLine className='inline-block text-xl font-normal'></RiArrowDropDownLine></a>
                  <div className='drop-menu sports-drop group-hover:block hidden border  bg-white z-[99999] top-[58px] absolute w-[80vw] left-[50%] translate-x-[-50%]'>
                    <div className='grid grid-col-4 grid-cols-12 gap-4'>
                      <div className='col-span-3'>
                        <div>
                          <ul>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Badminton</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Bodybuilding</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Boxing</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Golf</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Shooting</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-span-3'>
                        <div>
                          <ul>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Badminton</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Bodybuilding</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Boxing</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Golf</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Shooting</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-span-3'>
                        <div>
                          <ul>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Badminton</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Bodybuilding</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Boxing</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Golf</a></li>
                            <li><a href='#' className='font-semibold text-[16px] text-[var(--darkblue)]'>Shooting</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className='col-span-3'>
                        <img src='./ciseco-img/department1.png' />
                      </div>
                    </div>

                  </div>
                </li>
                <li className='align-text-bottom inline-block'>
                  <a className='font-semibold text-[16px] text-[var(--darkblue)]' href='./fassion'>Fassion</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-span-3'>
            <div className='text-right'>
              <ul>
                <li className='align-text-bottom   inline-block py-5'>
                  <a href='#' className='text-lg text-[var(--darkblue)]'>
                    <BsSearch></BsSearch>
                  </a>
                </li>
                <li className='align-text-bottom   inline-block py-5 relative group group-hover:block'>
                  <a href='#' className='text-lg  text-[var(--darkblue)]'>
                    <CgProfile></CgProfile>
                  </a>
                  <div className='profile-menus group-hover:block hidden absolute border top-[60px] right-0 p-5 border md:w-[22vw] rounded-lg'>
                    <div className='flex items-center border-b pb-5'>
                      <div>
                        <img src='./ciseco-img/Image-8.png' className='rounded-full w-12' />
                      </div>
                      <div className='pl-2'>
                        <h3 className='text-[var(--darkblue)] text-left font-semibold'>Kanith</h3>
                        <p className='font-semibold'>Chennai,Web Developer</p>
                      </div>
                    </div>
                    <div className=' border-b pb-5'>
                      <a href='#' className='flex items-center text-[#334155]  py-3 font-semibold'><CiUser className='font-bold mr-3 text-2xl'></CiUser><span>My Account</span></a>
                      <a href='#' className='flex items-center text-[#334155]  py-3 font-semibold'><PiNotepadLight className='font-bold mr-3 text-2xl'></PiNotepadLight><span>My Order</span></a>
                      <a href='#' className='flex items-center text-[#334155]  pt-3 font-semibold'><AiOutlineHeart className='font-bold mr-3 text-2xl'></AiOutlineHeart><span>Wishlist</span></a>
                    </div>
                    <div className=''>
                      <a href='#' className='flex items-center text-[#334155]  py-3 font-semibold'><BiHelpCircle className='font-bold mr-3 text-2xl'></BiHelpCircle><span>Help</span></a>
                      <a href='#' className='flex items-center text-[#334155]  py-3 font-semibold'><BiLogOutCircle className='font-bold mr-3 text-2xl'></BiLogOutCircle><span>Log Out</span></a>
                    </div>
                  </div>
                </li>
                <li className='align-text-bottom   inline-block py-5'>
                  <a href='#' className='text-lg text-[var(--darkblue)]'>
                    <PiShoppingCartLight></PiShoppingCartLight>
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div></div>
        </div>
      </div>
    </header>
  )
}

export default Header
