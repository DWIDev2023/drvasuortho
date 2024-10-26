"use client"
import googleReviews from "../../assets/images/home/google-reviews.png";
import testiBg from "../../assets/images/about/testimonials-bg.png";
import dotsBg from "../../assets/images/about/dots-bg.png";
import doctor from "../../assets/images/about/doctor.png";
import banner from "../../assets/images/about/banner.png";

// import { Helmet } from 'react-helmet-async';
import BreadCrumb from "../common/BreadCrumb";
import NewAppointments from "../banners/NewAppointments";
import Heading from "../common/Heading";
import BlogsSlider from "../BlogsSliderHome";
import { useBlogData } from "../../controller/blogDataContext";
import TestimonialSlide from "../TestimonialSlide";
import DoctorServices from "../DoctorServices";
import React, { useEffect, useState } from "react";
import { useServicesData } from "../../controller/servicesDataContext";
import Qualifications from "../Qualifications";
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";


const breadCrumb = [
  { href: "/about", title: "About Us" },
];
const About = () => {
  const blogs = useBlogData()?.allblogs.filter((blog) => blog.type === 0);
  const healthTalks = useBlogData()?.allblogs.filter((blog) => blog.type === 1);
  const testimonials = useBlogData()?.reviews.slice(0, 10);
  const [servicesData, setServicesData] = useState(null);
  const [activeTab, setActiveTab] = React.useState(0);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  // const { data: services, loading, error } = useApiData("services?reqtype=api");
  const services = useServicesData();
  const doctorDetails = useBlogData()?.doctors[0];
  useEffect(() => {
    if (services) {
      setServicesData(services);
    }
  }, [services]);
  return (
    <>
      <section >
        <img src={banner.src} />
      </section>
      <section className="relative mb-20">
        <div className="container max-w-6xl">
          <BreadCrumb linkData={breadCrumb} />
        </div>
        {/* about section  */}
        <div className="absolute top-0">
          <img src={dotsBg.src} />
        </div>
        <div className="container max-w-6xl md:grid grid-cols-2 items-center gap-12 mobile-gap-x">
          <div>
            <div data-aos="zoom-in">
              <img src={doctor.src} className="px-8" />
            </div>
            <div>
              <div className="container md:flex justify-center gap-4 items-center max-sm:space-y-4">
                <div data-aos="zoom-in">
                  <div className="text-header md:text-[26px]">30,000+</div>
                  <div className="md:text-[18px]">Happy Patients</div>
                </div>
                <div className="border-bottom md:border-right border md:h-12"></div>
                <div data-aos="zoom-in">
                  <div className="text-header md:text-[26px]">10,000+</div>
                  <div className="md:text-[18px]">Ortho Surgeries</div>
                </div>
                <div className="border-bottom md:border-right border md:h-12"></div>
                <div data-aos="zoom-in">
                  <div className="text-header md:text-[26px]">15+</div>
                  <div className="md:text-[18px]">Awards</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Heading heading={"About"} text1={"Dr. Vasudeva Juvvadi"} data-aos="zoom-in" />
            <p className="text-sm text-[#929292] mt-1" data-aos="zoom-in">MBBS, MS (Ortho), Fellowship in Joint Replacement, Consultant Orthopedic & Joint Replacement Surgeon</p>
            <p className="leading-6 text-content mt-5" data-aos="zoom-in">Dr. Vasudeva Juvvadi is an esteemed Orthopedic surgeon practicing at Citizens Hospital, Hyderabad. With over two decades of experience, Dr. Juvvadi has become a well-known name in the field of Orthopedics known for his exceptional skills, compassionate care and commitment to patient well-being.</p>
            <h2 className="text-xl mt-4" data-aos="zoom-in">Expertise</h2>
            <p className="leading-6 text-content mt-5" data-aos="zoom-in">Dr. Juvvadi is a Consultant Trauma and Joint Replacement Surgeon in the Department of Orthopedics at Citizens Hospital, Hyderabad. His extensive experience covers complete spectrum of orthopedic care ranging from diagnosing and treating common bone issues to managing complicated cases with precision.</p>
          </div>
        </div>
      </section>
      {/* appointments banner  */}
      <section>
        <NewAppointments />
      </section>
      {/* qualifications start  */}
      <section className="container max-w-6xl mobile-gap-x my-5">
        <div id="qualification">
          
          <section>
            <h3 data-aos="fade-up">Qualification</h3>
            <p className="leading-6 text-content mt-5" data-aos="fade-up">Dr. Juvvadi holds MBBS and MS in Orthopedics has completed a prestigious fellowship in joint replacement at the Asian Joint Reconstruction Institute in Chennai. The advanced training equips him with the skills necessary to perform complex joint replacement surgeries with outstanding results, making him one of the top orthopedic surgeons in Hyderabad.</p>
         
            {/* <Qualifications
              qualifications={doctorDetails?.education}
              experience={doctorDetails?.experience}
              extrainfo={doctorDetails?.extrainfo}
            /> */}
            <Qualifications
              qualifications={[]}
              experience={[]}
              extrainfo={doctorDetails?.extrainfo}
            />
      </section>
        </div>
      </section>
      {/* all services start  */}
      <section style={{ backgroundImage: "linear-gradient(270deg, #E0E4E7 0%, #EBEDF0 100%)" }} >
        <div className="max-w-6xl container py-10 mobile-gap-x all-services">
          <Heading heading={"Our"} text1={"Services"} />
          <Tabs
            className="flex justify-center"
            activeTab={activeTab}
            onTabClick={onTabClick}
            hideNavBtnsOnMobile={false}
          >
            <Tab className="rounded flex items-center gap-x-4 text-sm">All</Tab>
            <Tab className="rounded flex items-center gap-x-4 text-sm">Joint Replacement</Tab>
            <Tab className="rounded flex items-center gap-x-4 text-sm">General Orthopedics</Tab>
            <Tab className="rounded flex items-center gap-x-4 text-sm">Sports Medicine</Tab>
            <Tab className="rounded flex items-center gap-x-4 text-sm">Robotic Knee Replacement</Tab>
          </Tabs>
          <TabScreen>
            {/* {activeTab === 0 && (
              <DoctorServices
                services={servicesData}
              />)}
              {activeTab === 1 && (
              <DoctorServices
                services={servicesData?.filter((service)=> service.servicecategory === 1)}
              />)} */}
            {
              <DoctorServices
                services={servicesData?.filter((service) => activeTab === 0 || service.servicecategory === activeTab)}
              />
            }
          </TabScreen>

        </div>
      </section>
      {/* Testimonials start  */}
      <section style={{ backgroundImage: `url(${testiBg})` }}>
        <div className="md:pb-10 pt-8 blogs flex flex-col justify-center container max-w-6xl mobile-gap-x" id="homeTestimonials">
          <div>
            <Heading heading={"Patient"} text1={"Testimonials"} />
            <div className="my-3">
              <img src={googleReviews.src} />
            </div>
            <div
              className="flex flex-col justify-center relative"
            >
              <TestimonialSlide testimonials={testimonials} />
            </div>
          </div>
        </div>
      </section>
      {/* case studies section  */}
      <section style={{ backgroundImage: "linear-gradient(270deg, #E0E4E7 0%, #EBEDF0 100%)" }}>
        <div className="md:pb-4 pt-8 blogs flex flex-col justify-center container max-w-6xl mobile-gap-x" id="homeBlogs">
          <div>
            <Heading heading={"Dr. Vasudeva Juvvadi"} text1={"Case Studies"} />
            <div>
              <div>
                <BlogsSlider slides={blogs} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* health talks section  */}
      <section>
        <div className="container max-w-6xl py-10 mobile-gap-x" id="aboutHealthTalks">
          <h3 className="text-xl font-medium">Health Talks</h3>
          <div className="md:grid grid-cols-10 justify-end items-center">
            <div className="col-span-10">
              <BlogsSlider slides={healthTalks} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
