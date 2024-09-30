import React, { useState, useEffect } from "react";
import { IconArrowUp } from "@tabler/icons-react";

const Topscroll = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex">
      {visible && (
        <a
          className="rounded-full fixed bottom-5 right-10 top_scroll btn-theme text-white p-2"
          onClick={scrollToTop}
        >
          <IconArrowUp size={24} className="animate-bounce" />
        </a>
      )}
    </div>
  );
};

export default Topscroll;
