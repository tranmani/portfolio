import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="justify-center text-center">
      <Image alt="huy tran's picture" src="/logo.jpg" width={170} height={170} className="margin-auto mt-14 rounded-full" />
      <h1 className="mt-8">Huy Tran</h1>
      <div>Front-end / Back-end developer</div>
      <div>in the Netherlands 🇳🇱</div>

      <ul className="mt-8">
        {sections.map((section) => (
          <li key={section.section}>
            <Link href="#" data-nav-section={section.section}>
              {section.name}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <p>
          <small>a</small>
        </p>
        <ul>
          {socialMedias.map((socialMedia) => (
            <li key={socialMedia.name}>
              <Link href={socialMedia.link}>
                <i className={socialMedia.icon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

const sections = [
  {
    name: "Home",
    section: "home",
  },
  {
    name: "About",
    section: "about",
  },
  {
    name: "Services",
    section: "services",
  },
  {
    name: "Skills",
    section: "skills",
  },
  {
    name: "Education",
    section: "education",
  },
  {
    name: "Experience",
    section: "experience",
  },
  {
    name: "Work",
    section: "work",
  },
  {
    name: "Blog",
    section: "blog",
  },
  {
    name: "Contact",
    section: "contact",
  },
];

const socialMedias = [
  {
    name: "Facebook",
    icon: "icon-facebook2",
    link: "https://www.facebook.com/jackson.ford.399",
  },
  {
    name: "Twitter",
    icon: "icon-twitter2",
    link: "https://twitter.com/jacksonford",
  },
  {
    name: "Instagram",
    icon: "icon-instagram",
    link: "https://www.instagram.com/jacksonford/",
  },
  {
    name: "LinkedIn",
    icon: "icon-linkedin2",
    link: "https://www.linkedin.com/in/jackson-ford-1b1b0a1b/",
  },
];
