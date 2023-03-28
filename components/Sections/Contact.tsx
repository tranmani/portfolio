import GithubIcon from "../shared/icons/GithubIcon";
import GmailIcon from "../shared/icons/GmailIcon";
import LinkedInIcon from "../shared/icons/LinkedInIcon";
import MailIcon from "../shared/icons/MailIcon";
import WhatsappIcon from "../shared/icons/WhatsappIcon";
import ChatWindow from "./Chat/ChatWindow";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <section className="mb-4 w-full max-w-[85vw] sm:mb-24 md:max-w-[1200px] md:px-12" id="contact">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <MailIcon />
        </div>

        <div className="mb-20 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase md:text-3xl">How to contact me?</h2>
          <p className="text-neutral-400">Well there are several ways you can reach me</p>
        </div>

        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-16">
            <Link href="https://wa.me/+31651446211" target="_blank" className="flex flex-col items-center">
              <WhatsappIcon className="cursor-pointer transition-all ease-linear hover:text-[rgb(0,168,89)] hover:drop-shadow-[0_0px_15px_rgba(0,168,89,0.75)] hover:dark:drop-shadow-[0_0px_15px_rgba(0,168,89,0.45)]" />
              <p>Whatsapp</p>
            </Link>
            <Link
              href="mailto:minhhuy8137@gmail.com?subject=We%20have%20something%20cool%20to%20tell%20you..."
              target="_blank"
              className="flex flex-col items-center"
            >
              <GmailIcon className="cursor-pointer transition-all ease-linear hover:text-[rgb(223,76,64)] hover:drop-shadow-[0_0px_15px_rgba(223,76,64,0.75)] hover:dark:drop-shadow-[0_0px_15px_rgba(223,76,64,0.45)]" />
              <p>Email</p>
            </Link>
            <Link
              href="https://www.linkedin.com/in/minh-huy-tran/"
              target="_blank"
              className="flex flex-col items-center"
            >
              <LinkedInIcon className="cursor-pointer transition-all ease-linear hover:text-[rgb(0,119,183)] hover:drop-shadow-[0_0px_15px_rgba(0,119,183,0.75)] hover:dark:drop-shadow-[0_0px_15px_rgba(0,119,183,0.45)]" />
              <p>LinkedIn</p>
            </Link>
            <Link href="https://github.com/tranmani" target="_blank" className="flex flex-col items-center">
              <GithubIcon className="cursor-pointer transition-all ease-linear hover:text-[rgb(218,213,142)] hover:drop-shadow-[0_0px_15px_rgba(218,213,142,0.75)] hover:dark:drop-shadow-[0_0px_15px_rgba(218,213,142,0.45)]" />
              <p>GitHub</p>
            </Link>
          </div>
        </div>

        <div className="mb-12 text-center">
          <p className="text-neutral-400">
            Or better yet, you can reach me by using this form without open anything else ;)
          </p>
        </div>
        <ChatWindow />
      </div>
    </section>
  );
};

export default Contact;
