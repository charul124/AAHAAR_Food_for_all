import React from 'react'

export default function Info() {
  return (
    <div>
       <div className=" mt-[-40.76%] absolute w-full h-[620px] mb-39" style={{background: `radial-gradient(50% 50% at 50% 50%, #106109 0%, #185013 100%)` }}>
        
        <h1 className="text-[#F0FDF4] text-[70px] ml-[120px] mt-[90px] font-700 w-[600px] font-Poppins-Medium">Be a part of the Change!</h1>
        <h4 className="text-[#b5b5b5] ml-[120px] mt-[10px] text-[18px] w-[440px] leading-[27px] font-Poppins-Medium">Join Aahaar and make a difference by sharing your surplus food or finding affordable, delicious meals near you. Together, we can combat food waste and help those in need.</h4>
        <div className="mt-[-320px] ml-[860px]">
      <iframe className="h-[300px] w-[550px] rounded-lg" 
      src="https://www.youtube.com/embed/UQ7MOASf78A?si=9mfLZvgBTFjMhq0s" title="YouTube video player"        frameborder="0" autoplay></iframe>
      </div>
        
        <div className="flex flex-row gap-[90px] text-yellow-50 ml-[120px] mt-[60px]">
          <div>
            <h1 className="font-700 font-Poppins-Medium text-[50px]">1.3</h1>
            <h2 className="font-700 font-Poppins-Medium text-[30px]">Billion</h2>
            <h4 className="text-[#b5b5b5] mt-[15px] text-[18px] w-[340px] leading-[27px] font-Poppins-Medium">tons of food is wasted annually
that’s about 1/3 of food produced</h4>
          </div>
          <div>
            <h1 className="font-700 font-Poppins-Medium text-[50px]">194</h1>
            <h2 className="font-700 font-Poppins-Medium text-[30px]">Million</h2>
            <h4 className="text-[#b5b5b5] mt-[15px] text-[18px] w-[340px] leading-[27px] font-Poppins-Medium">4.3% of the population are not receiving adequate nutrition in India or are affected by hunger</h4></div>
          <div>
          <h1 className="font-700 font-Poppins-Medium text-[50px]">107</h1>
            <h4 className="text-[#b5b5b5] mt-[35px] text-[18px] w-[340px] leading-[27px] font-Poppins-Medium">out of 121 countries in the Global Hunger Index</h4>
          </div>
        </div>
      </div>
      <img className="mt-[619px]" src="\images\upwave.svg" alt="" />
      
    </div>
  )
}
