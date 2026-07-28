export const site = {
  name: "Huy Tran",
  // The title has to be the words a recruiter searches for, not a label you award
  // yourself. "Product engineer" matched no requisition anyone can apply to.
  role: "Full-stack and AI engineer",
  location: "Almere",
  intro:
    "A chat room that only opens while you are actually at the train station it belongs to. A multi tenant SaaS for salons and an offline first family app, both on the App Store. At Studio WIP, an agentic retrieval system that cites its sources or refuses to answer.",
  /**
   * Reads above the role list, not in the hero. The three month tenure at In The
   * Zone and the job that followed it are the first things a reader notices in the
   * dates, and a reader who is not told why fills the gap with the worst version.
   * It also says how the two roles are connected, which the dates cannot.
   */
  situation:
    "In The Zone ran out of runway in June, three months in. Studio WIP's founder had seen the agentic dashboard I built there and brought me in to take that idea further, which is the retrieval work above. I am not in a hurry to leave it, and I am open to the right thing.",
  availability:
    "Open to full-stack and AI engineering roles in Amsterdam, or remote in the EU. Dutch work authorisation, no sponsorship needed.",
  // A @tranmani.com address would read better here, but only if the mailbox exists.
  email: "minhhuy8137@gmail.com",
  phone: "+31 6 51446211",
  cta: {
    cv: "/cv",
    github: "https://github.com/tranmani",
    linkedin: "https://www.linkedin.com/in/minh-huy-tran/",
  },
  description:
    "Huy Tran is a full-stack and AI engineer near Amsterdam. Multi tenant SaaS, offline first mobile apps, and agentic retrieval that cites its sources or declines.",
} as const;
