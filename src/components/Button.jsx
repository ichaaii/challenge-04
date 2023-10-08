import React from "react";
import { getMovieVideos } from "../service/api";

const Button = ({ varient, children, movieId, ...props }) => {
  let ButtonName = "px-4 py-2 rounded-full hover:scale-110";
  if (varient === "red") {
    ButtonName +=
      " bg-red-600 hover:bg-red-800 text-white font-normal outline outline-1 outline-red-500 hover:outline-red-700";
  } else if (varient === "transparant") {
    ButtonName +=
      " bg-transparent text-red-600 font-normal outline outline-offset-1 outline-red-600";
  } else if (varient === "trailer") {
    ButtonName +=
      " bg-red-600 hover:bg-red-800 text-white font-normal flex items-center ";
  }

  const handleTrailer = async () => {
    try {
      const data = await getMovieVideos(movieId);

      const videoKey = data.results[0]?.key;
      if (videoKey) {
        window.open(`https://www.youtube.com/watch?v=${videoKey}`, "_blank");
      } else {
        alert("Trailer not available.");
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
      alert("Error fetching trailer.");
    }
  };

  return (
    <button className={ButtonName} onClick={varient === "trailer" ? handleTrailer : undefined} {...props}>
      {children}
    </button>
  );
};

export default Button;
