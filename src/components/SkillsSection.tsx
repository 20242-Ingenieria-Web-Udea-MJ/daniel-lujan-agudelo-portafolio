import { SkillsMenu } from "./SkillMenu";

export const SkillsSection = (props: { locale: SupportedLocale }) => {
  const locale = props.locale;

  return (
    <section id="skills" className="my-20">
      <h1 className="text-4xl font-black">
        {locale === "en" ? "Skills" : "Tecnologías"}
      </h1>
      <div className="flex flex-col gap-6 mt-10">
        <SkillsMenu locale={locale} />
      </div>
    </section>
  );
};
