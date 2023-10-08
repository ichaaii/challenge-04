import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../service/api";
import Button from "../components/Button";
import Brand from "../components/Brand";

const DetailMovie = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    // Ambil detail film berdasarkan ID dari API TMDB
    getMovieDetail(id).then((result) => {
      setMovieDetail(result);
    });
  }, [id]);

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative h-full">
      {/* <Header /> */}
      <div className="absolute top-2 left-5 right-5 p-4 flex justify-between items-center z-50">
      <Brand/>
      <div className="flex gap-3">
        <Button varient="transparant">Login</Button>
        <Button varient="red">Register</Button>
      </div>
      </div>
      <div>
        <img
          className="w-full h-screen"
          src={`${process.env.REACT_APP_BASEIMGURL}/${movieDetail.backdrop_path}`}
          alt={movieDetail.title}
        />
        <div className="absolute inset-0 flex flex-col justify-center pl-20 text-left bg-black bg-opacity-50">
          <h1 className="w-1/2 text-white text-6xl font-extrabold mb-2">
            {movieDetail.title}
          </h1>
          <div className="w-1/2 text-white text-lg ">
          <p className=" mt-3 ">
            {movieDetail.overview}
          </p>
          <p className="mt-10 font-bold">
            {movieDetail.release_date}
          </p>
          <p className="font-bold flex flex-row mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="red"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {movieDetail.vote_average}
          </p>
          </div>
          
          <div className="mt-4">
            <Button varient="trailer" movieId={id} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
              WATCH TRAILER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
