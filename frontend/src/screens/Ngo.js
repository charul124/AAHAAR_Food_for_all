import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const NGOSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/api/ngos")
      .then((response) => response.json())
      .then((data) => setNgos(data))
      .catch((error) => console.error("Error fetching NGOs:", error));
  }, []);

  const searchByCityOrPin = () => {
    const searchValue = searchInput.toUpperCase();
    let result = [];

    for (const ngo of ngos) {
      if (
        ngo.PINCODE === parseInt(searchValue) ||
        ngo.CITY.toUpperCase() === searchValue
      ) {
        result.push({ state: ngo.STATE, city: ngo.CITY, ngo });
      }
    }

    setSearchResult(result);
    setHasSearched(true);
  };

  const searchByState = () => {
    const searchValue = stateInput.toUpperCase();
    let result = [];

    for (const ngo of ngos) {
      if (ngo.STATE.toUpperCase() === searchValue) {
        result.push({ state: ngo.STATE, city: ngo.CITY, ngo });
      }
    }

    setSearchResult(result);
    setHasSearched(true);
  };

  const [ngos, setNgos] = useState([]);

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
        className="ml-[86vh] mt-[-31px] absolute border-collapse"
      >
        <img
          className="mt-[-16px] w-[33px] ml-[10px]"
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
          className="mt-[-22px] w-[33px] ml-[32rem]"
          src="search.png"
          alt="error"
        />
      </button>

      <div>
      {hasSearched &&
    (searchResult.length === 0 ? (
      <p className="ml-[10%] mr-[10%] mt-[10vh] p-[20px] text-[32px] not-italic font-[800] text-center text-[#a14751] bg-[#ffffff] rounded-[31px] shadow-lg">
        NGO not found
      </p>
    ) : (
      searchResult.map((item, index) => (
        <div
          key={index}
          className="ml-[10%] mr-[10%] mt-[10vh] p-[20px] text-center bg-[#ffffff] rounded-[31px] shadow-lg"
        >
          <ul>
            <li className="text-center text-[2A3342] font-Poppins text-[23px] not-italic font-[800]">
              <p
                style={{
                  color: "#2A3342",
                  fontFamily: "Poppins",
                  fontSize: "23px",
                  fontWeight: "800",
                }}
              >
                {/* Displaying additional information */}
                <span>{item.ngo.NGO}</span>
                <br />
                Contact: {item.ngo.CONTACT}
                <br />
                Pincode: {item.ngo.PINCODE}
                <br />
                Address: {item.ngo.ADDRESS}
                <br />
                Description: {item.ngo.DESCRIPTION}
                <br />
                City: {item.city}
                <br />
                State: {item.state}
              </p>
            </li>
          </ul>
        </div>
      ))
    ))}
        <div className="mt-[6%]">
          <p className="text-[#2A3342] mt-[-47px] text-center text-[42px] leading-[62px] tracking-[1.65px] font-[800] not-italic  font-Poppins ">
            Discover Nearby Food Banks : Connect with local resources through
            <span className="font-[Poppins] text-[#185013]"> AAHAAR</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default NGOSearch;
