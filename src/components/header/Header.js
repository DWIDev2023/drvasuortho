"use client";
// import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarButtons from "./SidebarButtons";
import TopBanner from "./TopBanner";
import logo from "../../assets/images/logo.png";
import { useEffect, useRef } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export function ScriptInjector() {
  useEffect(() => {
    const scriptContent = `
      (function(w, d) { 
        w.CollectId = "66769c591063215eaa125c4e"; 
        var h = d.head || d.getElementsByTagName("head")[0]; 
        var s = d.createElement("script"); 
        s.setAttribute("type", "text/javascript"); 
        s.async = true; 
        s.setAttribute("src", "https://collectcdn.com/launcher.js"); 
        h.appendChild(s); 
      })(window, document);
    `;

    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("type", "text/javascript");
    scriptElement.async = true;
    scriptElement.innerHTML = scriptContent;
    document.head.appendChild(scriptElement);

    // Clean up script on component unmount
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);

  return null;
}

const Header = () => {
  const router = usePathname();
  const pathname = router;
  const prevPathName = useRef(null);


  useEffect(() => {
    if (pathname !== prevPathName.current) {
      const handleScroll = () => {
        
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        prevPathName.current = pathname;
      };
      setTimeout(handleScroll, 100); // Add a small delay before scrolling
    }
  }, [pathname]);

  return (
    <>
    <header className="container max-w-screen-3xl md:grid grid-cols-12 shadow-lg relative sticky top-0 bg-white z-[2]">
      <div className="col-span-12 relative">
        <div className="absolute col-span-2 justify-center top-0 2xl:left-[10%] xl:left-[3%] z-10 h-full flex items-center">
          <Link href={"/"} className="max-lg:hidden">
            <img
              className="w-100 h-100 w-16 md:w-32"
              src={logo.src}
              alt="Your Company"
            />
          </Link>
        </div>
        <TopBanner />
        <Navbar />
        <SidebarButtons />
      </div>
    </header>
    </>
  );
};

export default Header;
