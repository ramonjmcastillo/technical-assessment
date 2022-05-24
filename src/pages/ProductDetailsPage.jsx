import React, { useState } from "react";
import { toast } from "react-toastify";

import BlackHeadphones from "../images/ath-msr7-black.jpg";
import BrownHeadphones from "../images/ath-msr7-brown.jpg";

import { productDetails } from "../data";
import BackContainer from "../components/BackContainer";
import ProductHeading from "../components/ProductDetails/ProductHeading";
import ProductTabs from "../components/ProductDetails/ProductTabs";

const ProductDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [addedToCart, setAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const {
    detailsText,
    descriptionText,
    productCurrentPrice,
    productOriginalPrice,
    productSubTitle,
    productTitle,
    headPhoneOptions,
  } = productDetails;

  const addToCart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAddedToCart(true);
      toast.success("Item added to cart! ", {
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
    setSelectedTab(newValue);
  };

  return (
    <div className="product-details-container">
      <div style={{ backgroundColor: "white" }}>
        <BackContainer />
        <div className="content-container">
          <div className="body-container">
            <ProductHeading
              productTitle={productTitle}
              productSubTitle={productSubTitle}
            />
            <ProductTabs
              value={selectedTab}
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
          <img
            alt="Audio Technica HeadPhones"
            className="picture"
            src={selectedColor === "Black" ? BlackHeadphones : BrownHeadphones}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
