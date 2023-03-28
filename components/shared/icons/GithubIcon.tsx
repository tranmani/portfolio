interface IProps {
  className?: string;
}

const GithubIcon: React.FC<IProps> = ({ className }) => {
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
          d="M11.7444 14C5.13962 13 5.64768 8.5 7.67987 7C7.27882 6.39155 6.66375 4 7.1718 3.00001C8.18792 3.5 9.55173 4.23944 10.2202 5C12.2524 4 15.3007 4 16.8249 5C17.226 4.18873 18.6968 3.42254 19.3652 3C19.9668 3.60845 19.5323 5.98592 19.3652 7C20.3678 9.19718 20.8894 12.5 15.3007 14C16.1273 14.6688 17.4571 16.2652 18.3819 18.0893C19.0373 19.3821 17.7844 20.5701 16.3571 20.3176C15.3606 20.1413 14.2545 20 13.2685 20C12.0745 20 10.494 20.2071 9.12617 20.4329C7.71155 20.6663 6.56735 19.4472 7.29296 18.2106C7.81974 17.3128 8.48393 16.4725 9.20408 16C8.95342 15.662 7.9605 14.6887 6.15574 15.5C3.89979 16.5141 2.60607 14.2676 3.10739 13"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default GithubIcon;
