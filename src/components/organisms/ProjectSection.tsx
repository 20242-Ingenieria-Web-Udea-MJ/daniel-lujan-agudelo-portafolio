import React, { useEffect } from "react";
import { ProjectSlider } from "@/components/molecules/ProjectSlider";

export const ProjectSection = ({ locale }: { locale: SupportedLocale }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-container");
        }
      });
    });

    observer.observe(document.querySelector("#projects") as Element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .section-container {
          animation: section-reveal 1s;
        }

        @keyframes section-reveal {
          0% {
            opacity: 0;
            transform: translateY(30%) scale(0.7);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <section
        id="projects"
        className="relative bg-background-950 shadow-background-950 mt-10 p-16 max-lg:px-0 rounded-3xl max-lg:[box-shadow:_0_0_0_100vmax_var(--tw-shadow-color)] [clip-path:inset(0_-100vmax)]"
      >
        <ProjectSlider locale={locale} />
      </section>
    </>
  );
};

export default ProjectSection;
