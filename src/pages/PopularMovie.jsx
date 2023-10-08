import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../service/api";
import PopularMovieCard from "../components/PopularMovieCard";

const PopularMovie = () => {
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

  const PopularMovieList = () => {
    const moviesToDisplay = searchResults.length > 0 ? searchResults : popularMovies;

    return moviesToDisplay.map((movie, i) => {
      return <PopularMovieCard key={i} movie={movie} />;
  
    });
  };

  return (
      <div className="flex flex-col w-full ">
      <Header handleSearch={handleSearch} />
      <div className="mx-12 mt-28 mb-5 font-bold">
        <h1 className="text-3xl">Popular Movie</h1>
      </div> 
      <div className="flex flex-wrap gap-5 justify-center">
        <PopularMovieList />
      </div>
    </div>
  
  );
};

export default PopularMovie;
