import Main from "./GridX/Components/Main";
import HookEffect from "./components/UseEffect"
import Popup from "./GridX/Components/Popup";
import { useEffect, useState } from "react";
// import './GridX/Css/gridx.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import Header from './GridX/Components/Header';
import About from './GridX/Components/About';
import Footer from './GridX/Components/Footer';
import { BiHappyAlt } from "react-icons/bi";
import { SlMagicWand } from "react-icons/sl";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./GridX/Components/404";
import axios from 'axios';
import CisecoApp from "./Ciseco/CisecoApp";

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5000'); // Replace with your server URL
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
fetchData();




function App() {
  const [subscribe, subscribed] = useState(false);
  const [popClose, popOpen] = useState(false);


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
    var notIntrest = sessionStorage.getItem("notIntrest")
    if (userEmailStore || userNameStore || notIntrest){
      subscribed(true)
    }else{
      e.preventDefault();
      popOpen(!popClose);
    }
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
    // router 
    <main>
      <CisecoApp></CisecoApp>
      <div className="bg-[var(--bg-color)] pb-10 hidden">
        
        <Header onClick={subscribeHandle} subscribeStatus={subscribe}></Header>
        <Routes>
          {/* <Route path="/" element={subscribe ? (<Main></Main >) : (<Popup></Popup>)} /> */}
          <Route path="/" element={

            subscribe ? (<Main></Main >) : (<Popup subscribeHandle={subscribeHandle} popCloseStatus={popClose} popOpenStatus={popOpen}></Popup>)

          } />
          <Route path="/about" element={<About></About>} />
          <Route path="*" element={<ErrorPage></ErrorPage>} />
        </Routes>




        <Footer></Footer>
      </div>
    </main>
   
   
  );
}

export default App;
