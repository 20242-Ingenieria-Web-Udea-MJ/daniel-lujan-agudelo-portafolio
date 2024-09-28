import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className={twMerge(
        "font-primary border-2 border-primary shadow-primary hover:shadow-[inset_13em_0_0_0_var(--tw-shadow-color)] inline-flex gap-2 items-center justify-center px-4 py-2 rounded-md text-background bg-primary hover:rounded-tr-3xl transition-all duration-300",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};
