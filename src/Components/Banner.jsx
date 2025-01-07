// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import boroloks from "../assets/slider/cristina-anne-costello-QZKFRL-HBUw-unsplash.jpg";

import hockeybat from "../assets/slider/kenny-nguy-n-CFPt2ROKv9I-unsplash.jpg";
import sockerball from "../assets/slider/mick-haupt-0oDGkzTIlUg-unsplash.jpg";
import racket from "../assets/slider/saif71-com-IHYoOsWkufQ-unsplash.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { EffectFade, Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    <div className="relative w-full">
      {/* Swiper Component */}
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <img
            src={boroloks}
            className="mx-auto h-[65vh] w-full object-cover object-center filter"
            alt="boroloks"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={hockeybat}
            className="mx-auto h-[65vh] w-full object-cover object-center filter"
            alt="hockeybat"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sockerball}
            className="mx-auto h-[65vh] w-full object-cover object-center filter"
            alt="sockerball"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={racket}
            className="mx-auto h-[65vh] w-full object-cover object-center filter"
            alt="racket"
          />
        </SwiperSlide>
      </Swiper>
      {/* Overlay */}
      <div className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-black opacity-80"></div>

      {/* Centered Text */}
      <div className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl font-extrabold text-white drop-shadow-md sm:text-4xl md:text-5xl">
          Welcome to Our Sports Store!
        </h1>
        <p className="mx-auto mt-2 w-9/12 text-sm text-gray-200 sm:mt-4 md:text-lg">
          Explore the finest collection of premium sports equipment.
        </p>
        <a
          href="#allequipments"
          className="dark:bg-darkPrimary-0 mt-3 inline-block rounded-2xl bg-primary-0 px-3 py-1 font-semibold text-white transition-transform hover:scale-105 sm:mt-5 sm:rounded-full sm:px-6 sm:py-2 md:px-8 lg:py-3"
        >
          See more
        </a>
      </div>
    </div>
  );
}
