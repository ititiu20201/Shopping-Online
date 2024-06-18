import { useState } from "react";
import "./Listproduct.css";

const Listproduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http:localhost:4000/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  return (
    <div className="list-product">
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
      </div>
    </div>
  );
};

export default Listproduct;
