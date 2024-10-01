import { TechBubble } from "../atoms/TechBubble";

export const Avatar = () => {
  return (
    <div className="relative max-md:hidden">
      <img
        alt="Avatar"
        src="/avatar.jpg"
        className="w-[350px] h-[480px] object-cover rounded-3xl hover:brightness-110 transition-all"
        width={350}
        height={480}
      />
      <TechBubble
        className="w-[100px] h-[100px] bottom-[-60px] right-8"
        src="/nextjs.svg"
      />
      <TechBubble
        className="w-[70px] h-[70px] bottom-12 left-[-20px] p-3"
        src="/typescript.svg"
        delay={500}
      />
      <TechBubble
        className="w-[56px] h-[56px] bottom-36 right-2 p-2"
        src="/postgresql.svg"
        delay={1000}
      />
      <TechBubble
        className="w-[56px] h-[56px] top-36 left-[-10px]"
        src="/fastapi.svg"
        delay={1200}
      />
      <TechBubble
        className="w-[56px] h-[56px] top-12 right-10"
        src="/tailwind.svg"
        delay={1400}
      />
    </div>
  );
};
