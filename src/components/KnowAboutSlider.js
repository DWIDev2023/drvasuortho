import React from "react";
import Slider from "react-slick";
import doctor from "../assets/images/about/doctor-manasa.png";
import doctorUday from "../assets/images/about/doctors.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/slider.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import KnowMore from "./home/KnowMore";
import { useBlogData } from "../controller/blogDataContext";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IconArrowRight stroke={2} size={40} className="p-3" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IconArrowLeft stroke={2} size={40} className="p-3" />
    </div>
  );
}
const manasaSpecs = [
  "Thyroid Treatments - Hypothyroidism",
  "Diabetes - Type 1 Diabetes, Type 2 Diabetes",
  "Menopause",
  "Pituitary Disorders",
  "Osteoporosis",
  "Adrenal Conditions - Done",
  "Endocrine Cancers",
  "Endocrine-Related Heart Conditions",
  "Hormone Disorders",
  "Short Stature",
  "Growth Hormone Deficiency",
  "PCOS",
  "Fertility Disorders",
  "Obesity",
  "Nutrition",
];
const udaySpecs = [
  "General Surgery",
  "Laparoscopic GI Surgery",
  "Colorectal Surgery",
  "Gallbladder and Biliary Tract Surgery",
  "Hernia Surgery",
  "Bariatric Surgery",
  "Trauma Surgery",
  "Esophageal Surgery",
  "Small Bowel Surgery",
  "Pancreatic Surgery",
  "Liver Surgery",
  "Gastric Surgery",
  "Piles surgery",
  "Fistula surgery",
  "Diabetic Foot Treatment",
  "Breast Lump Treatment",
];

export default function KnowAboutSlider() {
  const doctors = useBlogData()?.doctors;
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          arrows: false, // Hide arrows on screens smaller than 768px
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {doctors?.map((doctor,index) => {
        return (
          <div key={index}>
            <KnowMore doctor={doctor} />
          </div>
        );
      })}
    </Slider>
  );
}
