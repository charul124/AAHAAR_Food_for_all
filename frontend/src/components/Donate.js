import React from "react";
import Navbar from "../screens/Navbar";
import { useNavigate } from "react-router-dom";
// import { Carousel } from 'flowbite-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import UserDonatePage from "./UserDonatePage";
import Footer from "./Footer";

export default function Donate() {

  const navigate = useNavigate();

  const handleDonateFoodClick = () => {
    navigate("/donatefood");
  };
  const handleDonateEssentialsClick = () => {
    navigate("/donateessentials");
  };
  const handleDonateClick = ()=> {
    navigate("/donate")
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds (e.g., 5000 for 5 seconds)
  };
  return (
    <>
    <div>
      <Navbar />
      <Slider {...settings}>
      <div>
        <img className="max-w-full" src="donate2.png" alt="Slide 1" />
      </div>
      <div>
        <img className="max-w-full" src="donate1.png" alt="Slide 2" />
      </div>
      <div>
        <img className="w-[1900px]" src="donate3.png" alt="Slide 3" />
      </div>
      <div>
        <img className="w-[1920px]" src="donate4.png" alt="Slide 3" />
      </div>
    </Slider>
      <div className="mt-[2rem] absolute m-auto w-[1519px]">
        {/* <div className="mt-[2rem] absolute ml-[12rem] w-[79vh]">
          <p className="text-[#556987] font-Poppins text-[20px] not-italic font-[500] leading-[30px] text-center ">
            Lorem ipsum dolor sit amet consectetur. Commodo id ut tellus metus
            vel. Ullamcorper mauris et imperdiet ornare.
          </p>
        </div> */}
        
        <p className="text-[#6B7280] text-center mt-[30px] font-Poppins-Medium text-[66]px not-italic font-[700] leading-[72px] text-[36px] ">
          Transform compassion into action.{" "}
          <span className="text-[#232E40] font-Poppins-Medium text-[66]px not-italic font-[700] leading-[72px] text-[36px]">
            Donate today, make a difference.
          </span>
        </p>
        <div className="buttons absolute flex gap-[5%] justify-center ml-[230px] mt-3">
          <div className="">
            <button
              onClick={handleDonateEssentialsClick}
              className="flex w-[540px] h-[60px] justify-center items-center rounded-md bg-[#185013] outline outline-[#185013] shadow-md text-[#F0FDF4] hover:bg-white hover:text-[#185013] font-[500] not-italic text-[18px] font-Poppins-Medium"
            >
              Donate Essentials
            </button>
          </div>
          <div className="">
            <button
              onClick={handleDonateFoodClick}
              className="flex w-[540px] h-[60px] justify-center items-center rounded-md outline outline-[#185013] bg-[#F0FDF4] shadow-md text-[#185013] font-[500] not-italic hover:bg-[#185013] hover:text-white text-[18px] font-Poppins-Medium"
            >
              Donate Food
            </button>
          </div>
        </div>
        <div className="flex mt-[170px] justify-center">
          <div className="flex-direction: column;">
              <p className="flex items-center text-[50px] text-gray-900 text-center font-[800] w-[800px]">Empowering Change, One Act of Kindness at a Time</p>
              <p className="flex items-center text-[20px] text-gray-700 text-center font-[300] w-[800px] mt-[30px]">Experience transformative change through collective kindness. Join us as every small act weaves a tapestry of compassion, leaving an enduring impact on lives and communities.</p>
        </div>
        </div>
        <div className="flex justify-center items-center h-[300px] mt-[50px]">
        <div className="h-[300px] w-[80%]" style={{background: `radial-gradient(50% 50% at 50% 50%, #106109 0%, #185013 100%)` }}>
        <span className="flex-direction: column;">
          <p className="flex w-[400px] text-white mt-[60px] ml-[60px] text-[35px] font-[700]">Lorem ipsum dolor sit amet</p>
          <p className="flex w-[400px] text-white m-[10px] ml-[60px] text-[20px] font-[300]">Lorem ipsum dolor sit amet consectetur. Ultrices enim at a sociis lectus tempor purus.</p>
        </span>
        <button onClick={handleDonateClick} className="absolute top-1/4 left-1/4 flex w-[390px] h-[50px] ml-[430px] p-[16px] justify-center items-center gap-[8px] flex-shrink-0 rounded-md mt-[480px] shadow-md bg-[#F0FDF4] text-[#185013] font-[500] not-italic text-[18px] outline outline-[#0c3a08] outline-2 font-Poppins-Medium hover:text-white hover:bg-[#185013] focus:outline-black">
            Support Us and Give donations <img className="" src="right-arrow--24--outline1.svg" alt="" />
          </button>

        </div>
        </div>
      </div>
      {/* <UserDonatePage /> */}
      {/* <Footer/> */}
    </div>
    </>
  );
}
