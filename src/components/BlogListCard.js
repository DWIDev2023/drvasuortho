import React, { useState } from "react";
import { ASSET_URL } from "../controller/config";
import DateFormat from "./DateFormat";
import { useBlogData } from "../controller/blogDataContext";
import { IconArrowRight } from "@tabler/icons-react";
import MonthFormat from "./MonthFormat";
import Link from "next/link";

const BlogListCard = ({ blogData }) => {
  const [isHovering, setIsHovering] = useState(false);  // State to track hovering
  const doctorData = useBlogData()?.doctors.filter(
    (doctor) => doctor._id === blogData.doctorid
  )[0];

  return (
    <Link href={`/blogsDetail/${blogData?._id}`}
          onMouseEnter={() => setIsHovering(true)}  // Set hover state on mouse enter
          onMouseLeave={() => setIsHovering(false)} // Reset hover state on mouse leave
    >
      <div className="bg-white p-3 rounded-lg shadow-md m-4 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 group">
        <div className="relative">
          <div className="text-xs text-nowrap absolute top-1 left-1 bg-theme-gradient2 text-white p-1 rounded">
            <MonthFormat date={blogData?.createdAt} />
          </div>
          <img
            src={ASSET_URL + blogData?.displayimg}
            alt="Medical Experts"
            className="w-full h-auto rounded-lg"
          />
         
          <div className="mt-4">
            <h1 className="font-medium me-2 line-clamp-1 text-header">
              {blogData?.displayname}
            </h1>
          </div>
        </div>
        <div>
        {isHovering && (
            <div className="absolute whitespace-normal px-2 py-1 bg-black text-white text-xs rounded-lg bottom-10 mt-12 max-w-xs">
              {blogData?.displayname}  
            </div>
          )}
          <div className="pt-4 text-nowrap flex items-center font-medium gap-3 text-sm group-hover:translate-x-2 group-hover:underline">
            <span className="text-[#002935]">Read More</span> <IconArrowRight className="text-highlight" size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogListCard;
