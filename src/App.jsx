import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LatestMovies from "./component/latestMovies";
import Home from "./Pages/Home";

function App() {
  const [movie, setMovie] = useState(JSON.movies);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
      </Routes>
    </>
  );
}

export default App;
