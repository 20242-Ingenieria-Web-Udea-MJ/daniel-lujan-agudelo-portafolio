import { createRef, useEffect, useState } from "react";
import { PROJECTS } from "@/constants";
import ProjectCard from "@/components/molecules/ProjectCard";

const ArrowRightIcon = () => {
  return (
    <svg
      height="24px"
      width="24px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.532 22.532"
    >
      <g>
        <path
          fill="currentColor"
          d="M4.517,0h6.862l6.636,11.321l-6.524,11.211l-2.055-3.091l-4.919,2.863l6.521-10.983L4.517,0z"
        ></path>
      </g>
    </svg>
  );
};
type ProjecSliderProps = {
  locale: SupportedLocale;
};

export const ProjectSlider = ({ locale }: ProjecSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = PROJECTS.map(() => createRef<HTMLDivElement>());
  const containerRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const container = containerRef.current;
    const ref = refs[activeIndex];

    if (container && ref.current) {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      container.scrollTo({
        left: ref.current.offsetLeft - (isMobile ? 0 : 40),
        behavior: "smooth",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <>
      <div className="flex gap-4 mb-6 items-center">
        <h1 className="text-4xl font-black mr-4 ">
          {locale === "en" ? "Featured projects" : "Proyectos destacados"}
        </h1>
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full hover:bg-white transition-colors ${
              activeIndex === index ? "bg-primary" : "bg-light"
            }`}
          ></button>
        ))}
      </div>
      <div className="animate-fadein absolute right-16 bg-gradient-to-l from-background-950 to-transparent w-20 z-10 h-[360px] max-md:hidden pointer-events-none"></div>
      {activeIndex !== 0 && (
        <div className="animate-fadein absolute left-16 bg-gradient-to-r from-background-950 to-transparent w-10 z-10 h-[360px] max-md:hidden pointer-events-none"></div>
      )}
      {activeIndex !== PROJECTS.length - 1 && (
        <button
          className="absolute right-16 max-md:right-1 z-30 bottom-[232px] max-md:bottom-[472px] text-light hover:scale-110 hover:text-white hover:shadow-xl transition-all animate-fadein"
          onClick={() => setActiveIndex((prev) => prev + 1)}
        >
          <ArrowRightIcon />
        </button>
      )}

      {activeIndex !== 0 && (
        <button
          className="absolute rotate-180 left-16 max-md:left-1 z-30 bottom-[232px] max-md:bottom-[472px] text-light hover:scale-110 hover:text-white hover:shadow-xl transition-all animate-fadein"
          onClick={() => setActiveIndex((prev) => prev - 1)}
        >
          <ArrowRightIcon />
        </button>
      )}
      <div
        ref={containerRef}
        className="relative flex gap-4 overflow-x-hidden h-[360px] max-md:h-[720px]"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            cardRef={refs[index]}
            key={index}
            project={project}
            locale={locale}
          />
        ))}
        <div className="min-w-[600px] flex-1"></div>
      </div>
    </>
  );
};
