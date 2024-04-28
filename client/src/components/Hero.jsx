import React from "react";

const Hero = () => {
  return (
    <div className=" relative h-[90vh] w-full bg-[url(/Background.jpg)] bg-blend-overlay bg-black/50 bg-opacity-10  bg-cover bg-center">
      <div className="w-1/2 absolute right-4 top-[23%] flex items-center flex-col justify-center sm:right-[10%] sm:mx-auto sm:w-[80%]">
        <img className="w-[15rem]" src="logo.png" alt="" />
        <p className=" text-2xl font-bold text-center text-[#FFF]">
        Precision Measurements Made Simple: <br/>Your Reliable Source for Accuracy
        </p>
      </div>
    </div>
  );
};

export default Hero;
