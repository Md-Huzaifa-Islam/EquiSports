import { useLoaderData, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const UpdateEquipment = () => {
  const equipment = useLoaderData();
  const navigate = useNavigate();
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const {
    _id,
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
        navigate(`/detail/${_id}`);
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
          <h2 className="mb-4 text-center text-2xl font-bold sm:mb-8 sm:text-3xl">
            Update Equipment :{" "}
            <span className="text-primary-0 underline dark:text-white">
              {itemName}
            </span>
          </h2>
        </Fade>

        <form
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
          onSubmit={handleUpdatedItem}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
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
              <span className="label-text">Category Name</span>
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
              <span className="label-text">Description</span>
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
              <span className="label-text">Price</span>
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
              <span className="label-text">Rating</span>
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
              <span className="label-text">Customization</span>
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
              <span className="label-text">Processing Time (Days)</span>
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
              <span className="label-text">Stock Status</span>
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
              <span className="label-text">Photo URL</span>
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
              <span className="label-text">User Name</span>
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
              <span className="label-text">User Email</span>
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
            <button className="dark:bg-darkPrimary-0 btn h-auto w-full transform rounded-lg bg-primary-0 py-3 text-center text-lg font-semibold text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-primary-0 hover:text-xl hover:font-bold hover:shadow-lg">
              Update This Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
