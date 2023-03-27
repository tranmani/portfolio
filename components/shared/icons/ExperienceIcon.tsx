interface IProps {
  className?: string;
}

const ExperienceIcon: React.FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      <svg aria-hidden="true" width="70px" height="70px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M318.7 233.66666667H165.1c-22.8 0-41.3 18.5-41.3 41.3v513.3c0 22.8 18.5 41.3 41.3 41.3h753.7c22.8 0 41.3-18.5 41.3-41.3V274.96666667c0-22.8-18.5-41.3-41.3-41.3H318.7z"
          fill="#A7B8C6"
        />
        <path
          d="M292.6 210.8H144c-22.1 0-39.9 17.7-39.9 39.6V743c0 21.9 17.9 39.6 39.9 39.6h729.1c22.1 0 39.9-17.7 39.9-39.6V250.4c0-21.9-17.9-39.6-39.9-39.6H292.6z"
          fill="#9ED09E"
        />
        <path
          d="M372.2 675c-9.7 8.2-10.9 22.9-2.7 32.6 8.2 9.7 22.9 10.9 32.6 2.7l498.1-421.9v-60.6L372.2 675zM547.1 274.5c-8.2-9.7-22.9-10.9-32.6-2.7L104.1 619.4V680l440.3-372.9c9.7-8.3 10.9-22.9 2.7-32.6z"
          fill="#BBDBBB"
        />
        <path d="M498.6 484.6m-188.9 0a188.9 188.9 0 1 0 377.8 0 188.9 188.9 0 1 0-377.8 0Z" fill="#FFFFFF" />
        <path
          d="M706.6 506.7H284.7c-4 0-7.3-3.3-7.3-7.3v-29.5c0-4 3.3-7.3 7.3-7.3h421.9c4 0 7.3 3.3 7.3 7.3v29.5c0 4-3.3 7.3-7.3 7.3z"
          fill="#FFFFFF"
        />
        <path
          d="M473.5 695.6V273.7c0-4 3.3-7.3 7.3-7.3h29.5c4 0 7.3 3.3 7.3 7.3v421.9c0 4-3.3 7.3-7.3 7.3h-29.5c-4 0-7.3-3.3-7.3-7.3z"
          fill="#FFFFFF"
        />
        <path d="M498.6 484.6m-152.9 0a152.9 152.9 0 1 0 305.8 0 152.9 152.9 0 1 0-305.8 0Z" fill="#4DA6D8" />
        <path d="M498.6 484.6m-76.6 0a76.6 76.6 0 1 0 153.2 0 76.6 76.6 0 1 0-153.2 0Z" fill="#9ACDE0" />
        <path d="M498.6 484.6m-40.8 0a40.8 40.8 0 1 0 81.6 0 40.8 40.8 0 1 0-81.6 0Z" fill="#FFFFFF" />
        <path
          d="M549.7 395.2c5.4-14.4 2.8-28.8-5.8-32-8.5-3.2-19.9 6-25.3 20.4l-33.7 90.5 31.1 11.6 33.7-90.5z"
          fill="#BA5955"
        />
        <path
          d="M484.9 474.1l-37.3 100c-5.4 14.4-2.8 28.8 5.8 32 8.5 3.2 19.9-6 25.3-20.4l37.3-100-31.1-11.6z"
          fill="#FFFFFF"
        />
        <path
          d="M872.4 796.1H118.8c-30.2 0-54.9-24.6-54.9-54.8V228c0-30.2 24.6-54.9 54.9-54.9h753.6c30.2 0 54.8 24.6 54.8 54.9v513.3c0.1 30.2-24.5 54.8-54.8 54.8zM118.8 200.2c-15.3 0-27.7 12.4-27.7 27.7v513.3c0 15.3 12.4 27.7 27.7 27.7h753.6c15.3 0 27.7-12.4 27.7-27.7V228c0-15.3-12.4-27.7-27.7-27.7H118.8z"
          fill="#3E3A39"
        />
      </svg>
    </div>
  );
};

export default ExperienceIcon;
