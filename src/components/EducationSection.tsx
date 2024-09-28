import { CertificateCard } from "@/components/CertificateCard";
import { CERTS } from "@/constants";

export const EducationSection = (props: { locale: string }) => {
  const locale = props.locale as SupportedLocale;

  return (
    <section id="education" className="mb-20">
      <h1 className="text-4xl font-black mb-10">
        {locale === "es" ? "Educación" : "Education"}
      </h1>
      <div className="flex gap-8 flex-wrap">
        <CertificateCard
          title={
            locale === "es" ? "Ingeniería de Sistemas" : "Systems Engineering"
          }
          issuer="Universidad de Antioquia"
          date={locale === "es" ? "2021 - Presente" : "2021 - Present"}
          locale={locale}
        />
        <CertificateCard
          title="GitHub Foundations"
          issuer="GitHub"
          date="2024"
          certificateSrc={CERTS.githubFoundations}
          imgSrc="/github-foundations.png"
          locale={locale}
        />
        <CertificateCard
          title={
            locale === "es"
              ? "Técnica en sistemas"
              : "Technical Degree in Systems"
          }
          issuer="Servicio Nacional de Aprendizaje - SENA"
          date="2019"
          certificateSrc={CERTS.sena}
          locale={locale}
        />
      </div>
    </section>
  );
};
