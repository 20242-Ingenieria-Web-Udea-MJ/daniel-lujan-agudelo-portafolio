import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { FileTypePDFIcon } from "./icons/FileTypePDFIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { CV_SRC, SOCIAL_LINKS } from "@/constants";

export const HeroSection = (props: { locale: string }) => {
  const locale = props.locale as SupportedLocale;

  return (
    <section className="flex w-full items-center justify-between mt-10">
      <div className="py-10">
        <h2 className="text-2xl max-md:text-lg mb-4">
          {locale === "en" ? <>Hey! I&apos;m Daniel</> : <>Hola! Soy Daniel</>}
        </h2>
        <h1 className="mb-10 text-6xl max-md:text-4xl font-black text-primary">
          {locale === "en" ? "Fullstack Developer" : "Desarrollador Fullstack"}
        </h1>
        <div className="flex gap-6 flex-wrap">
          <a href={SOCIAL_LINKS.github} target="_blank">
            <Button>
              <GithubIcon />
              Github
            </Button>
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank">
            <Button>
              <LinkedinIcon />
              Linkedin
            </Button>
          </a>
          <a href={CV_SRC[locale]} target="_blank">
            <Button className="bg-transparent text-primary hover:text-background duration-300">
              <FileTypePDFIcon />
              CV
            </Button>
          </a>
        </div>
      </div>
      <Avatar />
    </section>
  );
};
