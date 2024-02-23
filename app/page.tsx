import Link from "next/link";
import "./Home.scss";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Mohammed Elsayed",
  description: "Mohammed elsayed frontend developer",
};
const Home = () => {
  return (
    <div className="Home Page">
      <div className="container">
        <div className="liensY"></div>
        <h1 className="titlePage">
          <span>mohammed elsayed frontend developer</span>
        </h1>
        <p className="subtitlePage">
          hello i am front end developer using <span>React.js & Next.js</span>,
          and i am always eager to evolve, improve my skills, and acquire new
          ones.
        </p>
        <div className="btns">
          <Link href={"/projects"} className="btn-full">
            my projects
          </Link>
          <Link href={"/contact"} className="btn">
            contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
