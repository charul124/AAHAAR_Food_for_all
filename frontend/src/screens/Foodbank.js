import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const sampleData = {
  STATE: {
    "BIHAR": [
      {
        CITY: {
          "PATNA": [
            {
              NGO: "Foodor",
              ADDRESS: "Rajapur, Mainpura",
              PINCODE: 800001
            },
            {
              NGO: "HungerFree",
              ADDRESS: "Boring Road",
              PINCODE: 800013
            }
          ]
        }
      }
    ],
    "MAHARASHTRA": [
      {
        CITY: {
          "MUMBAI": [
            {
              NGO: "Mumbai Food Bank",
              ADDRESS: "Andheri West",
              PINCODE: 400053
            },
            {
              NGO: "Helping Hands",
              ADDRESS: "Dadar East",
              PINCODE: 400014
            }
          ]
        }
      }
    ]
  }
};

const NGOSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const searchByCityOrPin = () => {
    const searchValue = searchInput.toUpperCase();
    let result = [];

    for (const state in sampleData.STATE) {
      for (const cityData of sampleData.STATE[state]) {
        for (const city in cityData.CITY) {
          for (const ngo of cityData.CITY[city]) {
            if (
              ngo.PINCODE === parseInt(searchValue) ||
              city.toUpperCase() === searchValue
            ) {
              result.push({ state, city, ngo });
            }
          }
        }
      }
    }

    setSearchResult(result);
    setHasSearched(true);
  };

  const searchByState = () => {
    const searchValue = stateInput.toUpperCase();
    let result = [];

    if (sampleData.STATE[searchValue]) {
      for (const cityData of sampleData.STATE[searchValue]) {
        for (const city in cityData.CITY) {
          for (const ngo of cityData.CITY[city]) {
            result.push({ state: searchValue, city, ngo });
          }
        }
      }
    }

    setSearchResult(result);
    setHasSearched(true);
  };

  return (
    <div>
      <Navbar />
      <div className="image mt-[-55px]">
        <img className="p-[43px] mt-[27px]" src="ngo.png" alt="error" />
      </div>
      <label htmlFor="searchInput"></label>
      <input
        type="text"
        id="searchInput"
        placeholder="Enter City or PIN Code"
        required
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="p-[10px 14px] flex items-center gap-8 self-stretch mt-[-50px] ml-[3%] w-[554px] rounded-[6px] border-[1px] border-solid border-black bg-[var(--White, #FFF)] shadow-box font-Poppins h-[48px] p-[16px]"
      />
      <button
        onClick={searchByCityOrPin}
        className="ml-[86vh] w-10 mt-[-48px] absolute border-collapse"
      >
        <img
          className="mr-[15px] w-[23px]"
          src="search.png"
          alt="error"
        />
      </button>

      <br />

      <label htmlFor="stateInput">:</label>
      <input
        type="text"
        id="stateInput"
        placeholder="Enter State"
        required
        value={stateInput}
        onChange={(e) => setStateInput(e.target.value)}
        className="flex items-center gap-8 self-stretch mt-[-105px] ml-[58%] w-[554px] h-[48px] rounded-[6px] border-[1px] border-solid border-[#c0b2b2] bg-[var(--White, #FFF)] shadow-box  border-black font-Poppins p-[16px]"
      />
      <button
        onClick={searchByState}
        className="ml-[134vh] mt-[-25px] absolute border-collapse"
      >
        <img
          className="mt-[-22px] w-[23px] ml-[29rem]"
          src="search.png"
          alt="error"
        />
      </button>

      <div>
        {hasSearched &&
          (searchResult.length === 0 ? (
            <p className=" ml-[40%] w-[285px] h-[67%]text-[32px] not-italic font-[800] text-center text-[#a14751] bg-[#ffffff] rounded-[31px] shadow-lg">
              NGO not found
            </p>
          ) : (
            searchResult.map((item, index) => (
              <div
                key={index}
                className="  ml-[7%] mt-[10vh] w-[1317px] h-[175px] text-center flex-shrink-0 bg-[#ffffff] rounded-[31px] shadow-lg"
              >
                <ul>
                  <li className="text-center mt-[2%]w-[1041px] text-[#2A3342] font-Poppins text-[23px] not-italic font-[800]  ">
                    <p
                      style={{
                        color: "#2A3342",
                        fontFamily: "Poppins",
                        fontSize: "23px",
                        fontWeight: "800",
                      }}
                    >
                      {item.ngo.NGO} - {item.ngo.ADDRESS}, {item.city},{" "}
                      {item.state}
                    </p>
                  </li>
                </ul>
              </div>
            ))
          ))}
        <div className="mt-[6%]" >
          <p className="text-[#2A3342] mt-[-47px] text-center text-[42px] leading-[62px] tracking-[1.65px] font-[800] not-italic  font-Poppins ">
            Discover Nearby Food Banks : Connect with local resources through
            <span className="font-[Poppins] text-[#185013]"> {" "}AAHAAR</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NGOSearch;
