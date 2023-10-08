import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeMovie from "../components/HomeMovie";


export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query); 
  };

  console.log(searchQuery)
  return (
    <div className="font-Quicksand">
      {/* <Header handleSearch={handleSearch} /> */}
      <Hero />
      <HomeMovie searchQuery={searchQuery} />
    </div>
  );
};



