import React, { useState } from "react";
import "./App.css";
import useMediaQuery from "./hooks/useMediaQuery";
import BlackHeadphones from "./images/ath-msr7-black.jpg";
import BrownHeadphones from "./images/ath-msr7-brown.jpg";
import { ReactComponent as BackArrow } from "./images/back-arrow.svg";
import { ToastContainer, toast } from "react-toastify";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-toastify/dist/ReactToastify.css";
import "react-tabs/style/react-tabs.css";

function App() {
  const [selectedColor, setSelectedColor] = useState("black");
  const [addedToCart, setAddedToCart] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="App">
      {screenType === "MOBILE" && (
        <>
          <div className="back-container">
            <BackArrow style={{ color: "rgb(203,203,203)" }} />
            <p> All Products </p>
          </div>
          <img
            alt="Audio Technica HeadPhones"
            className="picture"
            src={selectedColor === "black" ? BlackHeadphones : BrownHeadphones}
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
          <h1 className="heading-title"> Audio-Technica ATH-MSR7 </h1>
          <h3 className="heading-subtitle">
            2017 Best Headphones of the Year Award Winner
          </h3>
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Details</Tab>
            </TabList>
            <TabPanel>
              <p className="product-details-description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus.
              </p>
            </TabPanel>
            <TabPanel>
              <p className="product-details-description">
                imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
                leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut,
              </p>
            </TabPanel>
          </Tabs>

          <p className="product-details-price">
            $59.99
            <span style={{ textDecoration: "line-through" }}> $89.99 </span>
          </p>

          <div className="product-details-color">
            <p style={{ marginBottom: "12px" }}> Colors</p>
            <select
              onChange={(e) => setSelectedColor(e.target.value)}
              style={{
                width: "100px",
                height: "32px",
                border: "1px solid gray",
              }}
            >
              <option value="black"> Black </option>
              <option value="brown">Brown</option>
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
          src={selectedColor === "black" ? BlackHeadphones : BrownHeadphones}
        />
      )}
    </div>
  );
}

export default App;
