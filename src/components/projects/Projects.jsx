import { TfiLink } from "react-icons/tfi";
import { FaCheck, FaChevronLeft, FaChevronRight, FaGithub, FaXmark } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdVisibility } from "react-icons/md";
import { dataProjects } from "../../data"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { useRef, useState } from "react";
import imgError from "../../assest/imgError.jpg"
import "./Projects.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Popup = ({
    togglePopup,
    setTogglePopup,
    datePopup
}) => {
    const refPopup = useRef()
    const refMySwiper = useRef()
    const handleTogglePopup = () => {
        setTogglePopup(!togglePopup)
        let bullet = refMySwiper.current.querySelector(".swiper-pagination-bullet")
        if (bullet) {
            setTimeout(() => {
                bullet.click()
            }, 400)
        }
    }
    const handelBtnSwiper = (id) => {
        let popupTag = refPopup.current,
            prev = popupTag.querySelector(".swiper-button-prev"),
            next = popupTag.querySelector(".swiper-button-next");
        if (prev && next) {
            id === "prev" ? prev.click() : next.click()
        }
    }
    const handleErrorImg = (e) => {
        e.target.src = imgError
    }
    return (
        <div ref={refPopup} className={`popupDetalisProject ${togglePopup ? "active" : ""}`}>
            {datePopup ? (<div className="details">
                <i onClick={handleTogglePopup} className="close"><FaXmark /></i>
                <Swiper
                    pagination={{
                        clickable: true
                        // type: "fraction"
                    }}
                    navigation
                    modules={[Navigation, Pagination]}
                    ref={refMySwiper}
                    className="mySwiper"
                >
                    {datePopup.images.map(scr => (
                        <SwiperSlide key={Math.random()}><img onError={handleErrorImg} src={scr} alt={`project_Images`} /></SwiperSlide>
                    ))}
                </Swiper>
                <div className="btns">
                    <button onClick={() => handelBtnSwiper("prev")} className="btn"><FaChevronLeft /></button>
                    <button onClick={() => handelBtnSwiper("nex")} className="btn"><FaChevronRight /></button>
                </div>
            </div>) : ""}
        </div>
    )
}

const Projects = () => {
    const [datePopup, setDatePopup] = useState(null)
    const [togglePopup, setTogglePopup] = useState(false)
    const getDataPopup = (project) => {
        setDatePopup(project)
        setTogglePopup(!togglePopup)
    }
    const copyLink = (e, link) => {
        navigator.clipboard.writeText(link)
        e.target.classList.add("active")
        setTimeout(() => {
            e.target.classList.remove("active")
            e.target.querySelector("small")?.classList.add("active")
        }, 1000)
        setTimeout(() => {
            e.target.querySelector("small")?.classList.remove("active")
        }, 2200)
    }
    const handleErrorImg = (e) => {
        e.target.src = imgError
    }
    return (
        <>
            <Popup
                togglePopup={togglePopup}
                setTogglePopup={setTogglePopup}
                datePopup={datePopup}
            />
            <div className='Projects showComponent'>
                <div className="container">
                    <h1 className="motionTitle">recent work</h1>
                    <ul className="list">
                        {dataProjects && dataProjects.map(project => (
                            <div key={project.id} className="item">
                                <div className="imgs">
                                    {/* {project.images.map((img, i) => (
                                    <img
                                        key={Math.random()}
                                        className={`${i === 0 ? "active" : ""}`}
                                        src={img} alt="photoProj1"
                                    />))
                                    } */}
                                    <img
                                        onError={handleErrorImg}
                                        onClick={() => getDataPopup(project)}
                                        className="active"
                                        src={project.images[0]}
                                        alt="img_project"
                                    />
                                </div>

                                <div className="details">
                                    <p className="name">{project.name}</p>
                                    <span className="desc">{project.desc || ""}</span>
                                    <div className="bar">
                                        <div className="icons">
                                            <i onClick={() => getDataPopup(project)}>
                                                <MdVisibility />
                                            </i>
                                            <i onClick={(e) => copyLink(e, project.link)}>
                                                <TfiLink className="icon" />
                                                <span></span>
                                                <small> <FaCheck /> </small>
                                            </i>
                                            <i><FaGithub /></i>
                                        </div>
                                        <a target="_blank"
                                            className="btn"
                                            href={project.link}
                                            rel="noreferrer">
                                            visit
                                            <i><FaArrowRightLong /></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Projects