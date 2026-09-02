"use client";
import { useEffect, useState } from "react";
function HeaderReveal({ children }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 110) {
        setIsVisible(true);
        currentScrollY > 300 ? setIsDark(true) : setIsDark(false);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isVisible]);
  return (
    <div
      className={`fixed top-0 left-0 w-full ${isDark && "bg-background/95"} bg-background transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } z-50`}
    >
      {children}
    </div>
  );
}

export default HeaderReveal;
