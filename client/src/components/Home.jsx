import React from "react";
import Hero from "./Hero";
import Instruction from "./Instruction";
import Examples from "./Examples";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mx-20 sm:mx-8">
        <Instruction />
        <Examples />
      </div>
    </div>
  );
};

export default Home;
