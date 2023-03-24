interface IProps {
  className?: string;
}

const SendButton: React.FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 24 24"
        height="24"
        width="24"
        preserveAspectRatio="xMidYMid meet"
        version="1.1"
        x="0px"
        y="0px"
        enable-background="new 0 0 24 24"
        xmlSpace="preserve"
        className="text-[#8696a0]"
      >
        <path
          fill="currentColor"
          d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
        ></path>
      </svg>
    </div>
  );
};

export default SendButton;
