// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const SportContainer = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://equipment-store-huzaifa.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <section className="mx-auto max-w-[1500px] px-5 text-black sm:mt-0 md:my-16">
      <h2 className="text-primary-0 mb-2 text-center text-2xl font-semibold sm:mb-2 sm:text-3xl md:mb-4 md:text-4xl">
        Sports Category
      </h2>
      <p className="mb-4 text-center text-sm text-opacity-80 sm:mb-4 sm:text-base md:mb-8 md:text-lg">
        Explore different sports categories and choose your favorite!
      </p>

      {categories.length && (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper h-32 sm:h-44 md:h-80"
        >
          {categories.map((category) => (
            <SwiperSlide key={category?.name}>
              <div className="relative flex h-full items-center justify-center overflow-hidden rounded-lg shadow-lg">
                <img
                  src={category?.image}
                  alt={category?.name}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 text-lg font-medium text-white sm:text-2xl sm:font-semibold">
                  {category?.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default SportContainer;
