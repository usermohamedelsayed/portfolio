"use client";
import Image from "next/image";
import { dataProjects } from "@/types";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "./Projects.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaCheck, FaLink } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import Link from "next/link";
const Projects = () => {
  const handleCopy = (e: any, link: string) => {
    e.target.classList.add("active");
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      e.target.classList.replace("active", "copyed");
    }, 1000);
    setTimeout(() => {
      e.target.classList.remove("copyed");
    }, 3000);
  };
  return (
    <section className="Projects Page">
      <div className="container">
        <div className="liensY"></div>
        <h1 className="titlePage">
          <span>recent projects</span>
        </h1>
        <div className="wrapper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >
            {dataProjects.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="img">
                  <Image
                    src={item.imgs[0]}
                    alt={item.title.split("").join("_") + "Mohamed_Elsayed"}
                  />
                </div>
                <div className="details">
                  <p className="title">{item.title}</p>
                  <p className="desc">{item.desc}</p>
                  <div className="icons">
                    <i onClick={(e) => handleCopy(e, item.link)}>
                      <small className="check">
                        <FaCheck />
                      </small>
                      <small className="copy">
                        <FaLink />
                      </small>
                      <span className="copieng"></span>
                    </i>
                    <Link target="_blank" href={item.link}>
                      <MdVisibility />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
