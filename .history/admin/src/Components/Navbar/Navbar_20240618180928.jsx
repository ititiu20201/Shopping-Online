import "./Navbar.css";
import navlogo from "../../assets/cart-shopping-list-icon-1970x2048-awqo7u9m.png";
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
