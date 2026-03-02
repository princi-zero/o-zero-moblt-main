import type { NavbarData } from "@/types";

export const navbarData: NavbarData = {
  logoSrc: "/images/Zero Icon.webp",
  logoAlt: "Zero Logo",
  links: [
    { label: "Home",      href: "/" },
    { label: "Services",  href: "/services" },
    { label: "About us",  href: "/about" },
    { label: "Open data", href: "/open-data" },
    { label: "Careers",   href: "/careers" },
  ],
  cta: {
    label: "Get My Price",
    href: "https://start.zeromoblt.com/",
  },
};