import SocialIcons from "./SocialIcons";
import PageLinks from "./PageLinks";
import { IconPhone } from "@tabler/icons-react";

const topLinks = [
  { name: "Blogs", href: "/blogs" },
  { name: "Patients & Visitors", href: "/patientsVisitors" },
  { name: "Careers", href: "/careers" },
  { name: "News & Media", href: "/videos" },
];
const TopBanner = () => {
  return (
    <div className="top-banner justify-end text-white space-x-3 p-3 pe-5 items-center hidden lg:flex bg-theme-gradient">
      <div className="text-sm flex pe-2 items-center">
        {/* Follow us on : */}
        <div className="ps-4">
          <SocialIcons space={"1"} />
        </div>
        <div className="ps-3">Hyderabad, India</div>
        <a href="tel:8885544844" className="flex items-center ps-4"><IconPhone size={18}/> +91 8885544844</a>
      </div>
      {/* <PageLinks links={topLinks} weight={"normal"} /> */}
    </div>
  );
};
export default TopBanner;
