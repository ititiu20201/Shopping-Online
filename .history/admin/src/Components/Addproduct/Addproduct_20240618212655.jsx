import "./Addproduct.css";

const Addproduct = () => {
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name="name" placeholder="Type here" />
      </div>
    </div>
  );
};

export default Addproduct;
