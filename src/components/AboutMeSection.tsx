import { Button } from "@/components/Button";

export const AboutMeSection = (props: { locale: string }) => {
  const locale = props.locale as SupportedLocale;

  return (
    <section
      id="about-me"
      className="flex relative flex-col items-start justify-center mt-32 overflow-hidden flex-nowrap text-background bg-background-100 [box-shadow:_0_0_0_100vmax_var(--tw-shadow-color)] mb-20
    [clip-path:inset(0_-100vmax)] shadow-background-100 py-24 animate-slideup"
    >
      <h1 className="font-black text-4xl mb-10">
        {locale === "en" ? "About me" : "Sobre mí"}
      </h1>
      <p className="max-w-[calc(100%-520px)] max-md:max-w-full">
        {locale === "en" ? (
          <>
            Eighth semester student of Systems Engineering, based in
            <strong className="text-yellow-500">Medellin, Colombia</strong>. Web
            development enthusiast.
          </>
        ) : (
          <>
            Estudiante de octavo semestre de Ingeniería de Sistemas, de
            <strong className="text-yellow-500">Medellín, Colombia</strong>.
            Entusiasta del desarrollo web.
          </>
        )}
      </p>
      <a href="#contact">
        <Button className="mt-6 bg-transparent shadow-primary-950 border-primary-950 hover:text-background-100">
          {locale === "en" ? "Get in touch" : "Ponte en contacto"}
        </Button>
      </a>
      <img
        src="/developer-illustration.svg"
        alt="Developer"
        className="flex-1 w-[480px] absolute right-0 -z-10 opacity-70 max-md:opacity-10 max-md:-right-40"
      />
    </section>
  );
};
