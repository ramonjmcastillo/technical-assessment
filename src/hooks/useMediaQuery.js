import * as React from "react";

const useMediaQuery = () => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [screenType, setScreenType] = React.useState("INITIAL");

  React.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener("resize", updateWindowDimensions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth > 1024) {
      setScreenType("DESKTOP");
    } else if (window.innerWidth <= 1024 && windowWidth > 768) {
      setScreenType("TABLET");
    } else {
      setScreenType("MOBILE");
    }
  };

  return {
    windowWidth,
    screenType,
  };
};

export default useMediaQuery;
