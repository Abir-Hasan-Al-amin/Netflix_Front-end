import React, { useEffect, useState } from "react";
import axios from "../axios";
import request from "../request";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(request.fetchNetflixOriginals);
        setMovie(
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="w-full h-[650px] lg:[850px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[650px] lg:[850px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button
              className="cursor-pointer text-white outline-none border-none font-bold rounded px-8 py-2  mr-4 bg-[#333333] bg-opacity-50 transition-all duration-200 hover:text-black hover:bg-gray-200">
              Play
            </button>
            <button className="cursor-pointer text-white outline-none border-none font-bold rounded px-8 py-2  mr-4 bg-[#333333] bg-opacity-50 transition-all duration-200 hover:text-black hover:bg-gray-200">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.first_air_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncate(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
