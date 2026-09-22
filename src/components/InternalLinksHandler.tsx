import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// ScrollHandler component to handle hash navigation
export const InternalLinksHandler = () => {
  const location = useLocation();
  // On the very first render (page load / F5) the browser restores the
  // previous scroll position itself — forcing scrollTo(0,0) there would
  // stomp on it. Scroll-to-top only applies to LATER route changes.
  const isFirstRender = useRef(true);

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const sectionId = hash.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        // Delay the scroll slightly to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else if (!isFirstRender.current) {
      // Route change without hash (e.g. /privacy → /): start at the top.
      window.scrollTo(0, 0);
    }

    isFirstRender.current = false;
  }, [location]); // Only run when location changes

  return null;
};
