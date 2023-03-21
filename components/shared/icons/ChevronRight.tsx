import useDarkMode from "@/lib/hooks/use-dark-mode";

interface IProps {
  className?: string;
}

const ChevronRight: React.FC<IProps> = ({ className }) => {
  const { theme } = useDarkMode();

  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-18.53 -18.53 222.4 222.4"
        xmlSpace="preserve"
        stroke="#000"
        strokeWidth={0.002}>
        <path
          style={{
            fill: theme == "light" ? "#010002" : "#fff",
          }}
          d="M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"
        />
      </svg>
    </div>
  );
};

export default ChevronRight;
