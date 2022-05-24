import React from "react";
import { ReactComponent as BackArrow } from "../images/back-arrow.svg";
const BackContainer = ({ selectedColor }) => {
  return (
    <>
      <div className="back-container">
        <BackArrow style={{ color: "rgb(203,203,203)" }} />
        <p> All Products </p>
      </div>
    </>
  );
};

export default BackContainer;
