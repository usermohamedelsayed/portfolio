import "./About.scss"
import animatAbout from '../../animation/animatAbout.json'
import { Player } from "@lottiefiles/react-lottie-player"
import { useRef } from "react"
import { Link } from "react-router-dom"

const Section = () => {
    return (
        <section>
            <div className="wrapperInofs">
                <div>
                    <span className="year">201-2020</span>
                    <p>bach of technology - todfad university</p>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, iste.
                        adipisicing elit. Tempore, iste.
                    </small>
                </div>
                <div>
                    <span className="year">201-2022</span>
                    <p>bach of technology - todfad university</p>
                    <small>
                        adipisicing elit. Tempore, iste.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, iste.
                    </small>
                </div>
                <div>
                    <span className="year">201-2024</span>
                    <p>bach of technology - todfad university</p>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, iste.
                        Lorem ipsum dolor sit amet consectetur
                    </small>
                </div>
            </div>
        </section>
    )
}

const About = () => {
    const refFristItem = useRef();
    const refSliderList = useRef();
    const refEducation = useRef();
    const refExperience = useRef();
    const handleSlider = (id) => {
        const width = refFristItem.current.scrollWidth + 20
        refSliderList.current.scrollLeft += id === 'education' ? -width : width
        if (id === "education") {
            refEducation.current.classList.add("active");
            refExperience.current.classList.remove("active")
        } else {
            refEducation.current.classList.remove("active");
            refExperience.current.classList.add("active")
        }
    };
    return (
        <div className='About showComponent'>
            <div className="container">
                <div className="animat">
                    <Player src={animatAbout} loop autoplay />
                </div>
                <div className="info">
                    <h1>about me</h1>
                    <span className="desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo distinctio incidunt quas fuga totam repudiandae blanditiis dicta eligendi, accusantium nisi, nihil repellendus voluptatibus neque pariatur accusamus, ullam molestias autem cupiditate!
                    </span>
                    <span className="line"></span>
                    <div className="listSkils">
                        <p className="title">skils</p>
                        <ul>
                            <li>html</li>
                            <li>css</li>
                            <li>bootstrap</li>
                            <li>scss</li>
                            <li>js</li>
                            <li>react js</li>
                            <li>redux tollkit</li>
                        </ul>
                    </div>
                    <span className="line"></span>
                    <div className="experiences">
                        <div className="options">
                            <p ref={refEducation} onClick={() => handleSlider("education")} className="title active">education</p>
                            <p ref={refExperience} onClick={() => handleSlider("experience")} className="title">experience</p>
                        </div>
                        <div className="slider">
                            <div ref={refSliderList} className="list">
                                <div ref={refFristItem} className="item">
                                    <Section />
                                </div>
                                <div className="item">
                                    <Section />
                                </div>
                            </div>
                        </div>
                        <div className="btns">
                            <button className="btn">download cv</button>
                            <button className="btn">
                                <Link to={"/contact"}>contac me</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About