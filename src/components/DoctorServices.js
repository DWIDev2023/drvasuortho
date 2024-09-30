import SpecialitiesCard from "./home/SpecialitiesCard";
import { ASSET_URL } from "../controller/config";

const DoctorServices = ({ speciality, services, fromDetails }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-10 gap-5 ">
      {services?.map((spec, index) => (
        <SpecialitiesCard
          serviceId={fromDetails ? spec.service_displayurl : spec.service_displayurl}
          imgSrc={
            ASSET_URL + (spec.service_url ? spec.service_url : spec.service_img)
          }
          key={spec._id}
          text1={spec.service_name}
          // text2={spec.text2}
        />
      ))}
    </div>
  );
};
export default DoctorServices;
