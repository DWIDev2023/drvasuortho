import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles/slider.css";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import orthopedic from "../../assets/images/home/banners/orthopedic.png";
import orthopedic_centre from "../../assets/images/home/banners/orthopedic_centre.jpg";
import robotic from "../../assets/images/home/banners/robotic.png";
import BannerOne from "./BannerOne";

import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Set initial window width
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};



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

export default function HomeBannerSlider() {
  const windowWidth = useWindowWidth();

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
    afterChange: (index) => {
      if (windowWidth <= 578) {
        const generalSurgeon = document.getElementsByClassName(
          "generalSurgeon"
        )[0];
        const endocrinologist = document.getElementsByClassName(
          "endocrinologist"
        )[0];

        if (index % 2 === 0) {
          generalSurgeon.classList.add("hidden");
          endocrinologist.classList.remove("hidden");
        } else {
          endocrinologist.classList.add("hidden");
          generalSurgeon.classList.remove("hidden");
        }
      }
    },
  };

  return (
    <Slider {...settings}>
      <div>
        <BannerOne />
      </div>
      <div>
        <img
          src={windowWidth < 578 ? '' : orthopedic.src}
          className="w-full h-full"
        />
      </div>
      <div>
        <img
          src={windowWidth < 578 ? '' : robotic.src}
          className="w-full h-full"
        />
      </div>
      <div>
        <img
          src={orthopedic_centre.src}
          className="w-full h-[150px] lg:h-full"
        />
      </div>
      <div>
        <BannerOne />
      </div>
      <div>
        <img
          src={windowWidth < 578 ? '' : orthopedic.src}
          className="w-full h-full"
        />
      </div>
      <div>
        <img
          src={windowWidth < 578 ? '' : robotic.src}
          className="w-full h-full"
        />
      </div>
      <div>
        <img
          src={orthopedic_centre.src}
          className="w-full h-[150px] lg:h-full"
        />
      </div>
      <div>
        <BannerOne />
      </div>
      <div>
        <img
          src={windowWidth < 578 ? '' : orthopedic.src}
          className="w-full h-full"
        />
      </div>
      <div>
        <img
          src={windowWidth < 578 ? '' : robotic.src}
          className="w-full h-full"
        />
      </div>
      <div>
        <img
          src={orthopedic_centre.src}
          className="w-full h-[150px] lg:h-full"
        />
      </div>
      <div>
        <BannerOne />
      </div>
      <div>
        <img
          src={windowWidth < 578 ? '' : orthopedic.src}
          className="w-full h-full"
        />
      </div>
      <div>
        <img
          src={windowWidth < 578 ? '' : robotic.src}
          className="w-full h-full"
        />
      </div>
      <div>
        <img
          src={orthopedic_centre.src}
          className="w-full h-[150px] lg:h-full"
        />
      </div>
    </Slider>
  );
}
