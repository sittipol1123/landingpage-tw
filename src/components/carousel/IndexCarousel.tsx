"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const IndexCarousel = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[550px]">
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
        <SwiperSlide>
          <div
            style={{ margin: "auto" }}
            className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[370px] lg:w-[350px] overflow-hidden cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/images/react.png)` }}
            />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <h1 className="text-xl lg:text-2xl">React</h1>
              <p className="lg:text-[18px]">
                Basic react js. i can help you edit and read basic error and fix
                it.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ margin: "auto" }}
            className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[370px] lg:w-[350px] overflow-hidden cursor-pointe"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/images/logo02.png)` }}
            />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <h1 className="text-xl lg:text-2xl">NextJS</h1>
              <p className="lg:text-[18px]">
                Middle Nextjs. i can edit and analyze struct of project.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ margin: "auto" }}
            className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[370px] lg:w-[350px] overflow-hidden cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/images/express-js.png)` }}
            />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <h1 className="text-xl lg:text-2xl">Express js</h1>
              <p className="lg:text-[18px]">
                Middle Express js. i can crate struct of MVC and develop to
                success project.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ margin: "auto" }}
            className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[370px] lg:w-[350px]  overflow-hidden cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/images/prismaHD.png)` }}
            />
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3">
              <h1 className="text-xl lg:text-2xl">Prisma</h1>
              <p className="lg:text-[18px]">
                Basic Prisma. i can make and analyze struct of database and use
                prisma to create database and use it manage data in express js
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default IndexCarousel;
