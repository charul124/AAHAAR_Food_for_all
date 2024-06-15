import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="relative w-[1535px] h-[80px] bg-white-900">
      <img
        className="absolute w-[76.316px] h-[70.047px] ml-[2rem] flex-shrink-0 filter drop-shadow-md"
        alt="Logo"
        src="logo.png"
      />
      <span className="text-[#2A3342] font-[700] text-[27px] font-extrabold absolute ml-[8rem] mt-[23px] font-poppins text-base font-medium leading-[24px]">
        <Link to="/"> Aahaar</Link> 
      </span>
      <div className="inline-flex items-start gap-[48px] absolute top-[27px] left-[512px]">
        <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-gray-500 text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)]">
          NGOs
        </div>
        <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#185013] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)]">
          Foodbanks
        </div>
        <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#185013] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)] hover:text-[#778e8e]">
        <Link to="/donate"> Donate</Link> 
        </div>
        <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#185013]text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)]">
          Contact Us
        </div>
        <div>
          <button className="rounded-md bg-green-800 shadow-md text-[#F0FDF4] font-poppins text-sm font-medium leading-[20px] h-[5vh] ml-[17rem] w-[16vh] mt-[-8px]">
            Register
          </button>
        </div>
        <div>
          <button
            onClick={handleLoginClick}
            className="inline-flex w-[16vh] h-[5vh] mt-[-1rem] justify-center items-center gap-2 rounded-md bg-green-800 shadow-md text-[#F0FDF4] font-poppins text-sm font-medium leading-[26px]"
          >
            <img
              className="w-[20] h-[28] ml-[-5.02rem] absolute"
              src="msg.png"
              alt=""
            />
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
