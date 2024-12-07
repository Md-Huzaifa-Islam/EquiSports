import { useContext } from "react";
import { AuthContext } from "../Providers/Contexts";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const category = form.category.value.trim();
    const description = form.description.value.trim();
    const price = Number(form.price.value.trim());
    const rating = Number(form.rating.value.trim());
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

    console.log(newEquipment);
    fetch("http://localhost:5000/equipments", {
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
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="mx-auto flex max-w-md items-center justify-center px-5 py-12 sm:max-w-none">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-xl">
        <Fade cascade triggerOnce>
          <h2 className="mb-4 text-center text-2xl font-bold text-indigo-700 sm:mb-8 sm:text-3xl">
            Add New Equipment
          </h2>
        </Fade>

        <form
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
          onSubmit={handleAddItem}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Item Name</span>
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
              <span className="label-text text-gray-700">Category Name</span>
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
              <span className="label-text text-gray-700">Description</span>
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
              <span className="label-text text-gray-700">Price</span>
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
              <span className="label-text text-gray-700">Customization</span>
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
              <span className="label-text text-gray-700">
                Processing Time (Days)
              </span>
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
              <span className="label-text text-gray-700">Stock Status</span>
            </label>
            <input
              type="number"
              placeholder="Stock Status"
              name="stock"
              className="input input-bordered rounded-lg"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Photo URL</span>
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
            <button className="btn h-auto w-full transform rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 py-3 text-lg font-semibold text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:text-xl hover:font-bold hover:shadow-lg">
              Add This Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
