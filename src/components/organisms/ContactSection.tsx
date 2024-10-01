import { EmailShareIcon } from "../atoms/icons/EmailShareIcon";
import { CONTACT_EMAIL } from "@/constants";

export const ContactSection = (props: { locale: string }) => {
  const locale = props.locale as SupportedLocale;

  return (
    <section
      id="contact"
      className="flex gap-20 flex-wrap items-center bg-background-950 [box-shadow:_0_0_0_100vmax_var(--tw-shadow-color)] mb-20
    [clip-path:inset(0_-100vmax)] shadow-background-950 py-24"
    >
      <div className="max-w-[400px]">
        <h1 className="text-4xl font-black text-white mb-2">
          {locale === "es" ? "Ponte en contacto" : "Get in touch"}
        </h1>
        <h2 className="font-secondary text-primary-200 font-bold mb-6">
          {locale === "es"
            ? "Construyamos un proyecto increíble juntos"
            : "Let's build an awsome project together"}
        </h2>
        <p>
          {locale === "es"
            ? "Actualmente estoy disponible para trabajar. Puedo realizar tu próximo proyecto, o formar parte de tu equipo."
            : " I am currently available to work. I can build your next project, or become a part of your team."}
        </p>
      </div>
      <div className="flex-1">
        <div className="relative overflow-hidden flex items-center flex-nowrap w-fit font-bold border border-background-700 rounded-xl">
          <span className="text-primary-100 text-2xl max-lg:text-sm px-6 py-4">
            {CONTACT_EMAIL}
          </span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group absolute flex justify-center items-center right-0 w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-xl bg-primary-100 hover:w-[480px] max-lg:hover:w-[324px] transition-all duration-700 cursor-pointer"
          >
            <span className="text-nowrap transition-all text-background hidden group-hover:inline-block animate-fadein">
              {locale === "es" ? "¡Envíame un mensaje!" : "Send me a message!"}
            </span>
          </a>
          <button className="inline-flex pointer-events-none z-10 justify-center items-center w-16 h-16 max-lg:w-14 max-lg:h-14 text-nowrap px-4 py-2 text-background-950 font-bold">
            <EmailShareIcon />
          </button>
        </div>
      </div>
    </section>
  );
};
