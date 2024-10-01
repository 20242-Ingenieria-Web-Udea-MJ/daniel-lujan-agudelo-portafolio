"use client";

import { AboutMeSection } from "@/components/organisms/AboutMeSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { EducationSection } from "@/components/organisms/EducationSection";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/organisms/HeroSection";
import { NavigationMenu } from "@/components/organisms/NavigationMenu";
import ProjectSection from "@/components/organisms/ProjectSection";
import { SkillsSection } from "@/components/organisms/SkillsSection";

export default function EnglishHome() {
  const locale: SupportedLocale = "en";
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
