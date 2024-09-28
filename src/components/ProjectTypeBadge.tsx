import { twMerge } from "tailwind-merge";

const WorldCodeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-world-code"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h9.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" />
      <path d="M20 21l2 -2l-2 -2" />
      <path d="M17 17l-2 2l2 2" />
    </svg>
  );
};

const SchoolIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-school"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
    </svg>
  );
};

const LockCodeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-lock-code"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" />
      <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
      <path d="M20 21l2 -2l-2 -2" />
      <path d="M17 17l-2 2l2 2" />
    </svg>
  );
};

export const ProjectTypeBadge = ({
  type,
  locale,
}: {
  type: ProjectType;
  locale: SupportedLocale;
}) => {
  const CONTENT = {
    public: {
      label: {
        en: "Public",
        es: "Público",
      }[locale],
      icon: <WorldCodeIcon />,
    },
    educative: {
      label: {
        en: "Educational",
        es: "Educativo",
      }[locale],
      icon: <SchoolIcon />,
    },
    private: {
      label: {
        en: "Private",
        es: "Privado",
      }[locale],
      icon: <LockCodeIcon />,
    },
  };

  return (
    <span
      className={twMerge(
        "rounded-full h-fit border px-3 bg-background border-background-600 text-primary text-nowrap flex flex-nowrap items-center",
        type === "educative" && "border-[#04b589] text-[#04b589]"
      )}
    >
      <span className="scale-90">{CONTENT[type].icon}</span>
      <small className="ml-2 text-xs">{CONTENT[type].label}</small>
    </span>
  );
};
