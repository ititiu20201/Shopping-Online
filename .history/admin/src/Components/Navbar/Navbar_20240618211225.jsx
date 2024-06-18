import "./Navbar.css";
import navlogo from "../../assets/Screenshot 2024-06-18 at 18.22.25.jpg";
import navProfile from "../../assets/Huy ngu.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="Logo" className="nav-logo" />
      <p>Hope</p>
      <img src={navProfile} alt="Profile" className="nav-profile" />
    </div>
  );
};

export default Navbar;
