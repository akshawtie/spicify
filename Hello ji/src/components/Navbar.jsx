import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar(){

    return (
        <>
        <div className="navbar">
        <div className="nav-left">
          <Link to="/" className="main_logo">
            <img src="/r/mikuu.png" className="melody2_img" alt="Spicify Logo" />
            Spicify
          </Link>
        </div>
        <label className="search-label">
          <input
            type="text"
            className="input"
            placeholder="Search Your Music..."
          />
          <kbd className="slash-icon">/</kbd>
        </label>

        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
      <hr />
    </>
    ) 
}
export default Navbar;