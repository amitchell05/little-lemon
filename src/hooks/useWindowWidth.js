import {useEffect, useState} from "react";

/**
 * This is a custom hook that can be used to hold the state of the window's width and render the hero's desktop or mobile image based on the width
 */
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to call on window width resize
    const handleWidthResize = () => {
        setWindowWidth(window.innerWidth);
    }

    // Add event listener to resize event
    window.addEventListener("resize", handleWidthResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleWidthResize);
  }, [windowWidth]);

  return windowWidth;
}

export default useWindowWidth;
