"use client";
import { useEffect, useState } from "react";
import "./Nav.scss";
import Link from "next/link";
import { FaHome, FaUserTie } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { MdStickyNote2 } from "react-icons/md";
import { usePathname } from "next/navigation";
const Nav = () => {
  const [isActive, setIsactive] = useState("");
  const path = usePathname();
  useEffect(() => {
    setIsactive(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [path]);
  return (
    <nav className="Nav">
      <div className="container">
        <ul>
          <li>
            <Link className={isActive === "/" ? "active" : ""} href="/">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link
              className={isActive === "/skils" ? "active" : ""}
              href="/skils"
            >
              <FaUserTie />
            </Link>
          </li>
          <li>
            <Link
              className={isActive === "/projects" ? "active" : ""}
              href="/projects"
            >
              <GoProjectSymlink />
            </Link>
          </li>
          <li>
            <Link
              className={isActive === "/contact" ? "active" : ""}
              href="/contact"
            >
              <MdStickyNote2 />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
