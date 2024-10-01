import { LOGOS } from "../../constants";
import { ToolTip } from "./Tooltip";

type ProjectTechBubbleProps = {
  tech: string;
};

export const ProjectTechBubble = ({ tech }: ProjectTechBubbleProps) => {
  return (
    <ToolTip tooltip={tech}>
      <div className="hover:scale-125 flex justify-center items-center rounded-full bg-white w-9 h-9 p-1 hover:translate-y-[-10%] transition-all hover:shadow-[0px_4px_10px_0px_rgba(255,255,255,0.5)]">
        <img src={LOGOS[tech]} alt={tech} className="object-cover" />
      </div>
    </ToolTip>
  );
};
