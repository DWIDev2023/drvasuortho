import { IconChevronRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import bannerBg from "../../assets/images/home/banners/banner-bg.jpg";
import clockBlue from "../../assets/images/icons/clock-blue.png";
import medKit from "../../assets/images/icons/med-kit.png";
import Link from "next/link";

const TypingEffect = ({
  text,
  speed = 150,
  delay = 1000,
  loop = true,
  className = "",
}) => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      if (!isDeleting && typedText.length === text.length) {
        if (loop) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, delay);
        }
      } else if (isDeleting && typedText.length === 0) {
        if (loop) {
          setIsDeleting(false);
        }
      } else {
        timer = setInterval(() => {
          setTypedText((currentText) =>
            isDeleting
              ? currentText.slice(0, -1)
              : currentText + text.charAt(currentText.length)
          );
        }, speed);
      }
    };

    handleTyping();
    return () => clearInterval(timer);
  }, [typedText, isDeleting, text, delay, speed, loop]);

  return <span className={`${className} typing`}>{typedText}</span>;
};
const BannerOne = () => {
  return (
    <>
      <div
        className="flex justify-center items-center bg-no-repeat bg-contain md:py-36 py-6 bg-[#f6f9ff] max-sm:bg-cover "
        style={{ backgroundImage: `url(${bannerBg.src})` }}
      >
        <div className="max-sm:mt-48">
          <div className="max-sm:space-y-4 p-4 ">
            {/* <h1 className="text-content2 font-medium md:text-3xl text-xl">Dr. Vasudeva Juvvadi</h1> */}
            <TypingEffect
              text="Dr. Vasudeva Juvvadi"
              speed={100}
              delay={2000}
              loop={false}
              className="text-content2 font-medium md:text-3xl text-xl"
            />
            <div className="space-y-2 text-content2 text-xs mt-2">
              <p>MBBS, MS (Ortho), Fellowship in Joint Replacement</p>
              <p>Consultant Orthopedic and Joint Replacement Surgeon</p>
            </div>
          </div>
          <div className="flex max-sm:flex-col mobile-gap-x mt-5 text-content3 text-sm gap-4 ">
            <div className="flex-1">
              <Link
                href={"/bookAppointment"}
                className="rounded px-4 py-2 focus:outline-none flex shadow-3xl whitespace-nowrap items-center space-x-3 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div>
                  <img src={clockBlue.src} className="max-w-[32px]" />
                </div>
                <span>Schedule an Appointment</span>
                <IconChevronRight />
              </Link>
            </div>
            <div className="flex-1">
              <Link
                href={"/ourservices"}
                className="rounded px-4 py-2 focus:outline-none flex shadow-3xl items-center whitespace-nowrap  space-x-3 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div>
                  <img src={medKit.src} className="max-w-[32px]" />
                </div>{" "}
                <span>Explore Our Services</span> <IconChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BannerOne;
