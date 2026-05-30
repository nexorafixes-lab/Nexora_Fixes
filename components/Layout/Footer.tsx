import Image from "next/image";
import React from "react";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nexorafixes?igsh=ODd1Y21xa3IwcXBx",
    icon: TbBrandInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1EySksKaZa/",
    icon: TbBrandFacebook,
  },
  {
    label: "WhatsApp",
    href: "https://wa.link/ji53ly",
    icon: TbBrandWhatsapp,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nexorafixes",
    icon: TbBrandLinkedin,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative w-full overflow-hidden rounded-t-3xl border-t border-white/5 bg-primary-2/5 px-4 pb-4 pt-10 backdrop-blur-2xl">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-t-full bg-primary-1/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-3 text-center">
        <a href="#" aria-label="Nexora Fixes home" className="block">
          <Image
            src="/assets/logo.png"
            alt="Nexora Fixes"
            width={610}
            height={180}
            className="h-auto w-[190px] sm:w-[220px]"
          />
        </a>

        <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-white/60">
          Nexora Fixes helps businesses turn attention into revenue with paid ads,
          scroll-stopping creatives, conversion-focused websites, Shopify stores,
          WordPress builds, and custom web solutions.
        </p>

        <nav
          aria-label="Footer navigation"
          className="mt-4 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-2 flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            Copyrights {currentYear}. Nexora Fixes
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center p-1 rounded-full text-primary-2  transition hover:bg-primary-2 hover:text-black"
                >
                  <Icon className="" size={25} strokeWidth={1} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
