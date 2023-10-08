import React, { useState } from "react";
import { searchMovie } from "../service/api";
import { search } from "../pages/PopularMovie"

const Search = ({ handleSearch }) => {

  return (
    <div className="relative flex items-center w-1/3">
      <input
        className="bg-transparent outline outline-1 outline-red-500 pl-4 pr-10 py-2 rounded-full w-full text-white"
        placeholder="What do you want to watch?"
        type="text"
        onChange={({ target }) => handleSearch(target.value) }
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="red"
        className="w-6 h-6 absolute right-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
};

export default Search;
