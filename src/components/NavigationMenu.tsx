import React, { useEffect } from "react";
import { NavigationMenuOption } from "@/components/NavigationMenuOption";

export const NavigationMenu = (props: { locale: string }) => {
  const locale = props.locale as SupportedLocale;

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-menu-links a");
    navLinks.forEach((anchor) => {
      if (anchor.getAttribute("href")?.charAt(0) !== "#") return;
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = (anchor.getAttribute("href") as string).substring(1);
        const elementPosition = document
          .getElementById(targetId)
          ?.getBoundingClientRect().top as number;
        const offsetPosition =
          elementPosition + window.scrollY - window.innerHeight * 0.25;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    });

    const sectionThresholds: { [key: string]: number } = {};
    document.querySelectorAll("section").forEach((section) => {
      sectionThresholds[section.id] = section.offsetTop;
    });

    const activeClassList = ["text-primary", "font-bold"];

    const navIndicator = document.querySelector(".nav-indicator");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let activeLink: Element | null = null;
      let activeLinkIndex = 0;

      let minDistance = Number.MAX_VALUE;
      for (let i = 0; i < navLinks.length; i++) {
        const link = navLinks[i];
        const targetId = (link.getAttribute("href") as string).substring(1);
        const targetPosition = sectionThresholds[targetId];
        const d = Math.abs(scrollPosition - targetPosition);
        if (d < minDistance && d < window.innerHeight * 0.75) {
          activeLink = link;
          activeLinkIndex = i;
          minDistance = d;
        }
      }

      navLinks.forEach((link) => link.classList.remove(...activeClassList));
      if (activeLink) {
        activeLink.classList.add(...activeClassList);
        navIndicator?.setAttribute(
          "style",
          `top: ${activeLinkIndex * 2.5 + 1.25}rem; opacity: 1;`
        );
      } else {
        navIndicator?.setAttribute("style", `top: 1.25rem; opacity: 0;`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav-menu-links fixed z-50 left-[calc(75%+280px-5rem)] p-1 top-32 hidden 2xl:flex flex-col bg-background-800 bg-opacity-60 rounded-xl w-40">
      <div className="nav-indicator w-2 h-2 bg-primary rounded-full absolute left-3 opacity-0 transition-all"></div>
      <NavigationMenuOption href="#projects">
        {locale === "es" ? "Proyectos" : "Projects"}
      </NavigationMenuOption>
      <NavigationMenuOption href="#skills">
        {locale === "es" ? "Tecnologías" : "Skills"}
      </NavigationMenuOption>
      <NavigationMenuOption href="#education">
        {locale === "es" ? "Educación" : "Education"}
      </NavigationMenuOption>
      <NavigationMenuOption href="#contact">
        {locale === "es" ? "Contacto" : "Contact"}
      </NavigationMenuOption>
      <NavigationMenuOption href={locale === "es" ? "/en" : "/"}>
        <img
          src={locale === "es" ? "/colombia.svg" : "/usa.svg"}
          alt={locale}
          width={20}
          height={20}
          className="w-5 h-5 opacity-80"
        />
        {locale.toUpperCase()}
      </NavigationMenuOption>
    </nav>
  );
};
