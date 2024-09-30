import { Link, useParams } from "react-router-dom";
import BlogsSliderDetail from "../BlogsSliderDetail";
import DoctorServices from "../DoctorServices";
import NewAppointments from "../banners/NewAppointments";
import Heading from "../common/Heading";
import { useEffect, useRef, useState } from "react";
import NeedHelp from "../banners/NeedHelp";
import AppointmentFormDetail from "./AppointmentFormDetail";
import { useBlogData } from "../../controller/blogDataContext";
import { ASSET_URL } from "../../controller/config";
import Qualifications from "../Qualifications";
import FormatHtml from "../FormatHtml";
import { Helmet } from 'react-helmet-async';


const DoctorDetails = () => {
  const { doctorUrl } = useParams();
  const [metaTags, setMetaTags] = useState({
    title: "Best Endocrinologist in Hyderabad | Dr. Vasudeva Juvvadi",
    description:
      "Dr Vasudeva Juvvadi is the ideal of excellence in endocrinology, dedicated to transforming lives with unparalleled expertise and compassionate care in Hyderabad.",
    keywords:
      "Best endocrinologists, Top endocrinologists in Hyderabad, Endocrinology specialists in Hyderabad, Diabetes specialists Hyderabad, Thyroid specialists in Hyderabad, Hormone disorder experts Hyderabad, Best endocrinology centers in Hyderabad",
  });
  const tabs = [
    { name: "About Us", href: "about" },
    { name: "Qualification", href: "qualification" },
    { name: "Services", href: "services" },
    { name: "Blogs", href: "blogs" },
    { name: "Videos", href: "videos" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const [isFixed, setIsFixed] = useState(null);
  const [height, setHeight] = useState(0);
  const tabsRef = useRef([]);
  const sectionsRef = useRef([]);
  const bannerRef = useRef(null);
  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = bannerRef.current.offsetHeight;
      const scrollPosition = window.pageYOffset;
      const scrollOffset = isFixed ? bannerHeight + 144 : bannerHeight;

      // Calculate the scroll position for each section
      const tabPositions = tabs.map((tab) => {
        const element = document.getElementById(tab.href);
        return element ? element.offsetTop - scrollOffset : 0; // Check if element exists
      });

      // Calculate the top position of each section relative to the scroll position
      const sectionTops = sectionsRef.current.map((section) => {
        return section.offsetTop - scrollOffset;
      });

      // Find the index of the section currently in view
      let activeTabIndex = 0;
      for (let i = sectionTops.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionTops[i]) {
          activeTabIndex = i;
          break;
        }
      }
      // Find the index of the section currently in view
      let activeSectionIndex = -1;
      for (let i = 0; i < sectionTops.length; i++) {
        if (sectionTops[i] > 0 && sectionTops[i] < window.innerHeight / 2) {
          activeSectionIndex = i;
          break;
        }
      }

      // If no section is below the current scroll position, activate the last tab
      // setActiveTab(activeSectionIndex);
      // Update the active tab
      setActiveTab(activeTabIndex);

      // Set the fixed state based on the scroll position
      setIsFixed(scrollPosition > bannerHeight + 144);
    };

    const updateBannerHeight = () => {
      setHeight(bannerRef.current?.offsetHeight || 0); // Added optional chaining
    };

    updateBannerHeight(); // Initial height calculation

    // Attach event listener for scrolling
    if (window.innerWidth > 768)
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  useEffect(()=>{
    // Update meta tags based on service ID
    let title = "";
    let description = "";
    let keywords = "";
    switch (doctorUrl) {
      case "dr-manasa-mynepally": // Laparoscopic Endoscopy Doctor
        title =
          "Best Thyroid Doctor in Hyderabad";
        description =
          "Dr. Vasudeva Juvvadi stands out as Hyderabad's premier thyroid specialist, renowned for her expertise and compassionate patient care.";
        keywords =
          "Thyroid specialists, Thyroid doctor Hyderabad, Best Doctor In Hyderabad, Thyroid Near Me";
        break;
      case "dr-G-UDAY-KIRAN": // Best General Surgeon Doctor in Hyderabad
        title =
          "Best Laparoscopic Doctor In Hyderabad |Dr.G Uday Kiran";
        description =
          "Dr G Uday Kiran stands out as Hyderabad's premier laparoscopic surgeon, renowned for expertise, precision, and compassionate care, delivering optimal outcomes.";
        keywords =
          "Laparoscopic surgery, Best laparoscopic doctors, Top laparoscopic surgeons, Laparoscopic specialists, Best laparoscopic surgeon in Hyderabad";
        break;
        default:
        break;
        }
        setMetaTags({
          title,
          description,
          keywords,
        });
  },[])
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };
  const topHeight = `top[144px ${height}px]`;
  const doctorDetails = useBlogData()?.doctors.filter(
    (doctorDetail) => doctorDetail.urlname === doctorUrl
  )[0];
  const doctorBlogs = useBlogData()?.allblogs.filter(
    (blog) => blog.doctorid === doctorDetails._id
  );
  const testimonials = useBlogData()?.reviews.filter(
    (review) => review.doctorid === doctorDetails._id
  );
  if (window.innerWidth <= 578) {
    const generalSurgeon = document.getElementsByClassName("generalSurgeon")[0];
    const endocrinologist = document.getElementsByClassName(
      "endocrinologist"
    )[0];

    if (doctorDetails?.department === "1") {
      generalSurgeon?.classList.add("hidden");
      endocrinologist?.classList.remove("hidden");
    } else {
      endocrinologist?.classList.add("hidden");
      generalSurgeon?.classList.remove("hidden");
    }
  }
  return (
    <div className="doctor-details">
            <Helmet>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />
      <meta name="keywords" content={metaTags.keywords} />
    </Helmet>
      <div>
        <div ref={bannerRef} className="relative">
          <img
            src={ASSET_URL + doctorDetails?.doctorbanner}
            className="w-full"
          />
          <div className="md:absolute right-[15%] top-[50%] md:transform md:-translate-y-1/2">
            <AppointmentFormDetail details={doctorDetails} />
          </div>
        </div>
      </div>
      <div
        className={`max-sm:hidden transition-all duration-300 fixed ${
          isFixed ? "top-[144px]" : topHeight
        } z-[1]`}
      >
        {/* <ScrollTo tabs={tabs} ref={tabsRef} /> */}
        <div className="">
          {tabs.map((tab, index) => (
            <button
              key={index}
              ref={(el) => (tabsRef.current[index] = el)}
              onClick={() => {
                setActiveTab(index);
                scrollToSection(index);
              }}
              className={`rounded-l-none rounded-lg flex w-[180px] my-1 py-2 bg-slate-200 hover:btn-theme ${
                activeTab === index ? "btn-theme" : "ps-1"
              }`}
            >
              {tab.name}
            </button>
          ))}
          <button
            onClick={handleScrollToTop}
            className="rounded-l-none rounded-lg flex w-[180px] my-1 py-2 bg-slate-200 hover:btn-theme ps-1"
          >
            Back to Top
          </button>
        </div>
      </div>
      <div className="max-w-6xl ms-auto md:me-24 max-sm:mx-4">
        {/* about us section  */}
        <div id="about" ref={(el) => (sectionsRef.current[0] = el)}>
          <section>
            <div>
              <h1 className="text-black text-3xl font-bold mb-5">
                Dr. {doctorDetails?.firstName + " " + doctorDetails?.lastName}
              </h1>
              <Heading text={"About us"} left={true} />
              {/* <p className="mb-5 text-content"> */}
              <div className="doctorAbout">
                {doctorDetails ? (
                  <FormatHtml
                    htmlString={`<p className="mb-5 text-content">${doctorDetails?.doctorabout?.replace(
                      /\n/g,
                      "</p>\n<p className='mb-5 text-content'>"
                    )}</p>`}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <NewAppointments />

      <div className="max-w-6xl ms-auto md:me-24 max-sm:mx-4">
        {/* qualification section  */}
        <div id="qualification" ref={(el) => (sectionsRef.current[1] = el)}>
          <section>
            <Qualifications
              qualifications={doctorDetails?.education}
              experience={doctorDetails?.experience}
              extrainfo={doctorDetails?.extrainfo}
            />
          </section>
        </div>
        {/* services section  */}
        <div id="services" ref={(el) => (sectionsRef.current[2] = el)}>
          <section>
            <div>
              <Heading text={"SERVICES"} left={true} />
              <DoctorServices
                services={doctorDetails?.service}
                speciality={"endo"} fromDetails={true}
              />
            </div>
          </section>
        </div>
      </div>
      {/* testimonials start  */}
      <div>
        <section id="detailsTestimonials">
          <div className="bg-banner py-12">
            <div className="max-w-6xl ms-auto md:me-24 max-sm:mx-4">
              <Heading text={"Patient Testimonials"} left={true} />
              <BlogsSliderDetail
                card="testimonial"
                testimonials={testimonials}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="max-w-6xl ms-auto md:me-24 max-sm:mx-4">
        {/* blogs section  */}
        <div id="blogs" ref={(el) => (sectionsRef.current[3] = el)}>
          <section>
            <div className="detailPage-Blogs-Slider">
              <Heading text={"Blogs"} left={true} />
              <BlogsSliderDetail
                card="blog"
                blogsData={doctorBlogs?.filter((blog) => blog.type === 0)}
              />
            </div>
          </section>
        </div>
        <div id="videos" ref={(el) => (sectionsRef.current[4] = el)}>
          <section>
            <div>
              <Heading text={"Regular News"} left={true} />
              <p>
                Get to know the information regarding our healthcare aspects to
                be able to get to better informed decisions. ..
              </p>
              <BlogsSliderDetail
                card="videos"
                blogsData={doctorBlogs?.filter((blog) => blog.type === 1)}
              />
            </div>
          </section>
        </div>
      </div>
      <NeedHelp />
    </div>
  );
};
export default DoctorDetails;
