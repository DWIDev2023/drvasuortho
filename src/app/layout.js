import { Inter } from "next/font/google";
import "./globals.css";
import Header, { ScriptInjector } from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { ServicesDataProvider } from "@/controller/servicesDataContext";
import { BlogDataProvider } from "@/controller/blogDataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Vasudeva Juvvadi",
  description: "Dr. Vasudeva Juvvadi",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <ScriptInjector />

      </head>
      <body className={inter.className}>
        <BlogDataProvider>
          <Header />
          <ServicesDataProvider>{children}</ServicesDataProvider>
          <Footer />
        </BlogDataProvider>
      </body>
    </html>
  );
};

export default RootLayout;
