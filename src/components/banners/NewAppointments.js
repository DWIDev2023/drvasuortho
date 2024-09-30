import clock from "../../assets/images/icons/clock.png";
import location from "../../assets/images/icons/location.png";
import AppointmentModalOpener from "../AppointmentModalOpener";
import doctor from "../../assets/images/home/appointment-doctor.png";
import Link from "next/link";

const NewAppointments = () => {
  return (
    <div
      className="grid md:grid-cols-12 justify-end bg-center bg-cover bg-no-repeat text-white md:px-6 px-4 pb-0 bg-theme-gradient relative"
    >
      <div className="lg:col-span-3 col-span-4 flex justify-center">
        <div className="flex flex-col justify-center">
          <p data-aos="fade-up">Talk to our Ortho experts</p>
          <p data-aos="fade-up">Need help?</p>
          <a href="tel:885544844"><h3 className="lg:text-2xl font-semibold" data-aos="fade-up">+91 8885544844</h3></a>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-4 max-lg:order-first" data-aos="zoom-in">
        <img className="lg:absolute bottom-0 w-[180px]" src={doctor.src} />
      </div>
      <div className="flex flex-col justify-center xl:col-span-6 lg:col-span-7 col-span-12 py-5">
        <h3 className="lg:text-2xl text-xl mb-2" data-aos="fade-up">
          New Patient Appointments
        </h3>
        <p className="lg:text-lg mb-4" data-aos="fade-up">
        Discover exceptional care with our new patient appointments. Schedule yours today!        </p>
        <div className="flex max-sm:flex-col justify-between items-start gap-5 xl:me-12">
          <div>
            {/* <AppointmentModal /> */}
            {/* <AppointmentModalOpener button={"Get An Appointment"} /> */}
            <Link href={"/bookAppointment"} className="btn-theme border-white border md:whitespace-nowrap btn-theme-gradient2">Get An Appointment</Link>

          </div>
          <div className="flex justify-center" data-aos="fade-up">
            <div className="me-2">
              <img src={clock.src} className="w-[25px]" />
            </div>
            <span className="text-sm">
              Monday - Friday
              <br />
              12:30 PM - 9:30 PM
            </span>
          </div>
          <div className="flex justify-center" data-aos="fade-up">
            <div className="w-[37px]">
              <img src={location.src} className="w-[24px] h-[32px]" />
            </div>
            <span className="text-sm">
              1-100/1/CCH, near Aparna <br></br> Cyberlife, <br></br>
              Nallagandla, Hyderabad, <br></br> Telangana 500019
            </span>
          </div>
        </div>
      </div>
    </div>)
  // );
};

export default NewAppointments;
