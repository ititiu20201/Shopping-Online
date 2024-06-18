import "./Addproduct.css";
import upload_area from "../../assets/Screenshot 2024-06-18 at 21.45.48.jpg";

const Addproduct = () => {
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name="name" placeholder="Type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="old_price" placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" className="Tadd-product-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={upload_area} className="addproduct-thumnail-img" alt="" />
        </label>
        {/* <input type="file" name="image" id="file-input" hidden /> */}
      </div>
      <button className="addproduct-btn">ADD</button>
    </div>
  );
};

export default Addproduct;
