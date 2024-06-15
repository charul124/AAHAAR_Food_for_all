import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirect to the login page
    navigate("/login");
  };
  const handleRegisterClick = () => {
    // Redirect to the login page
    navigate("/registrationform");
  }
  const handleFoodRegisterClick = () => {
    // Redirect to the login page
    navigate("/foodbanksform");
  }

  return (
    <div className="relative w-[1519px] h-[70px] bg-white-900">
      <img
        className="absolute w-[51.316px] h-[45.047px] ml-[2rem] mt-[10px] "
        alt="Logo"
        src="logo.png"
      />
      <span className="text-[#2A3342] font-Poppins-Medium font-[700] text-[26px] absolute ml-[6rem] mt-[25px] font-poppins text-base font-medium leading-[24px]">
        <Link to="/"> Aahaar</Link> 
      </span>
      <div className="inline-flex items-start gap-[55px] absolute top-[25px] left-[512px] font-Poppins-Medium font-[600] text-[18px] hover:font-bold">
        <div className="relative w-fit mt-[-1.00px] text-[#063103] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)] hover:text-[#147529]">
          <Link to="/ngo">NGOs</Link> 
        </div>
        <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#063103] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)] hover:text-[#147529]">
         <Link to="/foodbank"> Foodbanks</Link> 
        </div>
        <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#063103] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)] hover:text-[#147529]">
        <Link to="/donate"> Donate</Link> 
        </div>
        <div className="relative w-fit mt-[-1.00px] font-text-md-medium font-[number:var(--text-md-medium-font-weight)] text-[#063103] text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] whitespace-nowrap [font-style:var(--text-md-medium-font-style)] hover:text-[#147529]">
        <Link to="/contactus"> Contact Us</Link> 
        </div>
        <Menu as="div" className="group relative inline-block text-left mt-[-5px] ml-[65px]">
      <div>
        <Menu.Button className="inline-flex justify-center gap-x-1.5 rounded-md bg-[#185013] w-[23vh] h-[38px] px-3 py-1 text-sm font-semibold text-[white] ring-1 ring-inset ring-gray-300 group-hover:text-[#063103] group-hover:bg-gray-50">
          Register
          <ChevronDownIcon className="w-[28px] mt-[1px] text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-[160px] origin-top-right rounded-md bg-[white] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  User
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={handleFoodRegisterClick}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  FoodBanks
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button onClick={handleRegisterClick}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm w-[160px] text-left'
                  )}
                >
                  NGOs
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        <div>
          <button
            onClick={handleLoginClick}
            className="inline-flex h-[5vh] mt-[-1.5rem] justify-center items-center rounded-md bg-[#185013] text-[#F0FDF4] font-Poppins-Medium w-[25vh] text-sm font-medium leading-[26px] ml-[-2.5rem]"
          >
            <img
              className="w-[20] h-[28] ml-[-5rem] absolute"
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
