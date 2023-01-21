import { useEffect, useRef, useState } from "react";

export const useHeaderScroll = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [imageHeight, setImageHeight] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const clientHeight = ref?.current.clientHeight;
      console.log(clientHeight);
      setImageHeight(clientHeight);
    }
  }, [ref]);

  useEffect(() => {
    const scrollWindow = () => {
      const scroll = window.scrollY;
      if (imageHeight <= scroll) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, [imageHeight]);

  return { ref, isHeaderActive };
};
