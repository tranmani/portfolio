import Ghost from "../shared/icons/Ghost";
import ChatWindow from "./Chat/ChatWindow";

const Contact: React.FC = () => {
  return (
    <section className="mb-24 w-full max-w-[85vw] md:max-w-[1200px] md:px-12" id="contact">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <Ghost className="h-24 w-24" />
        </div>

        <div className="mb-20 text-center">
          <h2 className="mb-4 text-2xl font-bold uppercase md:text-3xl">How to contact me?</h2>
          <p className="text-neutral-400">Well there are several ways you can reach me</p>
        </div>

        <div className="mb-16">
          <div className="flex flex-col items-center gap-16">minhhuy8137@gmail.com</div>
        </div>

        <div className="mb-12 text-center">
          <p className="text-neutral-400">Or better yet, you can reach me by using this form ;)</p>
        </div>
        <ChatWindow />
      </div>
    </section>
  );
};

export default Contact;
