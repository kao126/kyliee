import { useEffect, useRef, useState } from "react";

export const useHeaderScroll = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [imageHeight, setImageHeight] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const topImageHeight = ref?.current.clientHeight;
      setImageHeight(topImageHeight);
    }
  }, [ref]);

  useEffect(() => {
    const scrollWindow = () => {
      const scroll = window.scrollY;
      if (1000 <= scroll) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  return { ref, isHeaderActive };
};
