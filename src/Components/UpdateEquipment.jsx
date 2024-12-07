import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const UpdateEquipment = () => {
  const equipment = useLoaderData();
  console.log(equipment);
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

  // Update button handler
  const handleUpdatedItem = (e) => {
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
      owner_name,
      owner,
    };
    fetch(`http://localhost:5000/equipments/${equipment._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Equipment updated successfully");
      })
      .catch((error) => {
        console.error("Error updating equipment:", error);
        alert("Error updating equipment, please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-xl">
        <Fade cascade triggerOnce>
          <h2 className="mb-8 text-center text-3xl font-bold text-[#4338CA]">
            Update Equipment : <span className="underline">{itemName}</span>
          </h2>
        </Fade>

        <form
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          onSubmit={handleUpdatedItem}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">Item Name</span>
            </label>
            <input
              type="text"
              placeholder="Item Name"
              defaultValue={itemName}
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
              defaultValue={categoryName}
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
              defaultValue={description}
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
              defaultValue={price}
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
              defaultValue={rating}
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
              defaultValue={customization}
              placeholder="Customization"
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
              type="text"
              placeholder="Processing Time"
              defaultValue={processingTime}
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
              defaultValue={stockStatus}
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
              defaultValue={image}
              name="image"
              className="input input-bordered rounded-lg"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-700">User Name</span>
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
              <span className="label-text text-gray-700">User Email</span>
            </label>
            <input
              type="url"
              defaultValue={owner}
              disabled
              className="input input-bordered rounded-lg"
              required
            />
          </div>

          <div className="form-control col-span-2 mt-6">
            <button className="btn h-auto w-full transform rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 py-3 text-lg font-semibold text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:text-xl hover:font-bold hover:shadow-lg">
              Update This Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipment;
