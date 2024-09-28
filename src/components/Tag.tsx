type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return (
    <label className="text-black font-secondary text-xs font-medium bg-primary px-2 py-1 rounded">
      {text}
    </label>
  );
};

export default Tag;
