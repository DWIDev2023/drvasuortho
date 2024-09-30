"use client"
import BreadCrumb from "../common/BreadCrumb";
import banner from "../../assets/images/banners/health-talks.png";
import AppointmentSchedule from "../AppointmentSchedule";
import { useEffect, useState } from "react";
import { useBlogData } from "../../controller/blogDataContext";
import BlogsPageCard from "../BlogsPageCard";

const breadCrumb = [
  { href: "/videos", title: "Health Talk" },
];
const HealthTalk = () => {
  const [videoType, setVideoType] = useState("doctors");
  const [videosToShow, setvideosToShow] = useState([]);
  const [selectedVideos, setselectedVideos] = useState("");
  const [videosData, setVideosData] = useState([]);
  const [doctorVideos, setDoctorVideos] = useState([]);
  const handleVideoTypeChange = (event) => {
    const selectedValue = event.target.value;
    setVideoType(selectedValue);
    if (selectedValue === "doctors") {
      setvideosToShow(doctorVideos);
      setselectedVideos(doctorVideos[0]?.value);
    } else if (selectedValue === "patients") {
      setselectedVideos("");
      setvideosToShow([]);
    }
  };
  const handleDoctorsChange = (event) => {
    const selectedValue = event.target.value;
    setselectedVideos(selectedValue);
  };

  const videos = useBlogData()?.allblogs?.filter((blog) => blog.type === 1);
  const doctors = useBlogData()?.doctors;

  useEffect(() => {
    if (doctors) {
      // Extract name and id from each doctor object and create a new array
      const namesAndIds = doctors.map((doctor) => ({
        name: `Dr. ${doctor.firstName} ${doctor.lastName}`,
        value: doctor._id,
      }));
      // Update the state with the array of doctor names and ids
      setDoctorVideos(namesAndIds);
      setvideosToShow(namesAndIds);
      setVideosData(videos);
    }
  }, [doctors]);
  useEffect(() => {
    setselectedVideos(videosToShow[0]?.value);
  }, [videosData]);

  // if (loading) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <img src={banner.src} alt="banner" className="w-full"/>
      </div>
      <div className="container max-w-6xl mobile-gap-x">
      <BreadCrumb linkData={breadCrumb} />
      </div>
      <section>
        <div className="max-w-6xl container mobile-gap-x my-10">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            {videosData
              .map((video,index) => {
                return (
                  <div key={index}>
                    <BlogsPageCard blogData={video}/>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <div className="max-w-6xl container mobile-gap-x">
      <AppointmentSchedule />
      </div>
    </div>
  );
};
export default HealthTalk;
