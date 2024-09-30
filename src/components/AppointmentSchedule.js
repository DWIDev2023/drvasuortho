import { useEffect, useState } from "react";
import ApiService from "../controller/apiService";
import useApiData from "../controller/useApiData";
import AppointmentInput from "./home/AppointmentInput";
import { useBlogData } from "../controller/blogDataContext";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IconEye } from "@tabler/icons-react";

const AppointmentSchedule = ({ home }) => {
  const doctors = useBlogData()?.doctors;
  const [speciality, setSpeciality] = useState("0");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    if (speciality) {
      const filtered = doctors;
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  }, [speciality, doctors]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const submitResponse = await ApiService.post("submitcontact", data);

      if (submitResponse.data.result.status === 200) {
        window.alert(submitResponse.data.result.message);
        window.location.reload();
      } else window.alert("form not submitted");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSpecialityChange = (e) => {
    setSpeciality(e.target.value);
  };

  return (
    <div className="mobile-gap-x">
      <div
        className={`lg:grid ${
          home ? "grid-cols-2" : "grid-cols-7 gap-4 border-2 md:p-4 py-4"
        } max-sm:space-y-4  rounded-lg max-sm:p-2`}
      >
        <div
          className={`${
            home ? "" : "col-span-3 flex items-center justify-center"
          } rounded-lg`}
        >
          {home ? (
            <div>
              <div className="text-white">
                <p className="font-light">People Also Ask</p>
                <h3 className="text-xl font-semibold">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="space-y-6 mt-5">
                <Disclosure
                  as="div"
                  className="px-6 py-4 bg-white"
                  defaultOpen={true}
                  data-aos="fade-up"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium text-left">
                      What should I do before orthopedic surgery?
                    </span>
                    <IconEye className="size-5 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      Before orthopedic surgery, consult with Dr. Vasudeva
                      Juvvadi or your surgeon to understand the procedure and
                      discuss any concerns. Obtain medical clearance by
                      completing necessary tests and evaluations. Manage
                      medications as directed by Dr. Vasudeva Juvvadi or your
                      healthcare provider. Follow pre-surgery instructions
                      regarding fasting, hydration, and medication use. Arrange
                      transportation to and from the hospital, and prepare your
                      home for a comfortable recovery. Adhering to these steps
                      ensures readiness for a successful surgical experience and
                      facilitates smoother post-operative healing.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="px-6 py-4 bg-white"
                  data-aos="fade-up"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium text-left">
                      How do I prepare for knee replacement surgery?
                    </span>
                    <IconEye className="size-5 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      To prepare for knee replacement surgery, consult with Dr.
                      Vasudeva Juvvadi or your orthopedic surgeon to understand
                      the procedure and ask any questions you have. Follow any
                      pre-surgery instructions provided, which may include
                      fasting guidelines and medication adjustments. Arrange
                      transportation for the day of surgery and prepare your
                      home for recovery with necessary supplies and a
                      comfortable space. Attend any required pre-operative
                      appointments and medical tests as advised by Dr. Vasudeva
                      Juvvadi or your healthcare team. Following these steps
                      ensures you are well-prepared for a successful knee
                      replacement surgery and smoother recovery.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="px-6 py-4 bg-white"
                  data-aos="fade-up"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium text-left">
                      When can I return to work or regular activities after knee
                      replacement surgery?
                    </span>
                    <IconEye className="size-5 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      After knee replacement surgery, returning to work or
                      regular activities depends on individual recovery progress
                      and the type of job. Generally, desk jobs can be resumed
                      in 4-6 weeks, while physically demanding jobs may require
                      3-6 months. It&apos;s crucial to follow your surgeon&apos;s guidance
                      on post-operative care, including physical therapy and
                      exercise regimes, to regain strength and mobility. Gradual
                      reintroduction to daily activities helps prevent
                      complications and ensures a successful recovery. Consult
                      Dr. Vasudeva Juvvadi or your healthcare team for
                      personalized advice tailored to your specific needs and
                      health status post-surgery.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="px-6 py-4 bg-white"
                  data-aos="fade-up"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium text-left">
                      Can both knees be replaced at the same time?
                    </span>
                    <IconEye className="size-5 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm/5 ">
                    <p>
                      Yes, it is possible to have both knees replaced at the
                      same time, a procedure known as bilateral knee replacement
                      surgery. This option is considered for patients who are
                      generally healthy and meet specific criteria, advised by
                      orthopedic specialists like Dr. Vasudeva Juvvadi. However,
                      it requires careful consideration of factors such as
                      overall health, age, and individual circumstances.
                      Recovery from bilateral knee replacement surgery typically
                      involves a longer rehabilitation period and close
                      post-operative monitoring to ensure successful outcomes.
                      Consult with Dr. Vasudeva Juvvadi to determine if this
                      approach is appropriate for your situation.
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7728972431105!2d78.30899977516684!3d17.470580583430895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb934ca58fb2df%3A0x33ed1ce1e6e3abcb!2sDr.%20Vasudeva%20Juvvadi%20-%20Best%20Orthopedic%20Doctor%20in%20Hyderabad%20%26%20Knee%20Replacement%20Surgeon%20Hyderabad!5e0!3m2!1sen!2sin!4v1717311775802!5m2!1sen!2sin"
              style={{ border: "0" }}
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=" w-full h-full rounded-lg max-sm:h-[400px]"
            ></iframe>
          )}
        </div>
        <div
          className={`${
            home ? "" : "bg-theme-gradient col-span-4 max-sm:p-4"
          } md:p-10  rounded-lg`}
        >
          <div className="text-white">
            <h1 className="uppercase text-2xl md:text-3xl" data-aos="fade-up">
              schedule an appointment
            </h1>
            <p className="text-xs" data-aos="fade-up">
              To reach out to our mm Hospital Team, please fill in the below
              form. Our team members will revert back to you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit} data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <AppointmentInput
                name={"firstname"}
                placeholder={"Full Name"}
                required={"required"}
                col={"md:col-span-2"}
                home={home}
              />

              <AppointmentInput
                name={"phoneNumber"}
                placeholder={"Phone No."}
                required={"required"}
                home={home}
              />

              <AppointmentInput
                name={"email"}
                placeholder={"Email Id"}
                home={home}
              />

              <AppointmentInput
                name={"speciality"}
                placeholder={"Speciality"}
                inputType={"select"}
                selectType={"speciality"}
                onChange={handleSpecialityChange}
                required={"required"}
                home={home}
                value={speciality}
              />

              <AppointmentInput
                name={"doctor"}
                placeholder={"Doctor"}
                inputType={"select"}
                selectType={doctors}
                required={"required"}
                home={home}
                value={"62b590d1c9b6fa449205202c"}
              />
              <textarea
                placeholder="Type Message"
                className={`rounded ${
                  home ? "" : "bg-transparent"
                } border p-2 py-5 md:col-span-2 text-sm`}
              ></textarea>
            </div>
            <button className="rounded-full p-2 px-10 mt-4 bg-white ms-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSchedule;
