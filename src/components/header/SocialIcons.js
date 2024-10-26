import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMapPin,
} from "@tabler/icons-react";
const icons = [
  {
    name: IconBrandFacebook,
    href: "https://www.facebook.com/OrthopedicTraumaCare",
  },
  {
    name: IconBrandInstagram,
    href: "https://www.instagram.com/drvasudevaorthopaedician/",
  },
  { name: IconBrandTwitter, href: "https://x.com/drvasudevaortho" },
  {
    name: IconBrandLinkedin,
    href: "https://www.linkedin.com/company/99259273/admin/feed/posts/",
  },
  { name: IconBrandYoutube, href: "https://www.youtube.com/channel/UCXp8rhCnY0oBzcR3fi8YZsg" },
  { name: IconMapPin, href: "https://maps.app.goo.gl/ytoEWh8cR5if5Xmf8" },
];

const SocialIcons = ({ space }) => {
  return (
    <div className={`flex space-x-2`}>
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          target="_blank"
          className=""
        >
          <icon.name size={24} />
        </a>
      ))}
    </div>
  );
};
export default SocialIcons;
