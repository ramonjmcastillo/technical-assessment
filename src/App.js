import React, { useState } from "react";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import BlackHeadphones from "./images/ath-msr7-black.jpg";
import BrownHeadphones from "./images/ath-msr7-brown.jpg";
import { toast } from "react-toastify";
import {
  detailsText,
  descriptionText,
  productCurrentPrice,
  productOriginalPrice,
  productSubTitle,
  productTitle,
  headPhoneOptions,
} from "./config";
import BackContainer from "./components/BackContainer";
import ProductHeading from "./components/ProductDetails/ProductHeading";
import ProductTabs from "./components/ProductDetails/ProductTabs";

function App() {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [addedToCart, setAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);

  const { screenType } = useMediaQuery();

  const addToCart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAddedToCart(true);
      toast.success("Succesfully Added to Cart! ", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }, 2000);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="product-details-container">
      {(screenType === "MOBILE" || screenType === "TABLET") && (
        <>
          <BackContainer />
          <img
            alt="Audio Technica HeadPhones"
            className="picture"
            src={selectedColor === "Black" ? BlackHeadphones : BrownHeadphones}
          />
        </>
      )}
      <div className="content-container">
        {screenType === "DESKTOP" && (
          <div>
            <BackContainer />
            <p> All Products </p>
          </div>
        )}
        <ProductHeading
          productTitle={productTitle}
          productSubTitle={productSubTitle}
        />
        <ProductTabs
          value={value}
          handleChange={handleChange}
          productCurrentPrice={productCurrentPrice}
          productOriginalPrice={productOriginalPrice}
          loading={loading}
          addedToCart={addedToCart}
          descriptionText={descriptionText}
          detailsText={detailsText}
          setSelectedColor={setSelectedColor}
          headPhoneOptions={headPhoneOptions}
          addToCart={addToCart}
        />
      </div>
      {screenType === "DESKTOP" && (
        <img
          alt="Audio Technica HeadPhones"
          className="picture"
          style={{ borderLeft: "1px solid rgb(203, 203, 203)" }}
          src={selectedColor === "black" ? BlackHeadphones : BrownHeadphones}
        />
      )}
    </div>
  );
}

export default App;
