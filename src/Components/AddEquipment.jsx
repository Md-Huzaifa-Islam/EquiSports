import { useContext } from "react";
import { AuthContext } from "../Providers/Contexts";
import { Fade } from "react-awesome-reveal";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = Number(form.price.value);
    const rating = Number(form.rating.value);
    const customization = form.customization.value;
    const time = Number(form.time.value);
    const stock = Number(form.stock.value);
    const image = form.image.value;
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
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-5 py-12">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-xl">
        <Fade cascade triggerOnce>
          <h2 className="mb-8 text-center text-3xl font-bold text-indigo-700">
            Add New Equipment
          </h2>
        </Fade>

        <form
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
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

          <div className="form-control col-span-2 mt-6">
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
