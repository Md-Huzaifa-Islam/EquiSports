import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const UpdateEquipment = () => {
  const equipment = useLoaderData();
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const {
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    owner,
    owner_name,
  } = equipment;

  const [ratings, setRating] = useState(rating);
  // Update button handler
  const handleUpdatedItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const category = form.category.value.trim();
    const description = form.description.value.trim();
    const price = Number(form.price.value.trim());
    const customization = form.customization.value.trim();
    const time = Number(form.time.value.trim());
    const stock = Number(form.stock.value.trim());
    const image = form.image.value.trim();
    const newEquipment = {
      itemName: name,
      categoryName: category,
      description,
      price,
      rating: ratings,
      customization,
      processingTime: time,
      stockStatus: stock,
      image,
      owner_name,
      owner,
    };
    fetch(
      `https://equipment-store-huzaifa.vercel.app/equipments/${equipment._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEquipment),
      },
    )
      .then((res) => res.json())
      .then(() => {
        toast.success("Equipment updated successfully");
      })
      .catch((error) => {
        toast.error("Error updating equipment:", error);
      });
  };

  return (
    <div className="mx-auto flex max-w-md items-center justify-center px-5 py-12 sm:max-w-none">
      <Helmet>
        <title>{`Update | EquiSports`}</title>
      </Helmet>
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-xl dark:bg-black">
        <Fade cascade triggerOnce>
          <h2 className="mb-4 text-center text-2xl font-bold text-indigo-700 sm:mb-8 sm:text-3xl">
            Update Equipment : <span className="underline">{itemName}</span>
          </h2>
        </Fade>

        <form
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
          onSubmit={handleUpdatedItem}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-white">
                Item Name
              </span>
            </label>
            <input
              type="text"
              defaultValue={itemName}
              name="name"
              className="input input-bordered rounded-lg"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-white">
                Category Name
              </span>
            </label>
            <input
              type="text"
              defaultValue={categoryName}
              name="category"
              className="input input-bordered rounded-lg"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-white">
                Description
              </span>
            </label>
            <input
              type="text"
              defaultValue={description}
              name="description"
              className="input input-bordered rounded-lg"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-white">
                Price
              </span>
            </label>
            <input
              type="number"
              defaultValue={price}
              name="price"
              className="input input-bordered rounded-lg"
              required
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
              value={ratings}
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
                Customization
              </span>
            </label>
            <input
              type="text"
              defaultValue={customization}
              name="customization"
              className="input input-bordered rounded-lg"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-white">
                Processing Time (Days)
              </span>
            </label>
            <input
              type="text"
              defaultValue={processingTime}
              name="time"
              className="input input-bordered rounded-lg"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-white">
                Stock Status
              </span>
            </label>
            <input
              type="number"
              defaultValue={stockStatus}
              name="stock"
              className="input input-bordered rounded-lg"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-white">
                Photo URL
              </span>
            </label>
            <input
              type="url"
              defaultValue={image}
              name="image"
              className="input input-bordered rounded-lg"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-white">
                User Name
              </span>
            </label>
            <input
              type="url"
              defaultValue={owner_name}
              disabled
              className="input input-bordered rounded-lg"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700 dark:text-white">
                User Email
              </span>
            </label>
            <input
              type="url"
              defaultValue={owner}
              disabled
              className="input input-bordered rounded-lg"
              required
            />
          </div>

          <div className="form-control mt-6 sm:col-span-2">
            <button className="btn h-auto w-full transform rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 py-3 text-lg font-semibold text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:text-xl hover:font-bold hover:shadow-lg dark:bg-gradient-to-r dark:from-gray-800 dark:via-purple-900 dark:to-black">
              Update This Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
