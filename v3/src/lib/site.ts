export const site = {
  name: "Huy Tran",
  role: "Product engineer",
  location: "Amsterdam",
  /**
   * First person, concrete nouns, no adjectives. Every noun here is something
   * a reader can go and click.
   */
  intro:
    "I build and ship whole products. A multi tenant SaaS for salons, an offline first family app on the App Store, and a chat room you can only join while standing on the train platform it belongs to. At Studio WIP I build an agentic retrieval system that cites its sources or refuses to answer.",
  availability: "Open to senior full-stack and AI engineering roles in Amsterdam or remote in the EU.",
  email: "minhhuy8137@gmail.com",
  cta: {
    // TODO: point this at the real Cal.com booking link and re-enable the button.
    booking: "",
    cv: "/Huy-Tran-CV.pdf",
    github: "https://github.com/tranmani",
    linkedin: "https://www.linkedin.com/in/minh-huy-tran/",
  },
  description:
    "Huy Tran is a product engineer in Amsterdam. Multi tenant SaaS, offline first mobile apps, and agentic retrieval that cites its sources or declines.",
} as const;
