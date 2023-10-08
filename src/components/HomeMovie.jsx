import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../service/api";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules";
import { Link } from "react-router-dom";
import Header from "./Header";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const HomeMovie = ({movies}) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const handleSearch = async (query) => {
    if (query.length > 1) {
      const result = await searchMovie(query);
      setSearchResults(result.results);
    }
  };

  // const moviesToDisplay = searchResults.length > 0 ? searchResults : popularMovies;

  const HomeMovieCard = ({movie}) => {
    return (
      <div
          className=" border border-slate-400 rounded-xl shadow-md shadow-gray-700 relative"
          style={{ maxWidth: "288px" }}
          key={movie.id}
        >
          <Link to={`/movie/${movie.id}`}>
            <img
              className=" w-72 object-cover rounded-xl"
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
          <div className="text-white absolute bottom-0 left-0  w-full text-center bg-gray-900 bg-opacity-50 rounded-b-xl">
            {movie.title}
          </div>
        </div>
    );
  };

  console.log(searchResults)
  
  return (
    <div>
    <Header handleSearch={handleSearch} />
    <div className="flex justify-between items-center mx-14 mt-16 mb-12 font-bold">
      <h1 className="text-3xl ">Popular Movie</h1>
      <div className="flex items-center space-x-3 text-red-600 hover:text-red-800">
        <Link to="/Popular" className="text-xl ">
          See All Movie
        </Link>
        <Link to="/Popular">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="red"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
    <div className="flex flex-col w-full">
     <div className="mx-14 mb-20">
        <Swiper
        style={{ 
          '--swiper-navigation-color': 'red',
        '--swiper-pagination-color': 'red',
         }}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          loop
          modules={[Pagination, Autoplay, Navigation]}
        >
          {popularMovies.map((movie, i) => (
            <SwiperSlide key={i}>
              <HomeMovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

    <div className="mx-14 mb-12 font-bold">
    <h1 className="text-3xl ">Search results</h1>
    </div>
    <div className="flex flex-col w-full">
     <div className="mx-14 mb-20">
        <Swiper
        style={{ 
          '--swiper-navigation-color': 'red',
        '--swiper-pagination-color': 'red',
         }}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          loop
          modules={[Pagination, Autoplay, Navigation]}
        >
          {searchResults.map((movie, i) => (
            <SwiperSlide key={i}>
              <HomeMovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default HomeMovie ;
