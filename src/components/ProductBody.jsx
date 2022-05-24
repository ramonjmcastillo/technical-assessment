import React, { useState } from "react";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import BlackHeadphones from "./images/ath-msr7-black.jpg";
import BrownHeadphones from "./images/ath-msr7-brown.jpg";
import { ReactComponent as BackArrow } from "./images/back-arrow.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./components/TabPanel";
import {
  detailsText,
  descriptionText,
  productCurrentPrice,
  productOriginalPrice,
  productSubTitle,
  productTitle,
  headPhoneOptions,
} from "./config";

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
          <div className="back-container">
            <BackArrow style={{ color: "rgb(203,203,203)" }} />
            <p> All Products </p>
          </div>
          <img
            alt="Audio Technica HeadPhones"
            className="picture"
            src={selectedColor === "Black" ? BlackHeadphones : BrownHeadphones}
          />
        </>
      )}
      <div className="content-container">
        {screenType === "DESKTOP" && (
          <div className="back-container">
            <BackArrow style={{ color: "rgb(203,203,203)" }} />
            <p> All Products </p>
          </div>
        )}
        <div className="heading-container">
          <h1 className="heading-title"> {productTitle} </h1>
          <h3 className="heading-subtitle">{productSubTitle}</h3>
        </div>
        <div>
          <>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Details - Description Tab"
              style={{ marginBottom: "24px" }}
            >
              <Tab
                style={{ fontWeight: "bold", color: "black" }}
                label="Description"
              />
              <Tab
                style={{ fontWeight: "bold", color: "black" }}
                label="Details"
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <p className="product-details-description">{descriptionText}</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <p className="product-details-description">{detailsText}</p>
            </TabPanel>
          </>

          <p className="product-details-price">
            {productCurrentPrice}
            <span style={{ textDecoration: "line-through" }}>
              {productOriginalPrice}
            </span>
          </p>

          <div className="product-details-color">
            <p style={{ marginBottom: "12px" }}> COLORS</p>
            <select
              onChange={(e) => setSelectedColor(e.target.value)}
              style={{
                width: "100px",
                height: "32px",
                border: "1px solid gray",
                marginBottom: "32px",
              }}
            >
              {headPhoneOptions?.map((option) => {
                return (
                  <option key={option.label} value={option.label}>
                    {option.label}
                  </option>
                );
              })}
            </select>
            <hr className="hr-break" style={{ width: "100%" }} />
            <div>
              <button
                onClick={() => addToCart()}
                className="product-details-button"
                type="button"
                disabled={addedToCart}
              >
                {loading ? (
                  <p> Loading </p>
                ) : addedToCart ? (
                  <p> View Cart </p>
                ) : (
                  <p> Add to Cart</p>
                )}
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
      {screenType === "DESKTOP" && (
        <img
          alt="Audio Technica HeadPhones"
          className="picture"
          style={{ borderLeft: "1px solid rgb(203, 203, 203)" }}
          src={selectedColor === "Black" ? BlackHeadphones : BrownHeadphones}
        />
      )}
    </div>
  );
}

export default App;
