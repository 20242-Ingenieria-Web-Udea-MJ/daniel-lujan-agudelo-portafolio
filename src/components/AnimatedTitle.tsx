export const AnimatedTitle = () => {
  return (
    <>
      <div className="flex overflow-hidden flex-nowrap text-2xl animate-title-showup">
        LUJN
      </div>
      <div className="flex overflow-hidden flex-nowrap w-0 text-primary text-2xl animate-title-reveal">
        <span className="ml-[-120px] animate-title-slidein">.DEV</span>
      </div>
    </>
  );
};
