import React from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom"
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Info from "./Info";


export default function Home() {
  const navigate = useNavigate();


  const handleDonateClick = ()=> {
    navigate("/donate")
  }
  const handleSupportClick = ()=>{
    navigate("/supportus")
  }
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img className="w-full" src="\images\homeimg.svg" alt="" />
        <h2 className="absolute text-[98px] font-[800] font-Poppins-Medium text-[#0d0f13] top-1/4 left-1/4 ml-[-280px] mt-[-70px]">Aahaar</h2>
        <h3 className="absolute text-[30px] font-[25px] font-Poppins-Medium text-[#0d0f13] top-1/4 left-1/4 ml-[-280px] mt-[44px]">an Uphaar to all</h3>
        <h4 className="absolute w-[350px] leading-[1.5rem] text-[18px] font-bold font-Poppins-Medium text-[#191d25] top-1/4 left-1/4 ml-[-275px] mt-[120px]">Join Aahaar: A platform that connects surplus food donors with those in need. Help reduce food waste and hunger in your community."</h4>
        <div className="z-40 mt-[-540px] ml-[900px] absolute bottom-5 bg-black opacity-75 h-[540px] w-[520px]">
          <h3 className="text-[#F0FDF4] font-[600] text-[70px] w-12 p-[40px]">Elevate Lives, Unite Hearts: Your Gateway to Positive Change</h3>
      </div>
      <div className="z-40 mt-[-674.5px] ml-[900px] absolute bottom-5 bg-black opacity-75 h-[135px] w-[15px]">
      </div>
      <div className="z-40 mt-[-674.5px] ml-[1405px] absolute bottom-5 bg-black opacity-75 h-[135px] w-[15px]">
      </div>
        <div className="">
          <button onClick={handleDonateClick} className="absolute top-1/4 left-1/4  flex w-[290px] h-[45px] p-[16px] justify-center items-center gap-[8px] flex-shrink-0 rounded-md bg-[#185013] mt-[320px] shadow-md ml-[-275px] text-[#F0FDF4] font-[500] not-italic text-[18px] outline outline-[#0d0f13] outline-2 font-Poppins-Medium">
            Donate Now<img src="\images\right.svg" alt="" />
          </button>
          <button onClick={handleSupportClick} className="absolute top-1/4 left-1/4 flex w-[290px] h-[45px] ml-[30px] p-[16px] justify-center items-center gap-[8px] flex-shrink-0 rounded-md mt-[320px] shadow-md bg-[#F0FDF4] text-[#185013] font-[500] not-italic text-[18px] outline outline-[#0c3a08] outline-2 font-Poppins-Medium hover:text-white hover:bg-[#185013] focus:outline-black">
            Support Us
          </button>
        </div>
      </div>   
      <div>
      <Info/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}