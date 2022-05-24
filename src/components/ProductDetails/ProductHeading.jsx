import React from "react";

const ProductHeading = ({ productTitle, productSubTitle }) => {
  return (
    <div className="heading-container">
      <h1 className="heading-title"> {productTitle} </h1>
      <h3 className="heading-subtitle">{productSubTitle}</h3>
    </div>
  );
};

export default ProductHeading;
