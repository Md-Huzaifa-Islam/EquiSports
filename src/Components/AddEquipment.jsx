import { useContext, useState } from "react";
import { AuthContext } from "../Providers/Contexts";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleAddItem = (e) => {
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
      rating,
      customization,
      processingTime: time,
      stockStatus: stock,
      image,
      owner_name: user.displayName,
      owner: user.email,
    };

    fetch("https://equipment-store-huzaifa.vercel.app/equipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("The equipment is added successfully");
        form.reset();
        navigate("/myequipments");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="mx-auto flex max-w-md items-center justify-center px-5 py-12 sm:max-w-none">
      <Helmet>
        <title>{`Add Equipment | EquiSports`}</title>
      </Helmet>
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 text-black shadow-xl dark:bg-black">
        <Fade cascade triggerOnce>
          <h2 className="mb-4 text-center text-2xl font-bold text-primary-0 dark:text-white sm:mb-8 sm:text-3xl">
            Add New Equipment
          </h2>
        </Fade>

        <form
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
          onSubmit={handleAddItem}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              placeholder="Item Name"
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
              placeholder="Category Name"
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
              placeholder="Description"
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
              placeholder="Price"
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
              <span className="label-text">Customization</span>
            </label>
            <input
              type="text"
              placeholder="Customization (Separate by comma for more than one) "
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
              type="number"
              placeholder="Processing Time"
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
              placeholder="Available number"
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
              placeholder="Photo URL"
              name="image"
              className="input input-bordered rounded-lg"
              required
            />
          </div>

          <div className="form-control mt-6 sm:col-span-2">
            <button className="dark:bg-darkPrimary-0 btn h-auto w-full transform rounded-lg bg-primary-0 py-3 text-lg font-semibold text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-primary-0 hover:text-xl hover:font-bold hover:shadow-lg">
              Add This Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
