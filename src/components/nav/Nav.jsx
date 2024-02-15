import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdArticle } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import "./Nav.scss";
import { IoMdHome } from "react-icons/io";
const Nav = () => {
    const { pathname } = useLocation()
    const refChangeStatusMood = useRef()
    let statusMood = localStorage.statusMood || "dark"
    const handlestatusMood = (e) => {
        statusMood = statusMood === "dark" ? "light" : "dark"
        e.target.className = `darkMood ${statusMood}`
        localStorage.setItem("statusMood", statusMood)
        document.body.classList.toggle("dark", localStorage.statusMood === "dark")
    };
    useEffect(() => {
        document.body.classList.toggle("dark", statusMood === "dark")
        refChangeStatusMood.current.className = `darkMood ${localStorage.statusMood || "dark"}`
    }, [])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [pathname])
    return (
        <div className='Nav'>
            <div className="containerNav">
                <ul className="flex-align">
                    <h3 className="title">
                        <NavLink to="/">
                            portfo <span>lio</span>
                        </NavLink>
                    </h3>
                    <NavLink className={`btn`} to={"/"}>
                        <li >
                            <span>home</span>
                            <i><IoMdHome /></i>
                        </li>
                    </NavLink>
                    <NavLink className={`btn`} to={"/about"}>
                        <li >
                            <span>about</span>
                            <i><MdArticle /></i>
                        </li>
                    </NavLink>
                    <NavLink className={`btn`} to={"/projects"}>
                        <li >
                            <span>projects</span>
                            <i><GoProjectSymlink /></i>
                        </li>
                    </NavLink>
                    <NavLink className={`btn`} to={"/contact"}>
                        <li >
                            <span>contact</span>
                            <i><FaPhoneAlt /></i>
                        </li>
                    </NavLink>
                </ul>
                <button ref={refChangeStatusMood} className={`darkMood`} onClick={handlestatusMood}>
                    <i className="flex-center sun"><FaSun /></i>
                    <i className="flex-center moon"><FaMoon /></i>
                </button>
            </div>
        </div >
    )
};

export default Nav;