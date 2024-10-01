"use client";

import React, { useEffect } from "react";
import { MenuIcon } from "@/components/atoms/icons/MenuIcon";
import { Button } from "@/components/atoms/Button";
import { AnimatedTitle } from "@/components/atoms/AnimatedTitle";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const locale = pathname === "/en" ? "en" : "es";

  useEffect(() => {
    document.querySelectorAll(".header-links a").forEach((anchor) => {
      if (anchor.getAttribute("href")?.charAt(0) !== "#") return;
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = (anchor.getAttribute("href") as string).substring(1);
        const elementPosition = document
          .getElementById(targetId)
          ?.getBoundingClientRect().top as number;
        const offsetPosition = elementPosition + window.scrollY - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <header className="flex 2xl:hidden bg-[rgba(0,0,0,0.4)] justify-center h-20 w-full border-b border-b-background-800 backdrop-blur fixed top-0 z-50">
      <div className="flex items-center gap-6 justify-between w-[1200px] max-w-full px-10">
        <div className="font-secondary flex">
          <AnimatedTitle />
        </div>
        <div className="header-links flex gap-6 font-secondary items-center text-light">
          <div className="relative flex justify-center group hover:opacity-100 transition-all px-2 py-1 border border-background-700 rounded-xl opacity-80">
            {locale === "es" ? (
              <img src="/colombia.svg" width="24" height="24" alt="Español" />
            ) : (
              <img src="/usa.svg" width={24} height={24} alt="English" />
            )}
            <menu className="absolute w-max overflow-hidden text-background top-full bg-background-100 hidden group-hover:flex animate-fade-slideup flex-col transition-all rounded-xl">
              <a
                href="/en"
                className="px-4 py-2 flex flex-nowrap gap-3 hover:bg-background-200 transition-all"
              >
                <img src="/usa.svg" width={20} height="20" alt="English" />
                English
              </a>
              <a
                href="/"
                className="px-4 py-2 flex flex-nowrap gap-3 hover:bg-background-200 transition-all"
              >
                <img src="/colombia.svg" width="20" height="20" alt="Español" />
                Español
              </a>
            </menu>
          </div>
          <a
            href="#projects"
            className="hover:text-white transition-colors max-lg:hidden"
          >
            {locale === "en" ? "Projects" : "Proyectos"}
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors max-lg:hidden"
          >
            {locale === "en" ? "Skills" : "Tecnologías"}
          </a>
          <a
            href="#education"
            className="hover:text-white transition-colors max-lg:hidden"
          >
            {locale === "en" ? "Education" : "Educación"}
          </a>
          <a href="#contact">
            <Button className="bg-transparent font-secondary font-bold text-primary hover:text-background duration-300 max-lg:hidden">
              {locale === "en" ? "Contact me!" : "¡Contáctame!"}
            </Button>
          </a>
          <span className="group lg:hidden">
            <menu className="z-50 bg-background-900 h-[100vh] text-center font-primary backdrop-blur bg-opacity-80 max-w-full w-96 hidden group-hover:flex animate-slide-left absolute flex-col px-6 top-0 pt-24 right-0">
              <a
                href="#projects"
                className="hover:text-white transition-colors py-4"
              >
                {locale === "en" ? "Projects" : "Proyectos"}
              </a>
              <a
                href="#skills"
                className="hover:text-white transition-colors py-4"
              >
                {locale === "en" ? "Skills" : "Tecnologías"}
              </a>
              <a
                href="#education"
                className="hover:text-white transition-colors py-4"
              >
                {locale === "en" ? "Education" : "Educación"}
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors py-4"
              >
                {locale === "en" ? "Get in touch!" : "¡Contáctame!"}
              </a>
            </menu>
            <MenuIcon />
          </span>
        </div>
      </div>
    </header>
  );
};
