import { useLoaderData } from "react-router-dom";

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

  // update button handler
  const handleUpdatedItem = (e) => {
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
      });
  };

  return (
    <div>
      {/* header section  */}
      <div></div>
      {/* main section  */}
      <div className="card mx-auto w-full shrink-0 bg-base-100 shadow-2xl">
        <form
          className="card-body grid grid-cols-2"
          onSubmit={handleUpdatedItem}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={itemName}
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
              defaultValue={categoryName}
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
              defaultValue={description}
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
              defaultValue={price}
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
              defaultValue={rating}
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
              name="customization"
              defaultValue={customization}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              name="time"
              defaultValue={processingTime}
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
              name="stock"
              defaultValue={stockStatus}
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
              defaultValue={image}
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
              defaultValue={owner}
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
              defaultValue={owner_name}
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

export default UpdateEquipment;
