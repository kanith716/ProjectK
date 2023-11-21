import React from 'react';
import { useEffect } from 'react';
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";



function ProductList() {

    useEffect(() => {
        var colorPicker = document.querySelectorAll(".color-picker");

        if (colorPicker) {
            colorPicker.forEach(element => {
                element.addEventListener("click", function (e) {
                    var parentColorPicker = element.parentElement;
                    var childrenColorPicker = parentColorPicker.children;
                    for (var i = 0; i < childrenColorPicker.length; i++) {
                        childrenColorPicker[i].classList.remove("border");
                    }
                    element.classList.add("border");
                    var colorPick = `bg-${element.getAttribute("class").split(" ").filter(ele => ele.includes("border-")).toString().split("-")[1]}-50`;
                    var grandParent = parentColorPicker.parentElement;
                    var curParent = grandParent.previousElementSibling;
                    var atrVal = grandParent.previousElementSibling.getAttribute("class")
                    curParent.setAttribute("class" , " ")
                    atrVal.split(" ").filter(ele => (!ele.includes("bg-") && ele != "")).map(ele => curParent.classList.add(ele))
                    curParent.classList.add(`${colorPick}`)
                })
            });
        }
    }, [ProductList]);
    
    return (
        <div className='py-[15vh]'>
            <div className='container mx-auto'>
                <h2 className='text-4xl font-semibold px-5 pb-10'><span className='text-[var(--darkblue)]'>New Arrivals.</span>REY backpacks & bags</h2>
                <div className='grid grid-cols-12 grid-col-4 gap-6'>
                    <div className='col-span-3'>
                        <div className='bg-violet-50  rounded-[25px]  relative'>
                            <img src='/ciseco-img/5-1.png'></img>
                            <div className='absolute flex items-center justify-center rounded-xl top-5  w-[30px] h-[30px] right-8 bg-white '>
                                <AiOutlineHeart className='text-[var(--darkblue)] text-xl'></AiOutlineHeart>
                            </div>

                        </div>
                        <div className='pt-5'>
                            <div className="flex space-x-1">
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border cursor-pointer border-violet-500" title="Violet">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-violet-400"></div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10  cursor-pointer  border-yellow-400" title="Yellow">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-yellow-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10  cursor-pointer border-orange-500" title="Violet">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-orange-400"></div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border-sky-400 cursor-pointer " title="Sky Blue">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-sky-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border-green-400 cursor-pointer " title="Green">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-green-400">
                                    </div>
                                </div></div>
                            <h3 className='text-[var(--darkblue)] text-lg font-bold'>Leather Gloves</h3>
                            <p className='text-md text-slate-500 dark:text-slate-400 mt-1 '>Perfect mint green</p>
                            <div className='flex items-center justify-between'>
                                <a href='#' className='mt-5 px-3 text-green-500 border-green-500 border font-bold rounded-lg border-2 p-1 inline-block'>$43</a>
                                <div className=' pt-5'>
                                    <p className='flex items-center text-md text-slate-500 dark:text-slate-400 '><AiFillStar className='text-yellow-500'></AiFillStar><span> 4.9 (98 reviews)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='bg-violet-50  rounded-[25px]  relative'>
                            <img src='/ciseco-img/5-1.png'></img>
                            <div className='absolute flex items-center justify-center rounded-xl top-5  w-[30px] h-[30px] right-8 bg-white '>
                                <AiOutlineHeart className='text-[var(--darkblue)] text-xl'></AiOutlineHeart>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className="flex space-x-1">
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border cursor-pointer border-violet-500" title="Violet">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-violet-400"></div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10  cursor-pointer  border-yellow-400" title="Yellow">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-yellow-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10  cursor-pointer  border-orange-400" title="Orange">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-orange-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border-sky-400 cursor-pointer " title="Sky Blue">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-sky-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border-green-400 cursor-pointer " title="Green">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-green-400">
                                    </div>
                                </div></div>
                            <h3 className='text-[var(--darkblue)] text-lg font-bold'>Leather Gloves</h3>
                            <p className='text-md text-slate-500 dark:text-slate-400 mt-1 '>Perfect mint green</p>
                            <div className='flex items-center justify-between'>
                                <a href='#' className='mt-5 px-3 text-green-500 border-green-500 border font-bold rounded-lg border-2 p-1 inline-block'>$43</a>
                                <div className=' pt-5'>
                                    <p className='flex items-center text-md text-slate-500 dark:text-slate-400 '><AiFillStar className='text-yellow-500'></AiFillStar><span> 4.9 (98 reviews)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='bg-violet-50  rounded-[25px]  relative'>
                            <img src='/ciseco-img/5-1.png'></img>
                            <div className='absolute flex items-center justify-center rounded-xl top-5  w-[30px] h-[30px] right-8 bg-white '>
                                <AiOutlineHeart className='text-[var(--darkblue)] text-xl'></AiOutlineHeart>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className="flex space-x-1">
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border cursor-pointer border-violet-500" title="Violet">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-violet-400"></div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10  cursor-pointer  border-yellow-400" title="Yellow">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-yellow-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10  cursor-pointer  border-orange-400" title="Orange">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-orange-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border-sky-400 cursor-pointer " title="Sky Blue">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-sky-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border-green-400 cursor-pointer " title="Green">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-green-400">
                                    </div>
                                </div></div>
                            <h3 className='text-[var(--darkblue)] text-lg font-bold'>Leather Gloves</h3>
                            <p className='text-md text-slate-500 dark:text-slate-400 mt-1 '>Perfect mint green</p>
                            <div className='flex items-center justify-between'>
                                <a href='#' className='mt-5 px-3 text-green-500 border-green-500 border font-bold rounded-lg border-2 p-1 inline-block'>$43</a>
                                <div className=' pt-5'>
                                    <p className='flex items-center text-md text-slate-500 dark:text-slate-400 '><AiFillStar className='text-yellow-500'></AiFillStar><span> 4.9 (98 reviews)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='bg-violet-50  rounded-[25px]  relative'>
                            <img src='/ciseco-img/5-1.png'></img>
                            <div className='absolute flex items-center justify-center rounded-xl top-5  w-[30px] h-[30px] right-8 bg-white '>
                                <AiOutlineHeart className='text-[var(--darkblue)] text-xl'></AiOutlineHeart>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div className="flex space-x-1">
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border cursor-pointer border-violet-500" title="Violet">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-violet-400"></div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10  cursor-pointer  border-yellow-400" title="Yellow">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-yellow-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10  cursor-pointer  border-orange-400" title="Orange">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-orange-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border-sky-400 cursor-pointer " title="Sky Blue">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-sky-400">
                                    </div>
                                </div>
                                <div className="relative w-6 h-6 color-picker rounded-full overflow-hidden z-10 border-green-400 cursor-pointer " title="Green">
                                    <div className="absolute inset-0.5 rounded-full z-0 bg-green-400">
                                    </div>
                                </div></div>
                            <h3 className='text-[var(--darkblue)] text-lg font-bold'>Leather Gloves</h3>
                            <p className='text-md text-slate-500 dark:text-slate-400 mt-1 '>Perfect mint green</p>
                            <div className='flex items-center justify-between'>
                                <a href='#' className='mt-5 px-3 text-green-500 border-green-500 border font-bold rounded-lg border-2 p-1 inline-block'>$43</a>
                                <div className=' pt-5'>
                                    <p className='flex items-center text-md text-slate-500 dark:text-slate-400 '><AiFillStar className='text-yellow-500'></AiFillStar><span> 4.9 (98 reviews)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductList
