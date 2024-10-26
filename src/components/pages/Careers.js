"use client"
import AppointmentSchedule from "../AppointmentSchedule";
import banner from "../../assets/images/banners/careers.png";
import MoreBtn from "../common/MoreBtn";
import CareerCard from "../CareerCard";
import { useEffect, useState } from "react";
import { API_URL } from "../../controller/config";
import BreadCrumb from "../common/BreadCrumb";

const Careers = () => {
  const [careers, setCareers] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(API_URL+"/careers?reqtype=api", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setCareers(JSON.parse(result)?.result?.data?.careers);
      })
      .catch((error) => console.error(error));
  }, []);
  const breadCrumb = [
    { href: "/careers", title: "Careers" },
  ];
  return (
    <div>
      <div>
        <img src={banner.src} alt="banner" />
      </div>
      <div className="max-w-7xl container mobile-gap-x">
        <BreadCrumb linkData={breadCrumb} />
      </div>
      <section>
        <div className="max-w-7xl m-auto mobile-gap-x">
          <h2 className="text-theme font-medium text-xl pt-8 highlight-border highlight-border-left">
            Career
          </h2>
          <div className="p-8 bg-white text-gray-900">
      <p className="mb-4">
        Join the team at the practice of Dr. Vasudeva Juvvadi and become part of a dedicated and dynamic group of healthcare professionals committed to providing exceptional orthopaedic care. We are always looking for talented and compassionate individuals to join our team and help us deliver the highest standard of medical care to our patients.
      </p>

      <h2 className="text-xl font-semibold mb-2">Why Work with Us?</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <strong>Professional Growth:</strong> We believe in continuous learning and professional development. Our team members have access to ongoing training, workshops, and opportunities for career advancement.
        </li>
        <li className="mb-2">
          <strong>Collaborative Environment:</strong> Work in a supportive and collaborative environment where your skills and contributions are valued. Our team-oriented approach ensures that we provide the best possible care to our patients.
        </li>
        <li className="mb-2">
          <strong>State-of-the-Art Facilities:</strong> Our practice is equipped with the latest medical technology and resources, allowing you to work with cutting-edge tools in a modern healthcare setting.
        </li>
        <li>
          <strong>Patient-Centered Care:</strong> Join a team that prioritizes patient care and strives to make a positive impact on the lives of our patients. We are dedicated to providing compassionate, personalized treatment to everyone who walks through our doors.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">How to Apply</h2>
      <p className="mb-4">
        To apply for any of the positions listed above, please send your resume and a cover letter to <a href="mailto:juvvadivasudeva@gmail.com" className="text-blue-500">juvvadivasudeva@gmail.com</a> with the job title in the subject line. In your cover letter, please include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">The position you are applying for</li>
        <li className="mb-2">A brief overview of your qualifications and experience</li>
        <li>Why you are interested in joining our team?</li>
      </ul>
    </div>
          <div className="md:grid grid-cols-2 gap-20">
            {careers?.map((career,index) => {
              return <CareerCard key={index} career={career} />;
            })}
          </div>
          <div className="flex justify-end hidden">
            <MoreBtn btn="theme" btnText={"View More"} href={"/"} />
          </div>
        </div>
      </section>
      <div className="container max-w-7xl">
        <AppointmentSchedule />
      </div>
    </div>
  );
};
export default Careers;
