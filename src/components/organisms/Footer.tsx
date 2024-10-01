import { SOCIAL_LINKS } from "@/constants";

export const Footer = (props: { locale: string }) => {
  const locale = props.locale as SupportedLocale;

  return (
    <footer className="flex justify-between mb-20 flex-wrap gap-6">
      <p>
        {locale === "es" ? "Hecho con" : "Made with"}
        <span className="text-red-500">♥️</span>
        {locale == "es" ? "por" : "by"}
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          className="text-primary-200 font-bold hover:underline"
        >
          @daniel-lujan
        </a>
      </p>
      <div className="flex items-center gap-4 flex-nowrap">
        <p className="text-background-300">
          {locale === "es" ? "Construido con" : "Built with"}
        </p>
        <img src="/tailwind.svg" alt="Tailwind CSS Logo" className="w-8 h-8" />
        <img
          src="/nextjs.svg"
          alt="Astro Logo"
          className="w-8 h-8 invert opacity-60"
        />
      </div>
    </footer>
  );
};
