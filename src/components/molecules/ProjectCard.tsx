import { useCallback, useEffect, useRef, useState } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";
import { ProjectTechBubble } from "@/components/atoms/ProjectTechBubble";
import Tag from "../atoms/Tag";
import { ProjectTypeBadge } from "@/components/atoms/ProjectTypeBadge";
import { twMerge } from "tailwind-merge";

type ProjectCardProps = {
  project: Project;
  cardRef: React.RefObject<HTMLDivElement>;
  locale: SupportedLocale;
};

const ProjectCard = ({ project, cardRef, locale }: ProjectCardProps) => {
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    },
    false
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  const startVideo = useCallback(async () => {
    if (isVisible) {
      await videoRef.current?.play();
    }
  }, [isVisible]);

  const [isHovered, setIsHovered] = useState(false);

  const [previewStatus, setPreviewStatus] = useState<
    "loading" | "success" | "error"
  >("loading");

  useEffect(() => {
    startVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const handleClick = () => {
    if (project.moreInfoSrc) {
      window.open(project.moreInfoSrc, "_blank");
    }
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={twMerge(
        "relative max-md:flex-col min-w-[800px] max-md:min-w-full overflow-hidden flex flex-1 bg-card-gradient rounded-lg hover:drop-shadow-card-hover transition-all",
        project.moreInfoSrc && "cursor-pointer"
      )}
      onClick={handleClick}
    >
      {project.moreInfoSrc && (
        <div
          className={twMerge(
            "transition-all duration-200 animate-pulse flex justify-center items-center absolute right-6 top-6 -rotate-45 w-8 h-8 rounded-full bg-background-950",
            isHovered ? "scale-100" : "scale-0"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </div>
      )}
      <span
        ref={targetRef as React.RefObject<HTMLSpanElement>}
        className="flex justify-center items-center relative min-w-[240px] min-h-[360px] max-md:min-w-auto min-h-auto w-[240px] h-[360px] max-md:w-full max-md:max-h-[240px] max-md:min-h-[240px] max-w-full"
      >
        {typeof project.previewSrc !== "undefined" ? (
          <>
            <div className="absolute flex flex-col items-center gap-2 text-center px-4 text-background-500">
              {previewStatus === "loading" && <Loader />}
              {previewStatus === "error" && (
                <>
                  <WorldOffIcon />
                  {locale === "es"
                    ? "No se pudo cargar el video"
                    : "Could not load the video"}
                </>
              )}
            </div>
            <video
              ref={videoRef}
              className={twMerge(
                "w-full h-full object-cover transition-all",
                previewStatus === "success" ? "opacity-100" : "opacity-0"
              )}
              loop
              muted
              preload="none"
              onLoadedData={() => setPreviewStatus("success")}
              onError={() => setPreviewStatus("error")}
            >
              <source src={project.previewSrc} type="video/mp4" />
            </video>
          </>
        ) : (
          <div className="absolute flex items-center gap-2 text-center px-4 text-background-500">
            {locale === "es"
              ? "No hay video de vista previa"
              : "No preview video available"}
          </div>
        )}
      </span>
      <div className="flex flex-col justify-start items-start p-6">
        <div className="flex gap-8 items-center">
          <span className="font-bold text-3xl">{project.name}</span>
          <ProjectTypeBadge type={project.type} locale={locale} />
        </div>
        <span className="text-light text-sm mb-4">
          {project.dateRange[locale]}
        </span>
        <span className="mb-3">
          {project.description[locale]}{" "}
          {project.moreInfoSrc && (
            <strong className="text-primary hover:underline">
              {locale === "es" ? "Leer más" : "Read more"} &rarr;
            </strong>
          )}
        </span>
        <div className="flex gap-2 my-4 flex-wrap">
          {project.tags[locale].map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <div className="flex gap-2 my-4 flex-wrap">
          {project.stack.map((tech, index) => (
            <ProjectTechBubble key={index} tech={tech} />
          ))}
        </div>
      </div>
    </article>
  );
};

const WorldOffIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-world-off"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5.657 5.615a9 9 0 1 0 12.717 12.739m1.672 -2.322a9 9 0 0 0 -12.066 -12.084" />
      <path d="M3.6 9h5.4m4 0h7.4" />
      <path d="M3.6 15h11.4m4 0h1.4" />
      <path d="M11.5 3a17.001 17.001 0 0 0 -1.493 3.022m-.847 3.145c-.68 4.027 .1 8.244 2.34 11.833" />
      <path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.005m-.207 3.818a16.979 16.979 0 0 1 -2.342 6.177" />
      <path d="M3 3l18 18" />
    </svg>
  );
};

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full h-16 w-16 bg-background-400 animate-ping"></div>
    </div>
  );
};

export default ProjectCard;
