interface TechnologyChip {
  color: string;
  technology: string;
}

const TechnologyChip: React.FC<TechnologyChip> = ({ color, technology }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75`}
          style={{ backgroundColor: color }}></span>
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full`} style={{ backgroundColor: color }}></span>
      </span>
      <p className="text-sm">{technology}</p>
    </div>
  );
};

export default TechnologyChip;
