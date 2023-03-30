interface IProps {
  className?: string;
}

const GmailIcon: React.FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg
        aria-hidden="true"
        className="h-16 w-16 stroke-black dark:stroke-white"
        fill="none"
        width={480}
        height={480}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.11098 18.9943H4.78839C4.19226 19.0474 3 18.7528 3 17.1491C3 15.5454 3 9.96574 3 7.74088C3 5.51602 5.29936 5.75901 6.46066 6.62465L11.9883 10.6567L17.6323 6.48797C18.9793 5.41731 21 6.16905 21 8.44707C21 11.8185 21 15.395 21 16.7618C21 17.6502 20.7631 18.9943 18.9793 18.9943H16.889V12.2058L11.9883 15.8506L7.11098 12.2058V16.7186"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default GmailIcon;
