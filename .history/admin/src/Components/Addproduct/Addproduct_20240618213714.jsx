import "./Addproduct.css";

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
          <option value="men">men</option>
          <option value="kid">kid</option>
        </select>
      </div>
    </div>
  );
};

export default Addproduct;
