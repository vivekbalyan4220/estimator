import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader";

const Download = () => {
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(false)
  const fetchImage = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/measure", {responseType: 'blob'});
      setImg(URL.createObjectURL(data));
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        fetchImage()
        setLoading(false)
      console.log("Image:"+img)
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col gap-4 my-8 items-center">
      <p>
        If image is not loaded refresh and make sure that aruco marker is
        clearly visible.
      </p>
      {loading ? <Loader/> :<div className="flex flex-col gap-4 my-8 items-center"><div>
        <img className="mx-auto h-[70vh]" src={`${img}`} alt="/" />
      </div>
      <a  href={img} download="measured" target="_blank">
        <button className="mx-auto text-[#242424] font-bold border-2 border-[#6b6b6b] w-fit py-2 px-4 bg-[#6b6b6b] rounded-md hover:bg-[#242424] hover:text-[#6b6b6b]">
          Download
        </button>
        
      </a></div>}
    </div>
  );
};

export default Download;
