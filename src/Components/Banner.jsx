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
    <div className="relative mt-10 w-full">
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
            className="mx-auto aspect-[8/4] w-full max-w-7xl rounded-xl object-cover object-center filter"
            alt="boroloks"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={hockeybat}
            className="mx-auto aspect-[8/4] w-full max-w-7xl rounded-xl object-cover object-center filter"
            alt="hockeybat"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sockerball}
            className="mx-auto aspect-[8/4] w-full max-w-7xl rounded-xl object-cover object-center filter"
            alt="sockerball"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={racket}
            className="mx-auto aspect-[8/4] w-full max-w-7xl rounded-xl object-cover object-center filter"
            alt="racket"
          />
        </SwiperSlide>
      </Swiper>
      {/* Overlay */}
      <div className="absolute left-1/2 top-1/2 z-10 h-full w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-black opacity-80"></div>

      {/* Centered Text */}
      <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
          Welcome to Our Sports Store!
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Explore the finest collection of premium sports equipment.
        </p>
        <a
          href="#allequipments"
          className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-8 py-3 text-lg font-semibold text-white transition-transform hover:scale-105"
        >
          See more
        </a>
      </div>
    </div>
  );
}
