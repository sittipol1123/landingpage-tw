"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const frmdata = [
  {
    title: "Laravel",
    images: "/images/985px-Laravel.svg.png",
    desc: "",
  },
  {
    title: "NextJS",
    images: "/images/logo02.png",
    desc: "",
  },
  {
    title: "Express js",
    images: "/images/express-js.png",
    desc: "",
  },
  {
    title: "Prisma",
    images: "/images/prismaHD.png",
    desc: "",
  },
  {
    title: "Sequelize",
    images: "/images/sequelize-logo-png-transparent.png",
    desc: "",
  },
  {
    title: "Arduino",
    images: "/images/arduino-logo-1.png",
    desc: "",
  },
  {
    title: "MQTT",
    images: "/images/Mqtt-hor.svg.png",
    desc: "",
  },
];

const IndexCarousel = () => {
  return (
    <div className="flex items-center justify-center flex-col sm:h-[450px] lg:h-[550px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {frmdata.map((val, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{ margin: "auto" }}
                className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[370px] lg:w-[350px] overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${val.images})`,
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <h1 className="text-xl lg:text-2xl">{val.title}</h1>
                  <p className="lg:text-[18px]">{val.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default IndexCarousel;
