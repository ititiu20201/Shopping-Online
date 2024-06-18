import "./Sidebar.css";
import { Link } from "react-router-dom";
import add_Product_icon from "../../assets/cart_icon.png";
import list_product_icon from "../../assets/png-clipart-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service-thumbnail (2).jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_Product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};
export default Sidebar;
