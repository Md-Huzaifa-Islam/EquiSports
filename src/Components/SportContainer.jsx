// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

const SportContainer = () => {
  const categories = [
    {
      name: "Football",
      image: "https://i.ibb.co/K0X5JRk/football.jpg",
    },
    {
      name: "Tennis",
      image: "https://i.ibb.co/xm2Wgjf/tennis.jpg",
    },
    {
      name: "Basketball",
      image: "https://i.ibb.co/SBbxsQy/basketball.webp",
    },
    {
      name: "Cricket",
      image: "https://i.ibb.co/vv0kxBg/cricket.jpg",
    },
    {
      name: "Baseball",
      image: "https://i.ibb.co/RBxRmkQ/baseball.webp",
    },
    {
      name: "Badminton",
      image: "https://i.ibb.co/0Y7tnm7/badminton.webp",
    },
  ];

  return (
    <section className="my-16 px-4">
      <h2 className="mb-4 text-center text-4xl font-semibold text-white">
        Sports Category
      </h2>
      <p className="mb-8 text-center text-lg text-white text-opacity-80">
        Explore different sports categories and choose your favorite!
      </p>

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
        className="mySwiper h-80"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <div className="relative flex h-full items-center justify-center overflow-hidden rounded-lg shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <h3 className="absolute bottom-4 text-2xl font-semibold text-textLight">
                {category.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SportContainer;
