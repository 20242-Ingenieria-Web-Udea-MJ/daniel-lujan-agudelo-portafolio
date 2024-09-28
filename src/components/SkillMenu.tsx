import { useState } from "react";
import { SKILLS } from "@/constants";
import { SkillCard } from "@/components/SkillCard";
import { motion } from "framer-motion";

type SklillsMenuOptionProps = {
  index: number;
  activeTab: SkillCategories;
  setActiveTab: (tabName: SkillCategories) => void;
  tabName: SkillCategories;
  locale: SupportedLocale;
};

export const SklillsMenuOption = ({
  index,
  activeTab,
  setActiveTab,
  tabName,
  locale,
}: SklillsMenuOptionProps) => {
  const LABELS = {
    en: {
      Languages: "Languages",
      Frameworks: "Frameworks",
      Databases: "Databases",
      Platforms: "Platforms",
      Tools: "Tools",
    },
    es: {
      Languages: "Lenguajes",
      Frameworks: "Frameworks",
      Databases: "Bases de datos",
      Platforms: "Plataformas",
      Tools: "Herramientas",
    },
  };
  const label = LABELS[locale][tabName];
  return (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`max-md:text-center max-md:flex-1 px-6 py-2 text-lg h-12 text-nowrap text-left border-background-800 border-l-2 max-md:border-l-0 max-md:border-b-2 hover:bg-background-950 transition-all ${
        activeTab === tabName
          ? "font-bold text-primary max-md:border-primary"
          : "text-primary-100 hover:text-primary-300"
      }`}
    >
      0{index + 1}. {label}
    </button>
  );
};

type SkillsMenuProps = {
  locale: SupportedLocale;
};

export const SkillsMenu = ({ locale }: SkillsMenuProps) => {
  const [activeTab, setActiveTab] = useState<SkillCategories>("Languages");

  return (
    <div className="flex w-full gap-14 max-md:flex-col">
      <menu className="relative flex flex-col font-secondary">
        <div
          className="max-md:hidden w-[2px] bg-primary h-12 absolute left-0 transition-all"
          style={{
            top: `calc(${Object.keys(SKILLS).indexOf(activeTab)} * 3rem)`,
          }}
        ></div>
        {Object.keys(SKILLS).map((tabName, index) => (
          <SklillsMenuOption
            key={tabName}
            index={index}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabName={tabName as SkillCategories}
            locale={locale}
          />
        ))}
      </menu>
      <motion.div
        key={activeTab}
        className="flex flex-wrap gap-6 h-fit max-md:justify-center"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {SKILLS[activeTab].map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};
