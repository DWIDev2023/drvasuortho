import Link from "next/link";

const SpecialitiesCard = ({ serviceId, imgSrc, text1, text2 }) => {
  return (
    <>
      <Link
        data-aos="zoom-in"
        href={serviceId && `/ourservices/${serviceId}`}
        className="rounded-lg shadow-3xl text-center md:p-3 p-2 py-4 md:py-6 relative specialities-card bg-white"
      >
        <div>
          <img
            src={imgSrc}
            alt="Specialities"
            className="m-auto w-16 h-[4rem] object-contain hover:scale-150"
          />
        </div>
        <p className="pt-4">{text1}</p>
        <p>{text2}</p>
      </Link>
    </>
  );
};
export default SpecialitiesCard;
