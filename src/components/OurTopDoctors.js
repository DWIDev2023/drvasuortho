import MoreBtn from "./common/MoreBtn";
import { ASSET_URL } from "../controller/config";
import { useBlogData } from "../controller/blogDataContext";
import { useEffect, useState } from "react";

const OurTopDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const doctorDetails = useBlogData()?.doctors;
  useEffect(() => {
    setDoctors(doctorDetails);
  }, [doctorDetails]);
  return (
    <div>
      <div className="md:mb-[350px] mb-[700px]">
        <div className="bg-theme md:m-12  m-4 md:mx-60 rounded-[50px] md:px-20 md:pt-16 p-6 pb-60 relative flex flex-col items-center">
          <div className="grid md:grid-cols-5 text-white">
            <div className="md:text-4xl text-2xl mb-2  font-medium col-span-3">
              <h2>Meet Our Top Doctors</h2>
              <h2>and Get Treatment</h2>
            </div>
            <p className="col-span-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
          <div className="absolute md:top-[180px] top-[210px] md:mx-16 mx-6">
            <div className="grid md:grid-cols-2 gap-10">
              {doctorDetails?.slice(0, 2)?.map((doctor, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-2xl p-5 rounded-xl flex flex-col bg-white "
                  >
                    <img
                      src={ASSET_URL + doctor?.imgsrc}
                      className="rounded-lg h-[300px]"
                    />
                    <div>
                      <h3 className="md:text-2xl text-xl font-semibold mt-4">
                        Dr. {doctor?.firstName + doctor?.lastName}
                      </h3>
                      <p className="mt-4">{doctor?.qualifications}</p>
                      <p className="mb-4">{doctor?.designation}</p>
                      <MoreBtn
                        align={"end"}
                        btn={"primary"}
                        btnText={"View More"}
                        href={`/bestDoctorsDetails/${doctor?.urlname}`}
                        round={"full"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurTopDoctors;
