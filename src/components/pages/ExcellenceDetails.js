"use client"
import banner from "../../assets/images/banners/excellence-details-banner.png";
import { Tab, TabScreen, Tabs } from "react-tabs-scrollable";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../common/BreadCrumb";
import Accordion from "../Accordion";
import ExcellenceContentTabs from "./ExcellenceContentTabs";
import { useServicesData } from "../../controller/servicesDataContext";
import { ASSET_URL, CLIENT_URL } from "../../controller/config";
import AppointmentFormDetail from "./AppointmentFormDetail";
import Link from "next/link";
import '../../app/globals.css';
import Head from "next/head";
import { ScriptInjector } from "../header/Header";

const ExcellenceDetails = ({serviceId,serviceData}) => {
  const [bannerImage, setBannerImage] = useState(banner);
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [sortedServiceCategories, setSortedServiceCategories] = useState([]);
  const servicesList = useServicesData();
  let sortedServiceList;
  if (servicesList && Array.isArray(servicesList)) {
    sortedServiceList = [...servicesList]?.sort((a, b) => {
      if (a.service_displayurl === serviceId) return -1;
      if (b.service_displayurl === serviceId) return 1;
      return 0;
    });
  }
  const servicesDetails = useServicesData()?.filter(
    (service) => service.service_displayurl === serviceId
  )[0];
  const toggleAccordion = (accordionName) => {
    setActiveAccordion(
      activeAccordion === accordionName ? null : accordionName
    );
  };
  const serviceCategories = [
    { title: "Robotic Knee Replacement", category: 1 },
    { title: "Joint Replacement", category: 2 },
    { title: "Trauma Surgeries", category: 3 },
    { title: "Sports Medicine", category: 4 },
    { title: "General Orthopedics", category: 5 },
    { title: "Others", category: 6 }
  ];
  useEffect(() => {
    setSortedServiceCategories(serviceCategories);

    if (servicesDetails) {
      const breadCrumb = [
        { href: "/ourservices", title: "Our Services" },
        {
          href: `/ourservices/${servicesDetails?.service_displayurl}`,
          title: servicesDetails?.service_name,
        },
      ];
      setBannerImage(servicesDetails?.serviceBanner_url);
      setBreadcrumb(breadCrumb);
      const activeCategoryNumber = servicesDetails?.servicecategory;
      const SortedCategories = serviceCategories.sort((a, b) => {
        if (a.category === activeCategoryNumber) return -1;
        if (b.category === activeCategoryNumber) return 1;
        return a.category - b.category;
      });
      setSortedServiceCategories(SortedCategories);
      SortedCategories.forEach((cat) => toggleAccordion(cat.title));
      setActiveAccordion(SortedCategories.find((cat) => cat.category === servicesDetails.servicecategory).title );

     
    }
  }, [servicesDetails]);



  return (
    <div className="excellence-details">

      <Head>
      <title>{serviceData[0]?.service_title}</title>
        <meta name="description" content={serviceData[0]?.service_description} />
        <meta name="keywords" content={serviceData[0]?.service_keywords} />
        <link rel="canonical" href={CLIENT_URL+"/ourservices/"+serviceData[0]?.service_displayurl}></link>
        <ScriptInjector/>
      </Head>
      <div>
        <img src={ASSET_URL + bannerImage} className="w-full" />
      </div>
      <div className="max-w-7xl container">
        <BreadCrumb linkData={breadcrumb} />
      </div>
      <section className="mb-0 mobile-gap-x">
        <div className="lg:grid lg:grid-cols-8 max-w-7xl m-auto max-sm:m-4 flex flex-col">
          <div className="md:col-span-2 order-last lg:order-first">
            <div
              className={`flex flex-col md:sticky top-[144px]}`}
            >
              {
                sortedServiceCategories?.map((category, index) => {
                  return (
                    <>
                      <Accordion
                        title={category.title}
                        accordionOpen={activeAccordion === category.title}
                        onToggle={() => toggleAccordion(category.title)}
                      >
                        <div className="flex flex-col bg-stone-100">
                          {sortedServiceList
                            ?.filter((ser) => ser.servicecategory === category.category)
                            ?.map((service, index) => {
                              return (
                                <Link
                                  key={service._id}
                                  className={`p-3 ${service.service_displayurl === serviceId ? "bg-[#052C86] text-white" : ""
                                    }  rounded-none hover:text-white hover:bg-gradient-to-r from-[#144D91] to-[#00B48D]`}
                                  href={`/ourservices/${service.service_displayurl}`}
                                >
                                  {service?.service_name}
                                </Link>
                              );
                            })}
                        </div>
                      </Accordion>
                      {index === 0 &&
                        <div className="border border-black rounded-lg mb-10">
                          <AppointmentFormDetail />
                        </div>
                      }
                    </>
                  )
                })
              }
            </div>
          </div>
          <div className="md:col-span-6">
            <TabScreen className="lg:ps-12 col-span-6">
              <ExcellenceContentTabs servicesDetails={servicesDetails} />
            </TabScreen>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExcellenceDetails;
