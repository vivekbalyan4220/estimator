import React from "react";

const Examples = () => {
  return (
    <div className="mb-16">
      <h1 className="text-3xl text-center font-extrabold mb-8">Measurement Results</h1>
      <div className="flex sm:flex-col sm:gap-8">
        <div className="flex flex-col items-center justify-center border-r-2 border-[#6b6b6b] sm:border-0">
          <p className="bg-[#6b6b6b] w-1/2 text-center py-2 mb-2">
            Uploaded Image
          </p>
          <img className="w-1/2" src="/upload.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center border-l-2 border-[#6b6b6b] sm:border-0">
          <p className="bg-[#6b6b6b] w-1/2 text-center py-2 mb-2">
          Processed Image
          </p>
          <img className="w-1/2" src="/download.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Examples;
