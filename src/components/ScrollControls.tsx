import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";

function ScrollControls() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const innerH = window.innerHeight;
      const docH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

      setShowUp(scrollY > 120);
      setShowDown(scrollY + innerH < docH - 120);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="scroll-controls" aria-label="Scroll controls">
      {showUp && (
        <button type="button" className="scroll-control scroll-up" onClick={scrollToTop} aria-label="Scroll to top">
          <FaChevronUp />
        </button>
      )}

      {showDown && (
        <button type="button" className="scroll-control scroll-down" onClick={scrollToBottom} aria-label="Scroll to bottom">
          <FaChevronDown />
        </button>
      )}
    </div>
  );
}

export default ScrollControls;
