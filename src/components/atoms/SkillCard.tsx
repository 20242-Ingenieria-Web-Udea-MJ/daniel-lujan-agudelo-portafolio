import { LOGOS } from "../../constants";
import { motion } from "framer-motion";

type SkillCardProps = {
  skill: string;
};

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <motion.div
      className="group flex relative h-20 max-md:h-16 max-md:text-sm flex-nowrap overflow-hidden items-center bg-background-950 border border-background-800 pr-8 rounded-xl text-light hover:text-white select-none"
      variants={{
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0 },
      }}
      transition={{ ease: "easeInOut" }}
    >
      <img
        className="relative h-full -left-8 w-auto saturate-[0.2] group-hover:saturate-150 group-hover:-left-4 transition-all duration-700"
        src={LOGOS[skill]}
        alt={skill}
      />
      <span className="relative">{skill}</span>
    </motion.div>
  );
};
