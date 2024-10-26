import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ExcellenceDetails from "@/components/pages/ExcellenceDetails";
import ApiService from "@/controller/apiService";
import { BlogDataProvider } from "@/controller/blogDataContext";
import { ServicesDataProvider } from "@/controller/servicesDataContext";

export const getServerSideProps = async ({ params }) => {
  const response = await ApiService.get(`addservice/${params.id}?reqtype=api`);
  
  return {
    props: {
      params,
      serviceData:response.result.data.service || []
    },
  };
};

const ServicePage = ({ params,serviceData }) => {
  return (
    <>
    <Header/>
     <BlogDataProvider>
     <ServicesDataProvider>
      <ExcellenceDetails serviceId={params.id} serviceData={serviceData}/>
      </ServicesDataProvider>
      </BlogDataProvider>
      <Footer/>
    </>
  );
};

export default ServicePage;
