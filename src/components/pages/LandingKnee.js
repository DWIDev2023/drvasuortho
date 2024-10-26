"use client"
import Heading from "../common/Heading";
import AppointmentSchedule from "../AppointmentSchedule";
import AppointmentFormDetail from "./AppointmentFormDetail";
import { useBlogData } from "../../controller/blogDataContext";
import { IconChevronRight, IconMapPin, IconPhone } from "@tabler/icons-react";

// images import 
import clock from "../../assets/images/icons/clock.png";
import medKit from "../../assets/images/icons/medkit-white.png";
import robotic from "../../assets/images/landing/knee.png";
import advRobotic from "../../assets/images/home/departments/robotic.png";
import AppointmentModalOpener from "../AppointmentModalOpener";
import bg from "../../assets/images/secondopinion/background.png";
import faq from "../../assets/images/landing/faq-knee.png";
import doc from "../../assets/images/about/doctor.png";
import mako from "../../assets/images/landing/knee-banner.png";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const LandingKnee = () => {
  const doctor = useBlogData()?.doctors[0];

  return (
    <div>
      <div className="pt-10" style={{ background: "linear-gradient(180deg, rgba(5, 22, 52, 0.74) 0%, rgba(1, 125, 187, 0.74) 96.46%)" }}>
        {/* <img src={banner} className="w-full" /> */}
        <div className=" top-0 w-full ">
          <div className="max-w-6xl container mobile-gap-x">
            <div className="md:grid grid-cols-12 gap-16">
              <div className="col-span-5">
                <AppointmentFormDetail details={doctor} />
              </div>
              <div className="text-white col-span-4 max-sm:my-6">
                <h3 className="md:text-xl">
                  Best Knee Replacement Surgeon in Hyderabad
                </h3>
                <ul className="list-disc ps-6 my-4">
                  <li>20+Years of Experienced Surgeons</li>
                  <li>Robot-Assisted Knee Replacement</li>
                  <li>All Insurances Accepted</li>
                </ul>
                <div className="space-y-4 md:mt-16 mt-10">
                  <div >
                    <Link href={"/bookAppointment"} className=" flex whitespace-nowrap	items-center space-x-3">
                      <div><img src={clock.src} className="max-w-[32px]" /></div> <span>Schedule an Appointment</span> <IconChevronRight />
                    </Link>
                  </div>
                  <div >
                    <Link href={"/ourservices"} className="flex items-center whitespace-nowrap  space-x-3">
                      <div><img src={medKit.src} className="max-w-[32px]" /></div> <span>Explore Our Services</span> <IconChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <img src={mako.src} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="relative">
        <div className="absolute top-0 h-20 bg-blue-900 w-full"></div>
        <div className="max-w-6xl container mobile-gap-x relative pt-14">
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <img src={robotic.src} />
            </div>
            <div className="">
              <div className="shadow-blog flex max-sm:justify-start items-center md:gap-10 gap-4 border-b p-4 px-8 rounded">
                <div className="w-16 h-16 rounded-full flex items-center justify-center">
                  <img src={advRobotic.src} alt="Advanced Robotic" />
                </div>
                <div>
                  <h2 className="mb-3 md:text-lg text-sm">Best Knee Replacement Surgeon in Hyderabad</h2>
                  <AppointmentModalOpener button={"Request An Appointment"} />
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 leading-8">
            <p className="leading-7">Are you tired of living with chronic knee pain? Meet Dr. Vasudeva Juvvadi, recognized as the best knee replacement surgeon in Hyderabad. With years of specialized experience and a commitment to patient-centric care, Dr. Juvvadi offers comprehensive solutions to help you regain mobility and improve your quality of life.</p>
</div>
        </div>
      </section>
      {/* Robotic  */}
      <section className="bg-cover bg-no-repeat py-10" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="max-w-6xl container mobile-gap-x">
          <div className="md:grid grid-cols-2">
            <div>
              <div className="space-y-2">
              <h3 class="text-2xl semi-bold mb-4">Why Choose Dr. Vasudeva Juvvadi?</h3>

<h3 class="text-xl font-semibold mt-6">Expertise and Experience</h3>
<p class="mt-0">Dr. Juvvadi brings expertise in orthopedic surgery, focusing on knee replacements. His dedication to continuous learning and advancement ensures that each patient receives the highest standard of care.</p>

<h3 class="text-xl font-semibold mt-6">Personalized Treatment Plans</h3>
<p class="mt-2">From initial consultation to post-operative recovery, every treatment plan is tailored to meet your unique needs and goals.</p>

<h3 class="text-xl font-semibold mt-6">Proven Success Stories</h3>
<p class="mt-0">Patients across Hyderabad trust Dr. Juvvadi for his exceptional surgical skills and compassionate approach. Read testimonials from satisfied patients who have experienced life-changing results under his care.</p>

<h3 class="text-xl font-semibold mt-6">Services Offered:</h3>
<ul class="list-disc list-inside mt-2">
    <li class="mt-1"><strong>Total Knee Replacement:</strong> Comprehensive treatment for severe arthritis or joint damage.</li>
    <li class="mt-1"><strong>Partial Knee Replacement:</strong> Targeted solutions for localized knee issues.</li>
    <li class="mt-1"><strong>Minimally Invasive Techniques:</strong> Advanced surgical methods to minimize recovery time and post-operative discomfort.</li>
</ul>

<h3 class="text-xl font-semibold mt-6">Schedule Your Consultation</h3>
<p class="mt-2">Take the first step towards a pain-free life. Contact Dr. Vasudeva Juvvadi today at <span className="underline"><a href="tel:8885544844">+91 8885544844</a></span> to schedule your consultation.</p>
                </div>
              <div className="my-12">
                <AppointmentModalOpener button={"Request An Appointment"} />
              </div>
            </div>
            <div className="md:ms-24 ">
              <div>
                <iframe className="w-full h-[250px]" src="https://www.youtube.com/embed/9kLn-8nYtVI?si=N-TtNNKyN9DNsMWv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="mt-4 space-y-3">
                <Disclosure as="div" className="p-3 py-4 bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What causes knee replacement?
                  </span>
                    <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 ">
                    If you&apos;re unhappy with your purchase, we&apos;ll refund you in full.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-3 py-4 bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What causes knee replacement?
                    </span>
                    <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2">No.</DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-3 py-4 bg-white">
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="font-medium">
                      What causes knee replacement?
                    </span>
                    <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2">No.</DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faqs */}
      <section>
        <div className="max-w-6xl container mobile-gap-x">
          <div className="md:grid grid-cols-2">
            <div className="md:me-16">
              <img src={faq.src} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-header mb-8 highlight-border highlight-border-left">
                Frequently Asked Questions
              </h3>
              <h2 className="text-lg font-medium mb-2">Is knee replacement safe?</h2>
              <p className="leading-6">Knee replacement is one of the safest and most effective surgery among all of the available orthopedic surgeries. </p>

              <h2 className="text-lg font-medium my-2">What are the benefits of knee replacement surgery?</h2>
              <p className="leading-6">Knee replacement surgery helps in relieving symptoms such as severe joint pain, immobility, difficulty in doing regular activities and improve quality of life. Around 98% cases knee replacements lasts more than 15 years.</p>

              <h2 className="text-lg font-medium my-2">What activities to do after knee replacement surgery?</h2>
              <p className="leading-6">After 15 to 45 days of the knee replacement, as advised by doctors, a person can resume light daily activities. People also start driving after 25 days if they are able to move the knee to the center to operate the accelerator and brakes.</p>
              <p className="my-6 leading-6">After complete recovery, one can start doing low-impact activities, such as walking or biking. But a person should avoid high-impact activities, such as jogging, tennis, and sports that involve contact or jumping.</p>

              <h2 className="text-lg font-medium my-2">When is knee replacement surgery required?</h2>
              <p className="leading-6">The most common cause of knee surgery is to relieve severe pain caused by joint pain during sitting, climbing, bow legs, and getting in and out of chairs. Usually, knee surgery is required by orthopedics.</p>

              <h2 className="text-lg font-medium my-2">What is the cost of knee replacement surgery in India?</h2>
              <p className="leading-6">The average cost of joint replacement surgery in India may vary from Rs. 1,20,000 to Rs. 3,25,000 (one lakh twenty thousand to three lakh twenty-five thousand). Knee replacement cost in India may vary depending upon different cities and different factors.</p>

              <h2 className="text-lg font-medium my-2">What is the cost of knee replacement surgery in Hyderabad?</h2>
              <p className="leading-6">Knee replacement surgery cost in Hyderabad ranges may vary from Rs. 1,50,000 to 3,50,000 (one lakh fifty thousand to three lakh fifty thousands). However, cost of knee joint replacement surgery in Hyderabad may vary, and it depends upon the multiple factors such as selection of the surgery – partial or total knee replacement, cost of artificial implants, room for hospital stay, and insurance or corporate cashless facility.</p>
              <ul className="list-disc ps-6 text-sm  my-6 leading-6">
                <li>Unilateral Total Knee Replacement - Rs. 1.5 Lakhs to 1.75 Lakhs</li>
                <li>Bilateral Total Knee Replacement - Rs. 3.25 Lakhs to 3.75 Lakhs</li>
                <li>Unilateral Partial Knee Replacement - Rs. 1.15 Lakhs to 1.5 Lakhs</li>
                <li>Bilateral Partial Knee Replacement - Rs. 2.75 Lakhs to 3.05 Lakhs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* why  */}
      <section className="bg-cover bg-no-repeat py-10" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="max-w-6xl container">
          <div className="container max-w-6xl md:grid grid-cols-2 items-center gap-12 mobile-gap-x">
            <div>
              <div>
                <img src={doc.src} className="px-8" />
              </div>
              <div>
                <div className="container md:flex justify-center gap-4 items-center max-sm:space-y-4">
                  <div>
                    <div className="text-header">30,000+</div>
                    <div>Happy Patients</div>
                  </div>
                  <div className="border-bottom md:border-right border md:h-12"></div>
                  <div>
                    <div className="text-header">10,000+</div>
                    <div>Ortho Surgeries</div>
                  </div>
                  <div className="border-bottom md:border-right border md:h-12"></div>
                  <div>
                    <div className="text-header">15+</div>
                    <div>Awards</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Heading heading={"Why Dr. Vasudeva Juvvadi ?"} text1={"Dr. Vasudeva Juvvadi"} />
              <p className="text-xs text-[#929292] mt-1">MBBS, MS (Ortho), Fellowship in Joint Replacement Consultant Orthopedic & Joint Replacement Surgeon</p>
              <p className="leading-6 text-content mt-5">Dr. Vasudeva Juvvadi is the best orthopedic doctor in Hyderabad. He has more than a decade-long experience in all aspects of orthopedics. Currently, he is working as a Consultant Trauma and Joint Replacement Surgeon in the department of orthopedics at Citizens Hospital Hyderabad. He has hands-on experience and expertise in the diagnosis, treatment, and management of some of the most common, major, and complex orthopedic conditions. Dr. Vasudeva Juvvadi holds a fellowship in joint replacement from the nationally famed Asian Joint Reconstruction Institute, Chennai.
                Being the best orthopedic doctor in Hyderabad with a specialization in trauma joint replacement and reconstructive surgery, Dr. Vasudeva Juvvadi regularly deals with trauma, complex fracture fixation, total knee, and hip replacement, non-union cases, malunion cases, and failed trauma cases.</p>
            </div>
          </div>
        </div>
      </section>
      {/* locations  */}
      <section>
        <div className="max-w-6xl container mobile-gap-x mb-10 pb-10">
          <h4 className="text-center font-medium my-10">Our Locations</h4>
          <div className="md:flex justify-center gap-12 max-sm:space-y-5">
            <div className="rounded-lg shadow-blog p-2 space-y-3 px-8">
              <h3 className="text-center font-medium">Nallagandla</h3>
              <div className="flex justify-center">
                <IconMapPin />
              </div>
              <div >
                <p>1-100/1/CCH, Citizens</p>
                <p>Hospital Rd, near Aparna</p>
                <p>Cyber Life, Nallagandla,</p>
                <p>Telangana</p>
              </div>
              <div className="flex justify-center">
                <IconPhone />
              </div>
              <p className="text-center">040 6719 1919</p>
            </div>
            <div className="rounded-lg shadow-blog p-2 space-y-3 px-8">
              <h3 className="text-center font-medium">Nallagandla</h3>
              <div className="flex justify-center">
                <IconMapPin />
              </div>
              <div >
                <p>1-100/1/CCH, Citizens</p>
                <p>Hospital Rd, near Aparna</p>
                <p>Cyber Life, Nallagandla,</p>
                <p>Telangana</p>
              </div>
              <div className="flex justify-center">
                <IconPhone />
              </div>
              <p className="text-center">040 6719 1919</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-w-6xl">
          <AppointmentSchedule />
        </div>
      </section>
    </div>
  );
};
export default LandingKnee;
