type ProjectType = "educative" | "private" | "public";

type Project = {
  name: string;
  type: ProjectType;
  description: { [key in SupportedLocale]: string };
  dateRange: { [key in SupportedLocale]: string };
  tags: { [key in SupportedLocale]: string[] };
  stack: string[];
  previewSrc?: string;
  moreInfoSrc?: string;
};

type SkillCategories =
  | "Languages"
  | "Frameworks"
  | "Databases"
  | "Platforms"
  | "Tools";

type SupportedLocale = "en" | "es";
