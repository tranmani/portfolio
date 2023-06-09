interface IProps {
  className?: string;
}

const WhatsappIcon: React.FC<IProps> = ({ className }) => {
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
          d="M4.75185 6.52361C3.68367 7.53066 2.06003 10.8623 4.11094 16.1326L3 21L7.27274 19.4894C10.1782 20.7482 16.1173 21.4616 19.4928 16.4263C22.6538 11.7108 20.3155 6.90123 17.3137 4.67733C15.2537 3.15123 11.5198 1.94151 6.80273 4.42557C6.34698 6.46765 6.2131 11.0637 9.49456 13.9506C13.5964 17.5592 16.8437 15.7969 17.5273 14.5381L14.7073 12.9016L13.2973 14.1604C12.2576 13.7968 10.0415 12.6498 9.49456 10.9714L10.4346 9.7126L9.23819 6.90124C8.9391 6.98516 8.2341 7.26629 7.80683 7.71947"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default WhatsappIcon;
