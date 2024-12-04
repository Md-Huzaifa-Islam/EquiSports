import { useContext } from "react";
import { AuthContext } from "../Providers/Contexts";

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
    const time = form.time.value + " " + "days";
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
    <div>
      {/* header section  */}

      {/* main section  */}
      <div className="card mx-auto w-full shrink-0 bg-base-100 shadow-2xl">
        <form className="card-body grid grid-cols-2" onSubmit={handleAddItem}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              placeholder="Item Name"
              name="name"
              className="input input-bordered"
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
              className="input input-bordered"
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
              className="input input-bordered"
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Rating"
              name="rating"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <input
              type="text"
              placeholder="Customization"
              name="customization"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="number"
              placeholder="Processing Time"
              name="time"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <input
              type="number"
              placeholder="Stock Status"
              name="stock"
              className="input input-bordered"
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              placeholder={user?.email}
              className="input input-bordered"
              disabled
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder={user?.displayName}
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add This Equipment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
