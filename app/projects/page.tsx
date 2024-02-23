import { Metadata } from "next";
import Projects from "./Projects";
export const metadata: Metadata = {
  title: "Projects | Mohammed Elsayed",
  description: `
  hello i am mohammed elsayed front end developer using React.js & Next.js,
  and i am always eager to evolve, improve my skills, and acquire new
  ones.
  `,
};

function Page() {
  return <Projects />;
}

export default Page;
