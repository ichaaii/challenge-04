import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import Button from "./Button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASEURL}/movie/popular`,
          {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
              language: "en-US",
              page: 1,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movie: ", error);
      }
    };

    fetchMovies();
  }, []);

 

  return (
    <div className="w-full relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-full">
                <img
                  className="w-full h-screen"
                  src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}
                  alt={movie.title}
                />
              <div className="absolute inset-0 flex flex-col justify-center pl-20 text-left bg-black bg-opacity-50">
              <Link to={`/movie/${movie.id}`}>
                <h1 className="w-1/2 text-white text-6xl font-extrabold mb-2">
                  {movie.title}
                </h1>
                <p className="w-1/2 text-white text-lg ">{movie.overview}</p>
                </Link>
                <div className="mt-5">
                  <Button varient="trailer" movieId={movie.id} >
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
