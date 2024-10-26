import React from "react";
import Profile from "../../assets/images/profile.png";
import quotes from "../../assets/images/home/quotes.png";


const TestimonialCardHome = ({ testimonial}) => {
  return (
    <>
      <div className="flex justify-center">
        <img src={quotes.src}/>
      </div>
      <div className="absolute bottom-[-50px] inset-x-0">
        <div className="flex flex-col items-center">
          <div >
            <img
              src={Profile.src} // Replace with your actual profile picture URL
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <h2 className="text-[#2D2E2E] font-semibold text-sm text-center">
            {testimonial?.name}
          </h2>
        </div>
      </div>
      <p className="mt-4 max-sm:text-xs line-clamp-5 text-center">{testimonial?.text}</p>
    </>
  );
};

export default TestimonialCardHome;
