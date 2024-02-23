import "./Header.scss";
import Image from "next/image";
import myLogo from "../../public/favicon.ico";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <Link href={"/"} className="logo">
          <div className="img">
            <Image src={myLogo} alt="log_mohamed_elsayed" />
          </div>
          <span>
            MHD <span>.dev</span>
          </span>
        </Link>
        <div className="links">
          <a
            target="_blank"
            href="https://www.facebook.com/muhammed.elsayed.545?mibextid=ZbWKwL"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/user_othman?igsh=MWdoZ2RsZmR5Y3JnOQ=="
          >
            <RiInstagramFill />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-el-sayed-9bb62826b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
