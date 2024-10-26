import Link from "next/link";
import React from "react";

const FooterCard = ({
  iconSrc,
  title,
  description1,
  description2,
  description3,
  description4,
  timing1,
  timing2,
  index,
  href,
  hrefName,
}) => {
  return (
    <div
      className={`md:px-8 px-4 my-2 md:my-8 text-center space-y-2 ${
        index < 2 ? "md:border-r-2 border-[#99999999] border-dashed" : ""
      }`}
    >
      <div className="bg-footer-highlight inline-block rounded-full p-2 text-white">
        <img src={iconSrc.src} className="h-7 w-7 m-1" />
      </div>
      {href ? (
        <Link href={`/bestDoctorsDetails/${href}`}>
          <div className="font-medium text-base md:mt-4 md:highlight-border">
            {title}
          </div>
        </Link>
      ) : (
        <div className="font-medium text-base md:mt-4 md:highlight-border">
          {title}
        </div>
      )}
      <p className="text-gray-500 text-sm">{description1}</p>
      <p
        className={`${
          description3 ? "text-gray-500 text-sm" : "text-gray-500 text-sm"
        }`}
      >
        {description2}
      </p>
      {description3 ? (
        <p className="text-gray-500 text-sm">{description3}</p>
      ) : (
        ""
      )}
      {description4 ? (
        <p className="text-gray-500 text-sm">{description4}</p>
      ) : (
        ""
      )}
      {timing1 ? (
        <div
          className={
            timing2
              ? "border border-black text-xs inline-flex rounded-full md:px-8 px-4 py-1 font-semibold min-h-12 mt-4"
              : "items-center border border-black text-xs inline-flex rounded-full md:px-8 px-4 py-1 font-semibold min-h-12 mt-4"
          }
        >
          <div className="text-[#FF744B]">Timing :</div>
          <div className="text-right">
            <div>{timing1}</div>
            <div>{timing2}</div>
          </div>
        </div>
      ) : (
        ""
      )}
      {href && (
        <Link href={`/landing/${href}`}>

          <div className="font-medium text-[#025CAF] md:mt-4 md:highlight-border hover:text-nav-highlight hover:underline">
            {hrefName}
          </div>
        </Link>
      )}
    </div>
  );
};

export default FooterCard;
