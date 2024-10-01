import { ArrowRightIcon } from "../atoms/icons/ArrowRightIcon";

interface Props {
  title: string;
  issuer: string;
  date: string;
  certificateSrc?: string;
  imgSrc?: string;
  locale: SupportedLocale;
}

export const CertificateCard = (props: Props) => {
  const { title, issuer, date, certificateSrc, imgSrc } = props;
  const locale = props.locale || "en";

  return (
    <div
      className="group rounded-xl w-[480px] h-52 flex flex-col justify-between cursor-pointer
  overflow-hidden p-6 bg-background-800 transition-all border border-background-950 relative
  hover:scale-105 hover:brightness-125 before:transition-all before:absolute before:-top-1/2 before:-left-full
  before:-rotate-45 before:h-96 before:shadow-glasshover before:duration-500 hover:before:left-[calc(100%+5rem)]"
    >
      {certificateSrc && (
        <>
          <div className="scale-0 transition-all duration-200 group-hover:scale-100 flex justify-center items-center absolute right-6 top-6 -rotate-45 w-8 h-8 rounded-full bg-background-950">
            <ArrowRightIcon />
          </div>
          <a
            href={certificateSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20"
          />
        </>
      )}
      <div className="z-10">
        <p className="font-bold text-xl mb-2">{title}</p>
        <p className="font-secondary text-primary font-bold mb-2">{issuer}</p>
        <p className="text-background-200">{date}</p>
      </div>
      {certificateSrc ? (
        <p className="text-background-200 text-sm transition duration-300 w-fit">
          {locale === "es"
            ? "Clic para ver certificado"
            : "Click to view certificate"}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-background-200" />
        </p>
      ) : (
        <p className="rounded-full px-6 py-1 w-fit text-sm bg-background-950 text-background-200">
          {locale === "es" ? "Próximamente" : "Coming soon"}
        </p>
      )}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={title}
          className="h-full w-auto absolute pointer-events-none object-cover top-0 -right-16 opacity-50 group-hover:opacity-80 transition-all duration-300 group-hover:right-0"
        />
      )}
    </div>
  );
};
