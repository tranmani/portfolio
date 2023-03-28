export interface IExperience {
  title: string;
  company: string;
  place: string;
  description: string;
  date: string;
}

export const experiences: IExperience[] = [
  {
    title: "Junior Web Developer",
    company: "SevginWeb",
    place: "Deventer, Netherlands",
    description: "Further develop the deposit page of the application",
    date: "January 2023 - Present",
  },
  {
    title: "Web Developer Intern",
    company: "Accenture",
    place: "Amsterdam, Netherlands",
    description:
      "- Interviewing stakeholders in order to create the front-end designs.|- Developing the microservice with Go.|- Deploying the microservice to GCP with Azure Pipeline, utilized Docker and Kubernetes.",
    date: "May 2022 - November 2022",
  },
  {
    title: "Part-time Web Developer",
    company: "SevginWeb",
    place: "Remote",
    description:
      "- Building a number of blogs from scratch with Nextjs and headless WordPress with a focus on SEO.|- Creating serverless scripts using Cloudflare Worker.|- Experiencing working in the iGaming industry.",
    date: "August 2021 - December 2022",
  },
  {
    title: "Web Developer Intern",
    company: "Code.rehab",
    place: "Enschede, Netherlands",
    description: "Helping further develop an online magazine platform - Greenzeen.io",
    date: "February 2021 - July 2021",
  },
  {
    title: "Part-time Web Developer",
    company: "Eye Designer",
    place: "Geneva, Switzerland",
    description:
      "- Responsible for the social media appearance of the salon.|- Setting up a few e-commerce websites (NopCommerce) for the business BrowHenna.ch - DluxPro.com.",
    date: "July 2020 - December 2020",
  },
];
