import React from "react";
import Upload from "./Upload.jsx";

const Instruction = () => {
  return (
    <div className="py-16">
      <div className="flex justify-center mb-8 sm:flex-col">
        <div className="flex flex-col items-center text-lg w-[50%] gap-4 border-r-2 border-[#6b6b6b] p-4 pr-8 sm:w-full sm:border-0 sm:pr-4">
          <h2 className="text-3xl font-bold text-center">
          Measurement Instructions
          </h2>
          <p>Steps for Obtaining Measurements:</p>
          <ol className="list-decimal">
            <li className="pb-4">
            Begin by acquiring an Aruco marker, ensuring it measures precisely 2.5 x 2.5 centimeters.
            </li>
            <li className="pb-4">
            Capture an image containing both the Aruco marker and the objects to be measured.
            </li>
            <li className="pb-4">
            Upload the image using the provided input label provided below.
            </li>
            <li>
            Download the image to view the displayed measurements.
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-[50%] border-l-2 border-[#6b6b6b] sm:w-full sm:border-0">
          <img src="aruco.jpg" alt="" />
          <p className="text-lg font-bold">Aruco Marker</p>
          <a href="./aruco.jpg" download>
            <button className="text-[white] font-bold border-2 border-[#6b6b6b] w-fit py-2 px-8 bg-[#6b6b6b] rounded-md hover:bg-[#242424] hover:text-[#6b6b6b]">
              Download Marker
            </button>
          </a>
        </div>
      </div>
      <Upload />
    </div>
  );
};

export default Instruction;
