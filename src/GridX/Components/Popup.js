import React from 'react'
import PortfollioAbout from './PortfollioAbout';
import '../Css/gridx.css';
import { useState, useEffect } from 'react';
import { BiHappyAlt } from "react-icons/bi";
import { SlMagicWand } from "react-icons/sl";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Popup(props) {

    const [quate, getQuate] = useState();
    const [formDate, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    })

    // Function to collect Random Quate
    const getApiData = async () => {
        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        ).then((response) => response.json());
        getQuate(response);

    };

    const notIntrest = () => {
        sessionStorage.setItem('notIntrest', "Not Intrest");
        props.popOpenStatus(!props.popCloseStatus);
    }

    //form input onchange funtion
    const inputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formDate,
            [name]: value
        })
    }

    //form submit function 
    const submitHandle = (e) => {
        e.preventDefault();
        const { name, email } = formDate;
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        props.popOpenStatus(!props.popCloseStatus);
    }


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
            {/* Pop up content start  */}
            <div className={
                props.popCloseStatus ? 'fixed top-0 left-0 w-full h-full bg-[#242424] z-50' : 'hidden'
            }>
                <div className="absolute top-[50%] left-[50%] py-10  w-[90%] md:w-[50%]  h-full translate-y-[-50%] translate-x-[-50%]  bg-[#76747400]">
                    <div className="  w-[100%] mx-auto h-full relative pt-5">
                        <div className="text-white  shadow-box-overlay text-xl font-semibold">

                            <form onSubmit={submitHandle} className="p-5 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-40 w-full">
                                <h2 className="text-center text-4xl pb-2"> Welcome to My Portfolio!</h2>

                                <p className="pb-5 text-center text-sm text-[var(--color)]"><BiHappyAlt className="text-xl inline-block text-[#4dffa5] mr-2"></BiHappyAlt>Discover, Enjoy, and Connect with My Work!<SlMagicWand className="text-xl inline-block text-[#d22af1]"></SlMagicWand></p>
                                <div className='inner-shadow   relative'>
                                    <div className='shadow-box-overlay '>
                                        <input placeholder="Enter Your Name*" name="name" onChange={inputChange} value={formDate.name} type="text" className="focus:border-none focus:outline-none bg-transparent relative z-50 w-full text-[15px] py-2 px-5" />
                                    </div>
                                </div>
                                <div className='inner-shadow   relative mt-8'>
                                    <div className='shadow-box-overlay '>
                                        <input placeholder="Enter Your Mail*" name="email" onChange={inputChange} value={formDate.email} type="text" className="focus:border-none focus:outline-none bg-transparent relative z-50 w-full text-[15px] py-2 px-5" />
                                    </div>
                                </div>
                                {/* <div className='inner-shadow   relative mt-8'>
                  <div className='shadow-box-overlay '>
                    <input placeholder="FeedBack*" type="text" name="feedback"  onChange={inputChange} value={formDate.name} className="focus:border-none focus:outline-none bg-transparent relative z-50 w-full text-[15px] py-2 px-5" />
                  </div>
                </div> */}

                                <div className='inner-shadow flex justify-center mx-auto relative mt-8'>
                                    <div className=' inline-block grow   ease-out duration-300 '>
                                        <input type="submit" className="hover:bg-[#fff] hover:text-[var(--color)] shadow-box-overlay bg-transparent relative z-50 w-full text-lg py-2 px-10 text-white font-2xl  rounded-[20px]   cursor-pointer inline-block" />
                                    </div>
                                </div>
                                <p className="pt-10 md:w-[80%]   text-2xl mx-auto text-center">Not interested? No worries! There's a "Not Interested" option too.<BiHappyAlt className="text-2xl inline-block text-[#ffef17] mr-2"></BiHappyAlt></p>
                                <button type="button" className="shadow-box-overlay bg-transparent relative z-50 w-full text-lg  px-10 text-white font-2xl  rounded-[20px] border-none py-2 my-5  cursor-pointer inline-block" onClick={notIntrest}>Not Interested</button>
                            </form>
                        </div>
                    </div>
                    <div className="absolute right-3 text-3xl text-white top-[50px] close-pop ">
                        <AiOutlineCloseCircle className="cursor-pointer relative z-10" onClick={props.subscribeHandle}></AiOutlineCloseCircle>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Popup
