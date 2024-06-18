import "./Navbar.css";
import navlogo from "../../assets/he (1).jpg";
import navProfile from "../../assets/Huy ngu.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};
export default Navbar;
