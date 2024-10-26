import { ASSET_URL } from "../../controller/config";
import FormatHtml from "../FormatHtml";
import MoreBtn from "../common/MoreBtn";

const KnowMore = ({ doctor }) => {
  const services = doctor?.service;
  return (
    <div className="overflow-hidden md:ps-8">
      <div className="px-6 lg:px-8">
        <div className="mx-auto md:grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="lg:col-span-2" data-aos="fade-right">
            <img
              src={ASSET_URL + doctor?.doc_profile}
              alt="Product screenshot"
              className="rounded-md"
            />
          </div>
          <div className="max-sm:mt-4 lg:pr-8 lg:pt-4 lg:col-span-3">
            <div className="">
              <h2 className="text-base font-medium leading-7 text-content text-xl know-about-line flex items-center">
                Know About
              </h2>
              <p
                className="md:my-3 mt-2 md:text-4xl text-2xl font-normal tracking-tight text-[#025CAF] sm:text-6xl"
                data-aos="fade-left"
              >
                Dr. {doctor?.firstName + " " + doctor?.lastName}
              </p>
              <div>
                <p className="font-medium py-1">{doctor?.designation}</p>
                <p className="text-red-600 text-base md:text-xl">
                  {/* {specialization} */}
                </p>
              </div>
              <div className="line-clamp-6">
                {doctor && (
                  <FormatHtml
                    htmlString={`<div className="line-clamp-6"><p className="mb-5 text-content">${doctor?.doctorabout?.replace(
                      /\n/g,
                      "</p>\n<p className='mb-5 text-content'>"
                    )}</p></div>`}
                  />
                )}
              </div>

              <div className="text-blue-900">
                <p className="text-xl underline">Specialities</p>
                <div className="text-sm">
                  <ul className="list-disc list-disc-default max-sm:mb-0 ps-4 grid grid-cols-2">
                    {services?.map((spec, index) => {
                      return <li key={index}>{spec.service_name}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MoreBtn
          btn={"theme"}
          btnText={"Read More"}
          href={`/bestDoctorsDetails/${doctor?.urlname}`}
          align={"end"}
        />
      </div>
    </div>
  );
};
export default KnowMore;
