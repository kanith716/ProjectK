import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Main from "./GridX/Components/Main";
import HookEffect from "./components/UseEffect"
import Popup from "./GridX/Components/Popup";
import { useEffect, useState } from "react";
import './GridX/Css/gridx.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
import Header from './GridX/Components/Header'
import Footer from './GridX/Components/Footer'
import { BiHappyAlt } from "react-icons/bi";
import { SlMagicWand } from "react-icons/sl";




function App() {
  const [subscribe, subscribed] = useState(false);
  const [popClose, popOpen] = useState(false);
  const [formDate,setFormData] = useState({
    name:'',
    email:'',
    feedback:''
  })

  setTimeout(()=>{
    const allTag = document.querySelectorAll("a");
   
    allTag.forEach(element => {
      element.addEventListener("click", function (e) {
        subscribeHandle(e);
      })
    });
  },300)
 
  function subscribeHandle(e){
    
    var userNameStore = sessionStorage.getItem("name");
    var userEmailStore = sessionStorage.getItem("email")
    if (userEmailStore || userNameStore){
      subscribed(true)
    }else{
      e.preventDefault();
      popOpen(!popClose);
    }
  }
  

  //form input onchange funtion
  const inputChange = (e) =>{
    const { name, value } = e.target;
   setFormData({
    ...formDate,
    [name]:value
   })
  }

  //form submit function 
  const submitHandle = (e) =>{
    e.preventDefault();
    const {name, email} =formDate;
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    popOpen(!popClose);
  }
  const notIntrest = () =>{
    alert();
    sessionStorage.setItem('notIntrest', "Not Intrest");
    
    popOpen(!popClose);
  }


  //loading time user login check 
  useEffect(()=>{
    var userNameStore = sessionStorage.getItem("name");
    var userEmailStore = sessionStorage.getItem("email");
    var userIntrest = sessionStorage.getItem("notIntrest");
    if (userEmailStore || userNameStore || userIntrest) {
      subscribed(true)
    }
  }, [Popup])


  return (
    <div className="bg-[var(--bg-color)] pb-10">
      <Header onClick={subscribeHandle} subscribeStatus={subscribe}></Header>
    {
      subscribe ?  (<Main></Main >) : (<Popup></Popup>)
    }
      <div className={
        popClose ? 'fixed top-0 left-0 w-full h-full bg-[#242424] z-50':'hidden'
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
            <AiOutlineCloseCircle className="cursor-pointer relative z-10" onClick={ subscribeHandle}></AiOutlineCloseCircle>
          </div>
        </div>

      </div>
      
    <Footer></Footer>
    </div>
   
  );
}

export default App;
