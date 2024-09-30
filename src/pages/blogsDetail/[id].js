import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import BlogsDetail from "@/components/pages/BlogsDetail";
import { BlogDataProvider } from "@/controller/blogDataContext";
import { ServicesDataProvider } from "@/controller/servicesDataContext";

export const getServerSideProps = async ({ params }) => {

  
  return {
    props: {
      params,
    },
  };
};

const BlogsPage = ({ params }) => {
  return (
    <>
    <Header/>
     <BlogDataProvider>
     <ServicesDataProvider>
      <BlogsDetail blogid={params.id} />
      </ServicesDataProvider>
      </BlogDataProvider>
      <Footer/>
    </>
  );
};

export default BlogsPage;
