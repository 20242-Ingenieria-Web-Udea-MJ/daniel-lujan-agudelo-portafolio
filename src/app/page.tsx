"use client";

import { AboutMeSection } from "@/components/AboutMeSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NavigationMenu } from "@/components/NavigationMenu";
import ProjectSection from "@/components/ProjectSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  const locale = "es";
  return (
    <>
      <NavigationMenu locale={locale} />
      <HeroSection locale={locale} />
      <AboutMeSection locale={locale} />
      <ProjectSection locale={locale} />
      <SkillsSection locale={locale} />
      <EducationSection locale={locale} />
      <ContactSection locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
