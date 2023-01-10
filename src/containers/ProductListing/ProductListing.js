import ProductComponent from "../ProductComponent/ProductComponent";
import React from "react";
import { useSelector } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log("products", products);
  return (
    <div className="ui grid container" style={{ marginTop: "20px" }}>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
