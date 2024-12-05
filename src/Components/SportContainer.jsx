// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const SportContainer = () => {
  const categories = [
    {
      name: "Football",
      image: "https://i.ibb.co.com/K0X5JRk/football.jpg",
    },
    { name: "Tennis", image: "https://i.ibb.co.com/xm2Wgjf/tennis.jpg" },
    {
      name: "Basketball",
      image: "https://i.ibb.co.com/SBbxsQy/basketball.webp",
    },
    { name: "Cricket", image: "https://i.ibb.co.com/vv0kxBg/cricket.jpg" },
    {
      name: "Baseball",
      image: "https://i.ibb.co.com/RBxRmkQ/baseball.webp",
    },
    {
      name: "Badminton",
      image: "https://i.ibb.co.com/0Y7tnm7/badminton.webp",
    },
  ];

  return (
    <section className="my-16 px-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-indigo-600">
        Sports Category
      </h2>
      <p className="mb-8 text-center text-gray-600">
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
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper h-80"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.name}>
            <div className="relative flex h-full items-center justify-center overflow-hidden rounded-lg shadow-md">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <h3 className="absolute text-2xl font-semibold text-white">
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
