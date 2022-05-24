import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";

const ProductTabs = ({
  value,
  handleChange,
  productOriginalPrice,
  productCurrentPrice,
  loading,
  addedToCart,
  descriptionText,
  detailsText,
  setSelectedColor,
  headPhoneOptions,
  addToCart,
}) => {
  return (
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
          <Tab style={{ fontWeight: "bold", color: "black" }} label="Details" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <p className="product-details-description">{descriptionText}</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p className="product-details-description">{detailsText}</p>
        </TabPanel>
      </>

      <p className="product-details-price">
        ${productCurrentPrice}
        <span style={{ textDecoration: "line-through" }}>
          ${productOriginalPrice}
        </span>
      </p>

      <div className="product-details-color">
        <p> COLORS</p>
        <select
          className="color-dropdown"
          onChange={(e) => setSelectedColor(e.target.value)}
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
            disabled={addedToCart || loading}
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
  );
};

export default ProductTabs;
