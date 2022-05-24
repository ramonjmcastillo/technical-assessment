import "./App.css";
import BlackHeadphones from "./ath-msr7-black.jpg";
import BrownHeadphones from "./ath-msr7-brown.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";

function App() {
  const [selectedColor, setSelectedColor] = useState("black");
  const [addedToCart, setAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);

  const addToCart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAddedToCart(true);
      toast.success("Succesfully Added to Cart", {
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

  return (
    <div className="App">
      <img
        alt="Audio Technica HeadPhones"
        className="picture"
        src={selectedColor === "black" ? BlackHeadphones : BrownHeadphones}
      />
      <div className="heading-container">
        <h1 className="heading-title"> Audio-Technica ATH-MSR7 </h1>
        <h3 className="heading-subtitle">
          2017 Best Headphones of the Year Award Winner
        </h3>
      </div>
      <div>
        <div className="product-details-tabs"> Description</div>
        <p className="product-details-description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus.
        </p>
        <p className="product-details-price">
          $59.99 <span> $89.99 </span>
        </p>

        <div className="product-details-color">
          <p style={{ marginBottom: "4px" }}> Colors</p>
          <select
            onChange={(e) => setSelectedColor(e.target.value)}
            style={{ width: "100px" }}
          >
            <option value="black"> Black </option>
            <option value="brown">Brown</option>
          </select>
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
  );
}

export default App;
