// import banner from "../../assets/images/banners/our-doctors-banner.png";
import banner from "../../assets/images/banners/our-doctors-banner.png";
import OurTopDoctors from "../OurTopDoctors";
import hexagon from "../../assets/images/landing/areas-general.png";

const BestDoctors = () => {
  return (
    <div>
      <div className="relative md:mb-[650px] mb-[1250px]">
        <img src={banner} className="w-full" />
        <div className="absolute top-[75%]">
          <OurTopDoctors />
        </div>
      </div>
      <div className="grid md:grid-cols-2 bg-banner py-12 md:px-40 p-4 md:gap-24 gap-12 items-center">
        <div className="flex items-center justify-center">
          <img src={hexagon} className="h-[200px] md:h-[300px]" />
        </div>
        <div className="md:pe-40">
          <div className="text-2xl font-semibold">
            <h1>Train with the</h1>
            <h1 className="md:my-1 my-1">Right Technique</h1>
            <h1 className="text-red-500">For Best</h1>
          </div>
          <p className="my-5">
            Meet Our Top Trainee Doctors: Exceptional Talent, Exceptional Care.{" "}
          </p>
          <p>
            Learn more about the dedicated individuals shaping the future of healthcare with their passion, expertise, and commitment to excellence.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BestDoctors;
