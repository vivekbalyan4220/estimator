import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Upload = () => {
  const [img, setImg] = useState();
  const navigate = useNavigate();
  const upload = async () => {
    const fd = new FormData();
    fd.append("image", img);
    console.log(fd);
    navigate("/download");
    axios
      .post("http://localhost:5000/upload", fd)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form className="flex flex-col items-center gap-4">
        <input
          className="w-fit relative left-10"
          type="file"
          name="image"
          onChange={(e) => {
            setImg(e.target.files[0]);
          }}
        />
        <button
          className=" text-[white] font-bold border-2 border-[#6b6b6b] w-fit py-2 px-8 bg-[#6b6b6b] rounded-md hover:bg-[#242424] hover:border-white hover:text-[white]"
          type="submit"
          onClick={upload}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
