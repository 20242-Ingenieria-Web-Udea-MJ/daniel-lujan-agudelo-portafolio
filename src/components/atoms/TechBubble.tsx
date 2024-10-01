/* eslint-disable @next/next/no-img-element */
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  src: string;
  delay?: number;
}
export const TechBubble = (props: Props) => {
  return (
    <figure
      className={twMerge(
        "absolute pointer-events-none scale-0 rounded-full flex justify-center items-center bg-white animate-[pop_200ms_0s_ease-in-out_forwards,levitate_3s_ease-in-out_200ms_infinite] p-1",
        props.className
      )}
      style={{
        animationDelay: ` ${props.delay}ms, ${(props.delay ?? 0) + 200}ms`,
      }}
    >
      <img alt="Tech Icon" src={props.src} className="object-fit" />
    </figure>
  );
};
