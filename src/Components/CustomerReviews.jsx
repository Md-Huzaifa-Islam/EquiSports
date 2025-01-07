import { useLoaderData, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";

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
import { toast } from "react-toastify";

const CustomerReviews = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const navigate = useNavigate();
  const data = useLoaderData();
  const [reviews, setReviews] = useState(data);
  const [reviewForm, setReviewForm] = useState(false);
  const handleAddreview = () => {
    user || navigate("/login");
    user || toast.info("You need to login to make a review");
    setReviewForm((p) => !p);
  };
  const handleSendreview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const profession = form.profession.value || "Not available";

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

    fetch("https://equipment-store-huzaifa.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("The review is added");
        setReviews((p) => [...p, newReview]);

        form.reset();
        setReviewForm((p) => !p);
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <section className="mx-auto mt-16 max-w-[1500px] px-5 text-black dark:text-white md:my-16 md:mt-32">
      <h2 className="mb-2 text-center text-2xl font-semibold text-primary-0 dark:text-white sm:mb-2 sm:text-3xl md:mb-4 md:text-4xl">
        Customer Reviews
      </h2>
      <p className="mb-4 text-center text-sm text-opacity-80 sm:mb-4 sm:text-base md:mb-8 md:text-lg">
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
                <div className="dark:bg-darkPrimary-0 m-4 mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-primary-0 bg-opacity-30 p-5 shadow-lg sm:w-auto">
                  <div className="mb-4 flex items-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="mr-4 h-12 w-12 rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{review.name}</h3>
                      <p className="text-sm">{review.profession}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">
                      {review.reviewed_product}
                    </h4>
                    <p className="mt-2">{review.review}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ReactStars
                        value={review.rating || 0}
                        count={5}
                        size={20}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<IoStarOutline />}
                        halfIcon={<IoStarHalf />}
                        filledIcon={<IoStar />}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="text-sm">{review.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          onClick={handleAddreview}
          className={`btn ${reviewForm && "hidden"} dark:bg-darkPrimary-0 h-auto w-max transform rounded-lg bg-primary-0 py-3 text-lg font-semibold text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-primary-0 hover:text-xl hover:font-bold hover:shadow-lg`}
        >
          Add Your Review
        </button>
        <div
          className={`relative w-full max-w-sm rounded-lg bg-white p-8 shadow-xl dark:bg-black ${reviewForm || "hidden"}`}
        >
          <Fade cascade triggerOnce>
            <h2 className="mb-4 text-center text-2xl font-bold text-primary-0 sm:mb-8 sm:text-3xl">
              Review sender
            </h2>
          </Fade>

          <form className="grid gap-4" onSubmit={handleSendreview}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-white">
                  Item Name
                </span>
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
                <span className="label-text text-gray-700 dark:text-white">
                  Profession
                </span>
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
                <span className="label-text text-gray-700 dark:text-white">
                  Rating
                </span>
              </label>
              <ReactStars
                count={5}
                value={rating}
                onChange={handleRatingChange}
                size={30}
                isHalf={true}
                activeColor="#ffd700"
                color="#e4e5e9"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700 dark:text-white">
                  Review
                </span>
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
              <button className="btn h-auto w-full transform rounded-lg bg-primary-0 bg-gradient-to-r py-3 text-lg font-semibold text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-primary-0 hover:text-xl hover:font-bold hover:shadow-lg">
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
