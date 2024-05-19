import axios from "../axios";
import React, { useEffect, useRef, useState } from "react";

function Row({ title, url, isOriginal }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original";
  const cardRef=useRef();

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(url);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [url]);
  const handleWheel=(e)=>{
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };
  useEffect(()=>{
    cardRef.current.addEventListener('wheel',handleWheel)
  },[])
  return (
    <div className=" pl-3 pt-10">
      <h1 className=" text-2xl font-bold mb-5">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide" ref={cardRef}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <img
              key={movie.id}
              className={` ${
                isOriginal ? " h-96" : "h-64"
              } p-3 hover:scale-105 transform duration-500 object-cover`}
              src={`${baseURL}${
                isOriginal ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          ))
        ) : (
          <p>No movies to display</p>
        )}
      </div>
    </div>
  );
}

export default Row;
