import React, { useState } from "react";
import { ASSET_URL } from "../controller/config";
import { useBlogData } from "../controller/blogDataContext";
import { IconChevronRight } from "@tabler/icons-react";
import MonthFormat from "./MonthFormat";
import calender from "../assets/images/icons/calender.png"
import Link from "next/link";

const BlogsPageCard = ({ blogData, slider }) => {
  const [isHovering, setIsHovering] = useState(false);
  const doctorData = useBlogData()?.doctors.filter(
    doctor => doctor._id == blogData.doctorid
  )[0];

  return (
    <Link href={blogData?.displayimg ? `/blogsDetail/${blogData?._id}` : blogData?.videosrc}
          target={blogData?.displayimg ? "" : "_blank"}
          className={`bg-white p-3 rounded-lg shadow-blog flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 ${slider && "m-4"}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
    >
      <div>
        {blogData?.displayimg ? (
          <img
            src={ASSET_URL + blogData?.displayimg}
            alt="Medical Experts"
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <iframe
            className="w-full h-auto rounded-lg"
            src={blogData.videosrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        <div className="mt-4 relative">
          <h1 className="font-medium me-2 line-clamp-1 text-header">
            {blogData?.displayname}
          </h1>
          {isHovering && (
            <span className="absolute whitespace-normal px-2 py-1 bg-black text-white text-xs rounded-lg -mt-8 max-w-xs">
              {blogData?.displayname}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center mt-4 justify-between">
        <p className="font-medium text-nowrap flex items-center">
          <img src={calender.src} className="w-4 me-2" />
          <MonthFormat date={blogData?.createdAt} />
        </p>
        {blogData?.displayimg && (
          <div
            to={`/blogsDetail/${blogData?._id}`}
            className="text-nowrap flex items-center gap-3"
          >
            <span className="text-[#002935] text-xs">Read More</span> <IconChevronRight className="border rounded-full h-5" size={40}></IconChevronRight>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BlogsPageCard;
