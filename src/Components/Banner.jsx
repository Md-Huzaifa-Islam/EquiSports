// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../assets/slider/carlos-felipe-ramirez-mesa-OCH9nlz0BY4-unsplash.jpg";
import slider2 from "../assets/slider/cristina-anne-costello-QZKFRL-HBUw-unsplash.jpg";
import slider3 from "../assets/slider/cristina-anne-costello-rank-Px49iI-unsplash.jpg";
import slider4 from "../assets/slider/cristina-anne-costello-rKoOne_aUak-unsplash.jpg";
import slider5 from "../assets/slider/kenny-nguy-n-CFPt2ROKv9I-unsplash.jpg";
import slider6 from "../assets/slider/mick-haupt-0oDGkzTIlUg-unsplash.jpg";
import slider7 from "../assets/slider/saif71-com-IHYoOsWkufQ-unsplash.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    <div className="">
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
            src={slider1}
            className="mx-auto max-h-[600px] w-full max-w-7xl rounded-xl object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            className="mx-auto max-h-[600px] w-full max-w-7xl rounded-xl object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider3}
            className="mx-auto max-h-[600px] w-full max-w-7xl rounded-xl object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider4}
            className="mx-auto max-h-[600px] w-full max-w-7xl rounded-xl object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider5}
            className="mx-auto max-h-[600px] w-full max-w-7xl rounded-xl object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider6}
            className="mx-auto max-h-[600px] w-full max-w-7xl rounded-xl object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider7}
            className="mx-auto max-h-[600px] w-full max-w-7xl rounded-xl object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
