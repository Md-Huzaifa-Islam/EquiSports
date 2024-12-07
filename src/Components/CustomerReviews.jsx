import { useLoaderData, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Autoplay } from "swiper/modules";
import { useContext, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AuthContext } from "../Providers/Contexts";

const CustomerReviews = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const data = useLoaderData();
  const [reviews, setReviews] = useState(data);
  const [reviewForm, setReviewForm] = useState(false);
  const handleAddreview = () => {
    user || navigate("/login");

    setReviewForm((p) => !p);
  };
  const handleSendreview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const profession = form.profession.value || "Not available";
    const rating = form.rating.value.trim();
    const review = form.review.value.trim();
    const newReview = {
      name: user.displayName,
      image: user.photoURL,
      reviewed_product: name,
      review: review,
      profession,
      rating,
      date: "2024-12-05",
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews((p) => [...p, newReview]);

        form.reset();
      });
  };
  return (
    <section className="mx-auto mt-16 max-w-[1500px] px-5 md:my-16 md:mt-32">
      <h2 className="mb-2 text-center text-2xl font-semibold text-white sm:mb-2 sm:text-3xl md:mb-4 md:text-4xl">
        Customer Reviews
      </h2>
      <p className="mb-4 text-center text-sm text-white text-opacity-80 sm:mb-4 sm:text-base md:mb-8 md:text-lg">
        See what our customers are saying about their experience with our
        equipment!
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="w-full max-w-sm sm:w-auto">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFlip, Autoplay]}
            className="mySwiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="m-4 mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-white p-5 shadow-lg sm:w-auto">
                  <div className="mb-4 flex items-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="mr-4 h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-500">
                        {review.profession}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">
                      {review.reviewed_product}
                    </h4>
                    <p className="mt-2 text-gray-700">{review.review}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-yellow-500">
                        {"⭐".repeat(review.rating)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{review.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          onClick={handleAddreview}
          className={`btn ${reviewForm && "hidden"} h-auto w-max transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 py-3 text-lg font-semibold text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:text-xl hover:font-bold hover:shadow-lg`}
        >
          Add Your Review
        </button>
        <div
          className={`relative w-full max-w-sm rounded-lg bg-white p-8 shadow-xl ${reviewForm || "hidden"}`}
        >
          <Fade cascade triggerOnce>
            <h2 className="mb-4 text-center text-2xl font-bold text-indigo-700 sm:mb-8 sm:text-3xl">
              Review sender
            </h2>
          </Fade>

          <form className="grid gap-4" onSubmit={handleSendreview}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Item Name</span>
              </label>
              <input
                type="text"
                placeholder="Input the product name to review"
                name="name"
                className="input input-bordered rounded-lg"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Profession</span>
              </label>
              <input
                type="text"
                placeholder="Your profession"
                name="profession"
                className="input input-bordered rounded-lg"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Rating</span>
              </label>
              <input
                type="number"
                placeholder="Rating"
                name="rating"
                className="input input-bordered rounded-lg"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Review</span>
              </label>
              <input
                type="text"
                name="review"
                placeholder="Describe your review"
                required
                className="input input-bordered rounded-lg"
              ></input>
            </div>

            <div className="form-control mt-6">
              <button className="btn h-auto w-full transform rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 py-3 text-lg font-semibold text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:text-xl hover:font-bold hover:shadow-lg">
                Send This review
              </button>
            </div>
          </form>
          <button
            onClick={() => setReviewForm((p) => !p)}
            className="absolute -right-4 -top-4 rounded-full bg-white"
          >
            <IoCloseCircleOutline size={32} color="red" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
