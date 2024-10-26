'use client'

import { useRef, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
// import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navHelp from "../../assets/images/home/nav-help.png";
import logo from "../../assets/images/logo.png";
import homeBorder from "../../assets/images/icons/home-nav.png";
import home from "../../assets/images/icons/home-icon.png";
import AppointmentModalOpener from "../AppointmentModalOpener";
import { IconMapPin } from "@tabler/icons-react";
import NavSlider from "./NavSlider";
import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const HomeLink = (
  <div>
    <img height={24} width={24} src={homeBorder.src} />
  </div>
);
export const HomeIcon = (
  <div>
    <img src={home} />
  </div>
);
const navigation = [
  { name: "Home", href: "/", current: true, desktopNav: true },
  {
    name: "Dr.Vasudeva Juvvadi",
    href: "/about",
    current: false,
    desktopNav: true,
  },
  {
    name: "Our Services",
    href: "/ourservices",
    current: false,
    desktopNav: true,
  },
  {
    name: "Second Opinion",
    href: "/secondOpinion",
    current: false,
    desktopNav: true,
  },
  {
    name: "Health Talk",
    href: "/healthTalk",
    current: false,
    desktopNav: true,
  },
  { name: "Blogs", href: "/blogs", current: false, desktopNav: true },
  {
    name: "For Patients",
    href: "/forPatients",
    current: false,
    desktopNav: false,
  },
  {
    name: "Privacy Policy",
    href: "/privacyPolicy",
    current: false,
    desktopNav: false,
  },
  { name: "Careers", href: "/careers", current: false, desktopNav: false },
  { name: "Contact", href: "/contact", current: false, desktopNav: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const router = usePathname();
  const pathname  = router;
//  const pathname = "/"
  const disclosureRef = useRef(null);

  const handleLinkClick = () => {
    if (disclosureRef.current) {
      disclosureRef.current.click(); // Close the mobile menu
      // Find the disclosure button inside the navbar
      const disclosureButton = document.querySelector(".mobile-navbar-toggle");
      // Check if the disclosure button exists
      if (disclosureButton) {
        // Toggle the disclosure panel by clicking the disclosure button
        disclosureButton.click();
      }
    }
  };

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto lg:py-4 xl:px-8">
            <div className="text-white lg:hidden">
              <div className="py-2 bg-theme-gradient text-center text-sm">
                Contact Number: <a href="tel:+918885544844">+91 88855 44844 </a>
              </div>
              <div className="">
                {/* <div className="py-2 text-center bg-theme-gradient2 text-sm endocrinologist transform fade-left">
                  Best Orthopedic Surgeon In Hyderabad
                </div>
                <div className="py-2 text-center bg-gradient-to-r from-[#07879A] to-[#97c7ce] text-sm generalSurgeon transform hidden fade-left">
                  Top Robotic Nee and Hip Surgeon
                </div> */}
                <NavSlider/>
              </div>
            </div>
            <div className="relative flex lg:h-16 items-center justify-between p-2">
              <Link className="lg:hidden" href={"/"}>
                <img className="w-24 h-100" src={logo.src} alt="Your Company" />
              </Link>
              <div className="inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mobile-navbar-toggle"
                  ref={disclosureRef}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <div>
                  <AppointmentModalOpener button={"Appointment"} />
                </div>
              </div>

              <div className="flex flex-1 justify-end items-center max-lg:hidden">
                <div className="flex items-center">
                <div className="hidden sm:block xl:ms-[130px]">
                    <div className="flex items-center">
                      {navigation.map((item) => {
                        return (
                          item.desktopNav && (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                (item.href === "/" && pathname === "/") ||
                                  (item.href !== "/" &&
                                    item.href === pathname) ||
                                  (pathname?.includes(item.href) &&
                                    item.href !== "/")
                                  ? "text-nav-highlight underline"
                                  : "hover:text-nav-highlight hover:underline",
                                "rounded-md px-3 py-2  font-medium text-xs xl:text-base"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          )
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="me-3 w-12 md:w-16">
                    <img src={navHelp.src} alt="help" />
                  </div>
                  <div>
                    <p className="text-sm">24x7 Help line</p>
                    <a
                      href="tel:+91 8885544844"
                      className="font-semibold text-cyan-900 text-sm"
                    >
                      +91 8885544844
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Off-canvas mobile menu */}
          <Disclosure.Panel
            className={`overflow-auto lg:hidden top-[184px] fixed inset-0 bg-theme-gradient text-white z-40 w-64 sm:w-80 transform transition-transform ease-in-out shadow-2xl ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="" ref={disclosureRef}>
              <div className="space-y-1 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleLinkClick()}
                    className={classNames(
                      (item.href === "/" && pathname === "/") ||
                        (item.href !== "/" && item.href === pathname) ||
                        (pathname?.includes(item.href) && item.href !== "/")
                        ? "underline"
                        : "hover:text-nav-highlight hover:underline",
                      "px-3 py-1 text-sm font-medium block border-b mx-2"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                <div>
                  <h3 className="text-white font-medium bg-highlight p-1.5">
                    Reach Us
                  </h3>
                  <p className="text-sm font-medium px-5 mt-2 flex items-center">
                    <div className="pe-2">
                      <IconMapPin />
                    </div>
                    1-100/1/CCH, Citizens Hospital Rd, near Aparna Cyber Life
                    Nalagandla Hyderabad, Telangana 500019.
                  </p>
                  <a href="tel:+91 8885544844" className="p-5">
                    {" "}
                    +91 88855 44844
                  </a>
                </div>
              </div>
              {/* Additional content */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
