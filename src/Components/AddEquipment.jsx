import { useContext } from "react";
import { AuthContext } from "../Providers/Contexts";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const handleAddItem = (e) => {
    e.preventDefault();
    console.log("add this");
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const time = form.time.value;
    const stock = form.stock.value;
    const newEquipment = {
      name,
      category,
      description,
      price,
      rating,
      customization,
      time,
      stock,
    };
    console.log(newEquipment);
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
