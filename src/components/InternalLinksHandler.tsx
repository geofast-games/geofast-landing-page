import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// The single place scroll position is decided on navigation. Pages must not
// reset scroll themselves: two handlers racing is what made the footer's
// legal links behave differently from one another.
export const InternalLinksHandler = () => {
  const location = useLocation();
  // On the very first render (page load / F5) the browser restores the
  // previous scroll position itself, and forcing scrollTo(0,0) there would
  // stomp on it. Scroll-to-top only applies to LATER route changes.
  const isFirstRender = useRef(true);

  // Layout effect, not effect: this runs before paint, so a new page never
  // flashes at the old page's scroll offset before jumping to the top.
  useLayoutEffect(() => {
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
      // Route change without a hash (e.g. footer → /privacy): start at the
      // top, instantly. The global scroll-behavior:smooth exists for in-page
      // anchors; letting it apply here makes a long destination page visibly
      // scroll upwards after the click while a short one jumps, so the same
      // footer links appear to behave differently from each other.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    isFirstRender.current = false;
  }, [location]); // Only run when location changes

  return null;
};
