"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { dataSkils } from "@/types";
import Image from "next/image";
import "./Skils.scss";
import "swiper/css";
import "swiper/css/autoplay";
const Skils = () => {
  return (
    <div className="Skils Page">
      <div className="container">
        <div className="liensY"></div>
        <h1 className="titlePage">
          <span>skills & technologies</span>
        </h1>
        <p className="subtitlePage">
          using the latest tech this world has to offer{" "}
          <span>
            Next.js React.js Redux javaScript typeScript tailwind bootStrab scss
            css3 html5 API
          </span>{" "}
          ...
        </p>
        <Swiper
          slidesPerView={5}
          spaceBetween={60}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {dataSkils.map((item) => (
            <SwiperSlide key={item.id}>
              <Image src={item.logo} alt={item.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          spaceBetween={60}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {dataSkils.map((item) => (
            <SwiperSlide key={item.id}>
              <Image src={item.logo} alt={item.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skils;
