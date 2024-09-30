"use client";
import Logo from "../../assets/images/logo.png";
import welcomeBg from "../../assets/images/home/banners/welcome-banner.png";
import general from "../../assets/images/home/departments/general.png";
import sports from "../../assets/images/home/departments/sports.png";
import joint from "../../assets/images/home/departments/joint.png";
import robotic from "../../assets/images/home/departments/robotic.png";
import orthopedicBg from "../../assets/images/home/backgrounds/orthopedic.png";
import orthoDoctor from "../../assets/images/home/doctor-orthopedic.png";
import questionsBg from "../../assets/images/home/backgrounds/questions.png";
import roboticJoint from "../../assets/images/home/robotic.png";
import clipBoard from "../../assets/images/icons/clipboard.png";
import money from "../../assets/images/icons/money.svg";
import dependable from "../../assets/images/icons/dependable.svg";
import accessibility from "../../assets/images/icons/accessibility.svg";
import reviewsBg from "../../assets/images/home/backgrounds/reviews-bg.png";
import googleReviews from "../../assets/images/home/google-reviews.png";

import AppointmentSchedule from "../AppointmentSchedule";
import TestimonialSlide from "../TestimonialSlide";
import BlogsSlider from "../BlogsSliderHome";
import NewAppointments from "../banners/NewAppointments";
import HealthTalksTabs from "./HeathTalksTabs";
import Heading from "../common/Heading";
import { useEffect, useRef, useState } from "react";
import { useBlogData } from "../../controller/blogDataContext";
import { useServicesData } from "../../controller/servicesDataContext";
import ChevronButton from "./ChevronButton";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import RequestCallBack from "../pages/RequestCallBack";
import Link from "next/link";
import BannerOne from "./BannerOne";
import HomeBannerSlider from "./HomeBannerSlider";

