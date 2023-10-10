import React from 'react'
import PortfollioAbout from './PortfollioAbout';
import '../Css/gridx.css';
import { useState, useEffect } from 'react';
import { BiHappyAlt } from "react-icons/bi";

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

    const month = curDeptMonth[(currentDate.getMonth() - 1)];


    //username check in seassion storage 
    const useName = sessionStorage.getItem("name");
    return (
        <div className='bg-[var(--bg-color)] pb-10'>

            <div className='container  m-auto w-[90%] mx-auto sm:w-full mt-10'>
                <div className='items-center lg:flex   flex-col  sm:flex-row  sm:p-10'>
                    <div className='lg:w-[45%] xl:w-[35%] self-center w-[100%] shadow-box-overlay relative p-5 '>
                        <div className='flex-none  bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 h-[180px] w-[200px] sm:w-[340px] sm:h-[330px]  rounded-[30px] mx-auto overflow-hidden'>
                            <a href='#' className='inline-block'>
                                <img src='./Image/me2.png' className='object-fit' alt='logo' />
                            </a>
                        </div>
                    </div>
                    <div className='relative  lg:w-[55%] xl:w-[65%] lg:ml-5 pt-5 lg:pt-0'>
                        <div className={
                            useName ? 'flex justify-between items-center py-5 px-0': 'hidden'
                        }>
                            <img
                                className='flex-none'
                                alt='star'
                                src='./Image/star-2.png' />
                            <div className='flex-1 '>
                                <h2 className='text-2xl w-7/10 text-white font-semibold  text-center mx-auto w-full md:w-5/6'><span className='text-[#efff00]'>{useName} <BiHappyAlt className="text-2xl inline-block text-[#00ff08] "></BiHappyAlt></span>, it's time to dive into My Project. We're in for some coding fun!</h2>

                            </div>
                            <img className='flex-none' src='./Image/star-2.png' />
                        </div>
                        <div className='relative'>
                            <div className='shadow-box-overlay pt-8 px-6 sm:w-[80%]'>
                                <h2 className='text-4xl text-white font-semibold'>Welcome to My Portfolio</h2>
                                <p className='pt-2'>My name is Kanith. I'm a web developer passionate about creating user-friendly websites. Skilled in HTML, CSS, and JavaScript. Explore my exciting projects!</p>
                            </div>
                            <div className='sm:flex items-end justify-between px-5 pb-8'>
                                <div className='sm:w-[80%]'>
                                    <p className='text-2xl text-white font-semibold  pb-1 pt-10'>Here's a fun quote to brighten your day:</p>


                                    {
                                        quate && (<h3 className=' text-lg text-[var(--color)]' > {quate.quote}    </h3>)

                                    }


                                </div>

                                <div className='sm:float-right'>
                                    <p className='text-xl text-white font-semibold  pb-1 pt-10'>Date</p>
                                    <p>{`${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Popup
