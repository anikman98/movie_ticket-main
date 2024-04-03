import React, { useState } from "react";

const MovieDetailpageScreen = (props) => {
    const movieList = props.list.map((data)=>{
        return (
            <div key={data.id} className="relative">
        <img
          src="https://via.placeholder.com/1920x500"
          alt="Album"
          className="w-full"
        />
        <div className="absolute top-4 left-4">
          <h1 className="text-4xl font-bold text-white"> {data.title}</h1>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center space-x-4">
          <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300">
            Add to Cart
          </button>
          <button className="material-icons text-green-400 hover:text-green-300 text-3xl">
            play_arrow
          </button>
        </div>
      </div>
        )
    })

  

  return (
    < >
            {movieList}
    </>
  );
};

export default MovieDetailpageScreen;
