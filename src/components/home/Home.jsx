import "./Home.scss"
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { Player } from "@lottiefiles/react-lottie-player";
import myImage from '../../assest/Mohamed_Elsayed.jpg'
import imgMark from '../../assest/markRefistration.png'
import animatHome from "../../animation/animatHome.json"
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className='Home showComponent'>
            <div className="container">
                <div className="details">
                    <div className="boxImg">
                        <img loading="lazy" className="myImg" src={myImage} alt="my_image" />
                        <img className="imgMark" src={imgMark} alt="my_image" />
                    </div>
                    <div className="info">
                        <span>hello, i'am</span>
                        <h2 className='myName'>mohammed elsayed</h2>
                        <span>frontend web developer</span>
                    </div>
                    <div className="links">
                        <i>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/muhammed.elsayed.545?mibextid=ZbWKwL"
                                rel="noreferrer">
                                <FaFacebookF />
                            </a>
                        </i>
                        <i>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/user_othman?igsh=MWdoZ2RsZmR5Y3JnOQ=="
                                rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </i>
                        <i>
                            <a target="_blank" href="/"><FaGithub /></a>
                        </i>
                        <i>
                            <a
                                href="https://www.linkedin.com/in/mohamed-el-sayed-9bb62826b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                rel="noreferrer">
                                <IoLogoLinkedin />
                            </a>
                        </i>
                    </div>
                    <div className="btns">
                        <button className="btn">
                            <Link to={"/projects"}>
                                portfolio
                            </Link>
                        </button>
                        <button className="btn">
                            <Link to="/about">about me</Link>
                        </button>
                    </div>
                </div>
                <div className="animatHome">
                    <Player className="animat" src={animatHome} loop autoplay />
                </div>
            </div>
        </div>
    )
}

export default Home