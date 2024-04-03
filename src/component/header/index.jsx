import Searchbar from "../searchbar";
import "../../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Searchbar />
      <div className="options">
        <div className="latest-movie option">Latest Movies</div>
        <div className="upcoming-movie option">Upcoming Movies</div>
        <div className="nearby-events option">Nearby Events</div>
      </div>
    </div>
  );
};

export default Header;