const AutoRotatingTabs = ({ tabs, panels }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false); // State to track hovering over the panel
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const tabRefs = useRef([]);
  useEffect(() => {
    let interval;
    if (!isHovering && isInView) {
      interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % tabs.length);
      }, 5000); // Rotate tabs every 5000 ms (5 seconds)
    }

    return () => clearInterval(interval);
  }, [tabs.length, isHovering, isInView]); // Include isHovering in the dependency array

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (tabRefs.current[selectedIndex]) {
      tabRefs.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedIndex]);

  return (
    <div ref={sectionRef}>
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="space-x-5 flex md:justify-center border-b pb-5 mb-5 overflow-auto">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`whitespace-nowrap hover:bg-theme-gradient2 hover:text-white px-4 py-2 rounded-lg border-${
                selectedIndex === index ? "theme-gradient2" : "[#4D4D4D]"
              } border data-[selected]:bg-theme-gradient2 data-[selected]:text-white`}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {panels.map((panel, index) => (
            <TabPanel
              key={index}
              className="flex justify-center"
              onMouseEnter={() => setIsHovering(true)} // Pause the rotation when the mouse enters the panel
              onMouseLeave={() => setIsHovering(false)} // Resume the rotation when the mouse leaves the panel
            >
              <div>{panel}</div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

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

const Homepage = () => {
  const blogs = useBlogData()?.allblogs.filter((blog) => blog.type === 0);
  const firstVideo = useBlogData()
    ?.allblogs.filter((blog) => blog.type === 1)
    .slice(0, 1)[0];
  const testimonials = useBlogData()?.reviews.slice(0, 10);
  const services = useServicesData()?.slice(0, 10);
  const [mainVideoSrc, setMainVideoSrc] = useState(firstVideo?.videosrc);
  const updateMainVideoSrc = (videosrc) => {
    setMainVideoSrc(videosrc);
  };

  useEffect(() => {
    setMainVideoSrc(firstVideo?.videosrc);
  }, [firstVideo]);

  const features = [
    {
      text1: "Advanced Technology",
      text2: "and Expertise",
      iconSize: 48,
      image: clipBoard,
    },
    { text1: "Accessible", iconSize: 48, image: accessibility },
    { text1: "Reliable", iconSize: 48, image: dependable },
    { text1: "Affordable", iconSize: 48, image: money },
  ];
  const departments = [
    {
      icon: robotic,
      title: "Robotic Knee Replacement",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "RoboticKneeReplacement",
    },
    {
      icon: general,
      title: "Joint Replacement",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "JointReplacement",
    },
    {
      icon: sports,
      title: "Sports Medicine",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "SportsMedicine",
    },
    {
      icon: joint,
      title: "General Orthopedics",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      id: "GeneralOrthopedics",
    },
  ];
  const tabs = [
    "Robotic Knee Replacement",
    "Joint Replacement",
    "Sports Medicine",
    "General orthopedics",
    "Physiotherapy",
  ];
  const panels = [
    <div className="md:grid grid-cols-2 gap-5" key={0}>
      <div className="md:px-16">
        <img src={roboticJoint.src} className="" />
      </div>
      <div className="md:p-6 md:shadow-xl rounded">
        <h1 className="text-xl text-[#025CAF] font-semibold">
          Robotic Knee Replacement
        </h1>

        <p className="">
          Robotic knee replacement surgery represents a revolutionary
          advancement in orthopedics, offering unparalleled precision and
          efficiency. Dr. Vasudeva Juvvadi, a prominent surgeon in Hyderabad,
          specializes in this innovative approach. By integrating robotic
          technology, Dr. Vasudeva ensures precise alignment and placement of
          knee implants, tailored to each patient&apos;s unique anatomy. This method
          not only enhances surgical outcomes but also promotes faster recovery
          times and improved joint function. Patients benefit from Dr.
          Vasudeva&apos;s expertise and compassionate care, receiving comprehensive
          support throughout their treatment journey. His commitment to
          excellence in robotic knee replacement has made him a trusted choice
          for those seeking effective and advanced orthopedic solutions in
          Hyderabad and beyond.
        </p>
        <div className="flex justify-end mt-3 item-center">
          <Link href="/ourservices#RoboticKneeReplacement">
            <button className="px-6 py-2 text-xs text-white  transition-colors duration-300 transform btn-theme-gradient2 rounded ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>,
    <div className="md:grid grid-cols-2 gap-5"  key={1}>
      <div className="md:px-16">
        <img src={roboticJoint.src} className="" />
      </div>
      <div className="md:p-6 md:shadow-xl rounded">
        <h1 className="text-xl text-[#025CAF] font-semibold">
          Joint Replacement
        </h1>

        <p className="">
          Dr. Vasudeva Juvvadi excels in joint replacement surgery in Hyderabad,
          specializing in advanced techniques for hip and knee joints. With
          extensive experience and a commitment to patient care, he offers
          customized treatment plans that prioritize optimal outcomes and rapid
          recovery. Dr. Vasudeva utilizes cutting-edge technology to ensure
          precise implant positioning and alignment, enhancing joint function
          and longevity. His approach combines surgical expertise with
          compassionate care, guiding patients through every step of their
          journey to improved mobility and quality of life. Recognized for his
          skill and dedication, Dr. Vasudeva is a respected figure in orthopedic
          surgery, known for delivering exceptional results in joint replacement
          procedures.
        </p>
        <div className="flex justify-end mt-3 item-center">
          <Link href="/ourservices#RoboticKneeReplacement">
            <button className="px-6 py-2 text-xs text-white  transition-colors duration-300 transform btn-theme-gradient2 rounded ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>,
    <div className="md:grid grid-cols-2 gap-5" key={2}>
      <div className="md:px-16">
        <img src={roboticJoint.src} className="" />
      </div>
      <div className="md:p-6 md:shadow-xl rounded">
        <h1 className="text-xl text-[#025CAF] font-semibold">
          Sports Medicine
        </h1>

        <p className="">
          Dr. Vasudeva Juvvadi is a distinguished figure in sports medicine in
          Hyderabad, specializing in the diagnosis, treatment, and prevention of
          sports-related injuries. With a deep understanding of athletes&apos; needs,
          he offers personalized care that integrates cutting-edge treatments
          and rehabilitation strategies. Dr. Vasudeva&apos;s approach emphasizes not
          only healing but also enhancing athletic performance and preventing
          future injuries. His expertise spans a wide range of sports injuries,
          from ligament tears to joint dislocations, ensuring athletes receive
          comprehensive and effective treatment. Known for his compassionate
          demeanor and commitment to excellence, Dr. Vasudeva is dedicated to
          helping athletes of all levels recover swiftly and safely, enabling
          them to return to peak performance. His contributions to sports
          medicine have established him as a trusted healthcare provider among
          athletes and sports enthusiasts alike in Hyderabad.
        </p>
        <div className="flex justify-end mt-3 item-center">
          <Link href="/ourservices#RoboticKneeReplacement">
            <button className="px-6 py-2 text-xs text-white  transition-colors duration-300 transform btn-theme-gradient2 rounded ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>,
    <div className="md:grid grid-cols-2 gap-5" key={3}>
      <div className="md:px-16">
        <img src={roboticJoint.src} className="" />
      </div>
      <div className="md:p-6 md:shadow-xl rounded">
        <h1 className="text-xl text-[#025CAF] font-semibold">
          General orthopedics
        </h1>

        <p className="">
          Dr. Vasudeva Juvvadi is highly regarded in general orthopedics in
          Hyderabad, offering comprehensive care for a wide range of
          musculoskeletal conditions. With a focus on evidence-based practices
          and patient-centered treatment, he addresses issues such as fractures,
          arthritis, and spine disorders with expertise and compassion. Dr.
          Vasudeva employs advanced diagnostic techniques and treatment options,
          including both surgical and non-surgical interventions, tailored to
          each patient&apos;s specific needs and lifestyle. His dedication to
          excellence and commitment to improving quality of life through
          orthopedic care make him a trusted choice for individuals seeking
          reliable and effective treatment in Hyderabad. Whether managing
          chronic conditions or acute injuries, Dr. Vasudeva ensures that
          patients receive personalized attention and comprehensive support
          throughout their orthopedic journey.
        </p>
        <div className="flex justify-end mt-3 item-center">
          <Link href="/ourservices#RoboticKneeReplacement">
            <button className="px-6 py-2 text-xs text-white  transition-colors duration-300 transform btn-theme-gradient2 rounded ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>,
    <div className="md:grid grid-cols-2 gap-5" key={4}>
      <div className="md:px-16">
        <img src={roboticJoint.src} className="" />
      </div>
      <div className="md:p-6 md:shadow-xl rounded">
        <h1 className="text-xl text-[#025CAF] font-semibold">Physiotherapy</h1>

        <p className="">
          Dr. Vasudeva Juvvadi provides specialized physiotherapy services in
          Hyderabad, focusing on rehabilitative care for musculoskeletal
          injuries and conditions. His approach integrates evidence-based
          practices with personalized treatment plans to optimize recovery and
          restore function. Dr. Vasudeva collaborates closely with patients to
          design tailored rehabilitation programs that address their specific
          needs and goals. Whether recovering from surgery, managing chronic
          pain, or enhancing mobility, he emphasizes a holistic approach to
          physiotherapy that encompasses manual therapy, therapeutic exercises,
          and patient education. Dr. Vasudeva&apos;s expertise and dedication ensure
          that each patient receives comprehensive care and support to achieve
          optimal musculoskeletal health and well-being. His contributions to
          physiotherapy in Hyderabad underscore his commitment to enhancing
          quality of life through effective rehabilitation strategies.
        </p>
        <div className="flex justify-end mt-3 item-center">
          <Link href="/ourservices#RoboticKneeReplacement">
            <button className="px-6 py-2 text-xs text-white  transition-colors duration-300 transform btn-theme-gradient2 rounded ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>,
  ];

  return (
    <>
      <div>
        {/* doctor  */}
        <div className="home-main-banner">
          <div className="lg:hidden">
          <BannerOne />
          </div>
          <div className="hidden lg:block">
          <HomeBannerSlider />
          </div>
        </div>
        {/* call back  */}
        <div className="bg-theme-gradient py-10">
          <div className="max-w-7xl container mobile-gap-x" data-aos="fade-up">
            <RequestCallBack callBackOne={true} />
          </div>
        </div>
        {/* welcome  */}
        <div
          style={{ backgroundImage: `url(${welcomeBg.src})` }}
          className="bg-contain max-sm:bg-cover py-6 bg-no-repeat mb-7 bg-blend-overlay max-sm:bg-white max-sm:bg-opacity-60"
        >
          <div className="container lg:max-w-6xl max-w-3xl py-4 mobile-gap-x">
            <div className="md:grid lg:grid-cols-12 grid-cols-6 gap-10 bg-contain items-center max-sm:space-y-4">
              <div className="lg:col-span-5 col-span-4">
                <h3
                  className="md:text-2xl text-xl font-semibold mb-4 uppercase"
                  data-aos="zoom-in"
                >
                  WELCOME TO DR.Vasudeva JUVVADI
                </h3>
                <p className="leading-6 text-content2" data-aos="zoom-in">
                  Best Orthopedic Doctor in Hyderabad - Dr. Vasudeva Juvvadi has
                  22 years of experience as an Orthopedic doctor in Hyderabad.
                  He is the best knee replacement surgeon in Hyderabad. He is a
                  renowned revision knee and hip and trauma surgeon. He has
                  hands-on experience and expertise in the diagnosis, treatment,
                  and management of common and complex Orthopedic conditions.
                  Being the top orthopedic doctor in Hyderabad and with
                  expertise in knee replacement and reconstructive surgery, he
                  regularly deals with complex joint replacement. Dr. Vasudeva
                  is a Consultant Orthopedic and Joint Replacement Surgeon at
                  CITIZENS HOSPITAL Nallagandla, Hyderabad. He holds a
                  fellowship in joint replacement. He worked at best orthopedic
                  hospital in Gachibowli.
                </p>
              </div>
              <div className="col-span-3">
                <div className="flex flex-col space-y-2">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      data-aos="zoom-in"
                      className="flex items-center space-x-2 border-[0.5px] border-[#EBEBEB] text-[#0B2A46] py-1 px-3 rounded bg-white"
                    >
                      <div className="bg-theme-gradient2 rounded-full p-2 w-[47px] h-[47px] flex justify-center items-center">
                        <img src={feature.image.src} />
                      </div>
                      <div className="text-content2">
                        <p className="leading-5">{feature.text1}</p>
                        <p className="leading-5">{feature.text2}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* departments  */}
        <div className="bg-[#F6F9FF]">
          <div className="container max-w-6xl pt-6 pb-14 mobile-gap-x">
            <div className="md:grid lg:grid-cols-12 lg:gap-20 gap-10">
              <div className="lg:col-span-3 col-span-5" data-aos="fade-up">
                <Heading
                  heading={"Departments"}
                  text1={"Our"}
                  text2={"Departments"}
                />
                <p className="mt-5">
                  Explore our diverse range of departments, each dedicated to
                  providing exceptional services and specialized care.
                </p>
              </div>
              <div className="md:grid grid-cols-2 justify-around mt-4 col-span-8 md:divide-x">
                {departments.map((department, index) => (
                  <Link
                    key={index}
                    href={"/ourservices#" + department.id}
                    className="hover:shadow-lg  flex max-sm:justify-start items-center md:gap-10 gap-4 border-b p-6 px-8"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      data-aos="fade-up"
                    >
                      <img src={department.icon.src} alt={department.title} />
                    </div>
                    <div data-aos="fade-up">
                      <h2 className="mt-2 md:text-lg text-[#707070] text-sm ">
                        {department.title}
                      </h2>
                      <p className="mt-1 text-[#666666] font-semibold md:text-base hover:underline hover:underline-offset-4 hover:text-highlight">
                        Explore
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex justify-end mt-5 text-[#666666] text-sm">
              <ChevronButton text="View All Services" link="/ourservices" />
            </div>
          </div>
        </div>
        {/* orthopedic  */}
        <div
          className="bg-contain bg-no-repeat py-8 mobile-gap-x"
          style={{ backgroundImage: `url(${orthopedicBg.src})` }}
        >
          <div className="container max-w-6xl">
            <div className="md:grid grid-cols-12 items-center gap-5">
              <div className="md:flex-shrink-0 col-span-3" data-aos="zoom-in">
                <img
                  className=""
                  src={orthoDoctor.src}
                  alt="Doctor's profile"
                />
              </div>
              <div className="lg:p-8 lg:col-span-8 col-span-9">
                <div className="shadow-orthopedic md:px-4 py-3 rounded space-y-3">
                  <span
                    className="leading-tight bg-[#C3E5FF] px-3 py-2 rounded-xl"
                    data-aos="fade-up"
                  >
                    Orthopedic
                  </span>
                  <div
                    className="uppercase md:text-2xl text-lg"
                    data-aos="fade-up"
                  >
                    Dr.Vasudeva Juvvadi
                  </div>
                  <table className="divide-y border-t text-sm">
                    <tbody>
                      <tr data-aos="fade-up">
                        <td className="text-gray-500 py-3">Experience:</td>
                        <td>22 years of experience</td>
                      </tr>
                      <tr data-aos="fade-up">
                        <td className="text-gray-500 py-3">Experience:</td>
                        <td>
                          Dr. Vasudeva Juvvadi is a Best orthopaedic doctor
                          practising at Citizens Hospital. He has a remarkable 22
                          years of experience in this field of orthopaedics. He
                          completed MBBS from the prestigious Dr. NTR University
                          of Health Sciences Andhra Pradesh and MS in Orthopaedics
                          from JJMMC Davangere RGUHS Bangalore.
                        </td>
                      </tr>
                      <tr data-aos="fade-up">
                        <td className="text-gray-500 py-3">Education:</td>
                        <td>MBBS, MS - Orthopaedics</td>
                      </tr>
                      <tr data-aos="fade-up">
                        <td className="text-gray-500 py-3">Expertise Services:</td>
                        <td>
                        <ul className="list-disc">
                          <li>Robotic Knee and Hip Surgeon </li>
                          <li>Trauma and Complex Fracture Fixation </li>
                          <li>Total Knee and Hip Replacement </li>
                          <li>Reconstructive Surgery </li>
                          <li>Failed Trauma Cases</li>
                        </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="mt-4 md:flex justify-between max-sm:space-y-4"
                  data-aos="fade-up"
                >
                  <ChevronButton
                    text={"Make An Appointment"}
                    bg={"btn-theme-gradient2"}
                    color={"text-white"}
                    link={"bookAppointment"}
                  />
                  <ChevronButton
                    text={"View More"}
                    bg={"btn-theme-gradient2"}
                    color={"text-white"}
                    link={"about"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* excellence  */}
        <div className="bg-theme-gradient py-10 mobile-gap-x">
          <div className="container max-w-5xl md:flex justify-center gap-8 items-center text-white text-center max-sm:space-y-4">
            <div
              className="flex items-center justify-center gap-3"
              data-aos="fade-up"
            >
              <div>
                <div className="bg-theme-gradient2 border border-white rounded-full text-white p-5 h-16 w-16 flex justify-center items-center">
                  22
                </div>
              </div>
              <div className="text-start">
                Years Excellence in <br></br> Orthopedics
              </div>
            </div>
            <div className="border-bottom md:border-right border md:h-12"></div>
            <div data-aos="fade-up">
              <div>30,000+</div>
              <div>Happy Patients</div>
            </div>
            <div className="border-bottom md:border-right border md:h-12"></div>
            <div data-aos="fade-up">
              <div>10,000+</div>
              <div>Ortho Surgeries</div>
            </div>
            <div className="border-bottom md:border-right border md:h-12"></div>
            <div data-aos="fade-up">
              <div>15+</div>
              <div>Awards</div>
            </div>
          </div>
        </div>
        {/* questions */}
        <div
          style={{ backgroundImage: `url(${questionsBg.src})` }}
          className="bg-no-repeat bg-cover max-sm:bg-[#e0e4e7] mobile-gap-x max-sm:pt-10 max-sm:bg-cover"
        >
          <div className="container max-w-6xl md:py-20 lg:grid grid-cols-12">
            <div className="col-span-5">
              <div className="md:pb-5" data-aos="fade-up">
                <Heading
                  heading={"Have a Questions? Chat with professional"}
                  text1={"Don't put up with pain!"}
                  text2={"Make an appointment"}
                />
              </div>
              <div className="md:mt-20 max-sm:my-4" data-aos="fade-up">
                <RequestCallBack />
              </div>
            </div>
          </div>
        </div>
        {/* tabs  */}
        <section className="max-w-6xl container">
          <div className="my-10">
            <AutoRotatingTabs tabs={tabs} panels={panels} />
          </div>
        </section>
        {/* Health talks section starts */}
        <section className="mb-0">
          <div className="bg-banner md:p-16 max-sm:py-8 mobile-gap-x">
            <div className="max-w-6xl container">
              <Heading heading={"Doctor"} text1={"Health Talks"} />
              <div className="lg:grid lg:grid-cols-12 md:mx-0 ">
                <div className="col-span-3 mx-4 md:mx-0 max-lg:hidden md:mt-16">
                  <img src={Logo.src} className="m-auto w-24" />
                  <h3 className="md:text-2xl text-xl font-semibold py-3">
                    Connect with Dr.Vasudeva Juvvadi
                  </h3>
                  <p className="mb-2 text-[#606060]">
                    Join us for insightful health talks with Dr. Vasudeva
                    Juvvadi. Discover expert advice and the latest in medical
                    knowledge to help you stay informed and healthy.
                  </p>
                </div>
                <div className="col-span-5 m-4 mb-0">
                  <iframe
                    className="w-full max-sm:h-[200px] rounded"
                    src={mainVideoSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    height={350}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="col-span-4">
                  <HealthTalksTabs onSelectVideo={updateMainVideoSrc} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Health talks section ends */}
        {/* new patients appointments banner start */}
        <section className="mt-0">
          <div>
            <NewAppointments />
          </div>
        </section>
        {/* new patients appointments banner end */}
        {/* blogs section  */}
        <div
          className="md:pb-4 pt-8 blogs flex flex-col justify-center container max-w-6xl mobile-gap-x"
          id="homeBlogs"
        >
          <div>
            <Heading heading={"Doctors"} text1={"Our Latest Blogs"} />
            <div className="md:grid xl:grid-cols-10 lg:grid-cols-8 justify-end items-center">
              <div className="xl:col-span-10 lg:col-span-7">
                <BlogsSlider slides={blogs} />
              </div>
            </div>
          </div>
        </div>
        {/* blogs section  */}
        {/* know about section ends  */}

        {/* testimonials section  */}
        <div
          id="homeTestimonials"
          style={{ backgroundImage: `url(${reviewsBg.src})` }}
          className="bg-contain bg-no-repeat mt-10 bg-[#e7eaed] mobile-gap-x"
        >
          <div className="testimonial max-w-6xl container pt-10 pb-20">
            <Heading
              heading={"What Patient's Say"}
              text1={"Recent Important Stories"}
              text2={"Daily Updated"}
            />
            <div className="my-3">
              <img src={googleReviews.src} />
            </div>
            <div className="flex flex-col justify-center relative">
              <TestimonialSlide testimonials={testimonials} />
            </div>
          </div>
        </div>

        {/* faq starts  */}
        <div className="bg-theme-gradient">
          <div className="max-w-7xl container max-sm:space-y-4 py-10">
            <AppointmentSchedule home={true} />
          </div>
        </div>

        {/* faq ends */}
      </div>
    </>
  );
};
export default Homepage;
