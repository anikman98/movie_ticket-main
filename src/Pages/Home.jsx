import Header from "../component/header";
import MovieCaraousel from "../component/MovieCarousel";
import RecommendedMovies from "../component/RecommendedMovies";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      {/* Header */}
      <Header />
      {/* Movies Carousel */}
      <MovieCaraousel />
      {/* Recommended Movies */}
      <RecommendedMovies />
    </div>
  );
};

export default Home;
