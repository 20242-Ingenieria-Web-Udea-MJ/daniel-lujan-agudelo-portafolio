interface ToolTipProps {
  children: React.ReactNode;
  tooltip?: string;
}

export const ToolTip = ({ children, tooltip }: ToolTipProps): JSX.Element => {
  return (
    <div className="group relative flex justify-center">
      {children}
      <span className="absolute bottom-12 text-center scale-0 transition-all rounded bg-white p-2 text-xs text-background group-hover:scale-100">
        {tooltip}
      </span>
    </div>
  );
};
