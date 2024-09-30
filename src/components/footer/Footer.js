"use client";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import FooterCard from "./FooterCard";
import SocialIcons from "../header/SocialIcons";
import PageLinks from "../header/PageLinks";
import footerLogo from "../../assets/images/footer/footer-logo.png";
import doctor from "../../assets/images/footer/doctor.png";
import doctorFemale from "../../assets/images/footer/doctor-female.png";
import location from "../../assets/images/footer/location.png";
import CallUs from "./CallUs";
import FooterBg from "../../assets/images/footer/footer-bg.png";

// import { Link, useLocation } from "react-router-dom";
import NewAppointments from "../banners/NewAppointments";
import Topscroll from "../common/TopScroll";
import { useBlogData } from "../../controller/blogDataContext";
import { useEffect } from "react";
import { IconBrandFacebook } from "@tabler/icons-react";
import Link from "next/link";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/ourservices" },
  { name: "Second Opinion", href: "/secondOpinion" },
  { name: "Health Talk", href: "/healthTalk" },
  { name: "For Patients", href: "/forPatients" },
  { name: "Privacy Policy", href: "/privacyPolicy" },
  { name: "Careers", href: "/careers" },
];
const services = [
  {
    name: "Robotic Knee Replacement",
    href: "/ourservices#RoboticKneeReplacement",
  },
  {
    name: "Joint Replacement",
    href: "/ourservices#JointReplacement",
  },
  {
    name: "Sports Medicine",
    href: "/ourservices#SportsMedicine",
  },
  {
    name: "General Orthopedics",
    href: "/ourservices#GeneralOrthopedics",
  },
  {
    name: "Robotic Knee and Hip Surgeon in Hyderabad",
    href: "/landingRobotic",
  },
  {
    name: "Best Hip Replacement Surgeon Hyderabad",
    href: "/landingHip",
  },
  {
    name: "Best Knee Replacement Surgeon in Hyderabad",
    href: "/landingKnee",
  },
];

const cards = [
  {
    imgSrc: doctorFemale,
    title: "Dr.Vasudeva Juvvadi",
    description1: "M.D,D.M ENDOCRINOLOGY (Gold Medalist)",
    description2: "Consultant Endocrinologist & Diabetologist",
    timing1: "12:30PM - 2 PM (Mon-sat)",
    timing2: "6 PM - 9 PM (Mon-sat)",
    hrefName: "Best Endocrinologist in Hyderabad",
  },
  {
    imgSrc: doctor,
    title: "Dr.G Uday Kiran",
    description1: "MS, FMAS, FIAGES, EFIAGES, FALS (ROBOTIC)",
    description2: "General and Laparoscopic Surgeon",
    timing1: "12:30PM - 2 PM (Mon-sat)",
    hrefName: "Best General Surgeon in Hyderabad",
  },
  {
    imgSrc: location,
    title: "Reach Us",
    description1: "101, Siri Sampada Arcade, I,",
    description2: "Khajaguda - Nanakramguda Rd,",
    description3: "Behind Andhra Bank/UBl,",
    description4: "Khajaguda, Telangana, 500032.",
  },
];
const styles = {
  backgroundImage: "url(../../assets/images/footer/footer-bg.png)",
};

const Footer = () => {
  // const location = useLocation();
  // const currentUrl = location.pathname;
  const currentUrl = "";
  const doctors = useBlogData()?.doctors.slice(0, 2);
  useEffect(() => {}, [doctors]);
  return (
    <div>
      <Topscroll />
      {currentUrl !== "/" &&
        // !currentUrl.includes("landing") &&
        !currentUrl.includes("bestDoctorsDetails") &&
        !currentUrl.includes("excellenceDetails") &&
        !currentUrl.includes("about") && <CallUs />}
      <div className="container max-w-screen-3xl">
        {currentUrl !== "/" &&
          // !currentUrl.includes("landing") &&
          !currentUrl.includes("Detail") &&
          !currentUrl.includes("about") &&
          !currentUrl.includes("bookAppointment") && <NewAppointments />}

        <div className="bg-[#333333] text-white py-10 mobile-gap-x">
          <div className="">
            <div className="container md:grid lg:grid-cols-12 max-w-7xl md:pb-20 pb-10 xl:gap-16 lg:gap-5 font-light text-sm space-y-6">
              <div className="lg:col-span-3 col-span-7">
                <div className="md:px-2">
                  <Link href={"/"} data-aos="fade-up">
                    <img src={footerLogo.src} className="mb-5 w-24 h-24" />
                  </Link>
                  <h5 data-aos="fade-up">
                    Dr.Vasudeva Juvvadi is a best
                    <br /> orthopaedic doctor practising at <br />
                    citizens Hospital.
                  </h5>
                  <h4
                    className="text-lg font-medium my-2 leading-6"
                    data-aos="fade-up"
                  >
                    Follow us <br></br>on{" "}
                  </h4>
                </div>
                <div className="flex gap-1" data-aos="fade-up">
                  <a
                    href="https://www.facebook.com/OrthopedicTraumaCare"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandFacebookFilled
                      className="text-[#333333] bg-white rounded-full"
                      stroke={1}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/drvasudevaorthopaedician/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandInstagram className="text-white" size={25} />
                  </a>
                  <a
                    href="https://x.com/drvasudevaortho"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandTwitter className="text-white" size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/99259273/admin/feed/posts/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandLinkedin className="text-white" size={25} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCXp8rhCnY0oBzcR3fi8YZsg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandYoutube className="text-white" size={25} />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-2 col-span-5">
                <h4 className="text-lg font-medium">About Us</h4>
                <div>
                  <ul className="space-y-3 my-3">
                    {quickLinks.map((link, index) => {
                      return (
                        <li data-aos="fade-up" key={index}>
                          <Link
                            href={link.href}
                            className="opacity-75 hover:opacity-100"
                          >
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-7">
                <h4 className="text-lg font-medium">Services</h4>
                <div>
                  <ul className="text-left space-y-3 list-disc-default ps-4">
                    {services.map((service, index) => {
                      return (
                        <li data-aos="fade-up" key={index}>
                          <Link
                            href={service.href}
                            className="opacity-75 hover:opacity-100"
                          >
                            {service.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-3 col-span-5">
                <h4 className="text-lg font-medium">Contact Us</h4>
                <div className="leading-7">
                  <div className="flex gap-5" data-aos="fade-up">
                    <IconMapPinFilled />
                    <h5>
                      Citizens Hospital,1-100/1/CCH,
                      <br />
                      Citizens Hospital Rd, near Aparna
                      <br />
                      Cyber Life Nallagandla Hyderabad,
                      <br />
                      Telangana 500019
                    </h5>
                  </div>
                  <div className="flex gap-5" data-aos="fade-up">
                    <IconPhoneFilled />
                    <h5 className="my-2">+91 8885544844</h5>
                  </div>
                  <div className="flex gap-5" data-aos="fade-up">
                    <IconMailFilled />
                    <h5>juvvadivasudeva@gmail.com</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border-t font-light pt-3">
              <div className="max-w-7xl md:flex justify-between container">
                <p className="">
                  All Right Reserved Copyright@2024 Dr Vasu Juvvadi
                </p>
                <Link href={"https://klads.co.in/"} target="_blank">
                  {" "}
                  <p className="">Developed by Kl ADS INDIA PVT LTD</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
