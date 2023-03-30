interface IProps {
  className?: string;
}

const LinkedInIcon: React.FC<IProps> = ({ className }) => {
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
          d="M3.50143 6.90595C2.37528 5.7193 3.24155 3.95978 5.14733 4.0007C7.05312 4.04162 7.61619 6.12849 6.83655 7.68341C6.21284 8.92734 4.35326 9.34744 3.50143 9.402V20H9.17547V8.95189H12.9004V10.7523C15.4993 7.68341 21 8.62454 21 13.0029V20H17.1019V14.5169C17.1019 12.0208 15.9757 11.5093 14.698 12.0208C13.4202 12.5323 12.9004 13.453 12.9004 15.3352C12.9004 17.5612 12.9004 19.3726 12.9004 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default LinkedInIcon;
