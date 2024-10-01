type NavigationMenuOptionProps = {
  href: string;
  children: React.ReactNode;
};

export const NavigationMenuOption = ({
  href,
  children,
}: NavigationMenuOptionProps) => {
  return (
    <a href={href} className="flex-1">
      <button className="flex justify-center items-center gap-3 w-full h-10 rounded-xl text-primary-200 hover:bg-background-700 hover:text-primary-100 transition-all">
        {children}
      </button>
    </a>
  );
};
