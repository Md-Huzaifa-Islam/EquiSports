import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Contexts";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
const MyEquipments = () => {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/equipments/filtered/${user.email}`)
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, [user]);

  // delete a item handler
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/equipments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newList = equipments.filter((equipment) => equipment._id != id);
        setEquipments(newList);
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-5 py-12">
      {/* header line part  */}
      <div className="mb-10 text-center text-white">
        <h2 className="text-4xl font-bold">My All Equipment</h2>
        <p className="mt-4 opacity-80">
          Browse through my collection of top-rated sports equipment and find
          the perfect gear for your game!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 md:container md:mx-auto md:grid-cols-2 lg:grid-cols-3">
        {equipments &&
          equipments.map((equipment) => (
            <div
              key={equipment._id}
              className="card w-full max-w-md border-2 border-blue-800 bg-white p-5 transition-shadow duration-200 hover:shadow-2xl hover:shadow-white"
            >
              <figure className="h-72 rounded-xl bg-blue-800">
                <img
                  src={equipment.image}
                  alt={equipment.itemName}
                  className="h-full object-contain object-center"
                />
              </figure>
              <div className="card-body p-4 px-2 pb-0">
                <h2 className="card-title bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-xl font-bold text-transparent">
                  {equipment.itemName}
                </h2>
                <p className="text-base font-medium text-[#4F46E5]">
                  Price:{" "}
                  <span className="text-[#434C5B]">{equipment.price} $</span>
                </p>
                <p className="text-base font-medium text-[#4F46E5]">
                  Stock:{" "}
                  <span className="text-[#434C5B]">
                    {equipment.stockStatus} available
                  </span>
                </p>
                <div className="flex items-center gap-2 text-base font-medium text-[#4F46E5]">
                  <p>Rating: </p>
                  <span className="text-[#434C5B]">
                    <ReactStars
                      value={equipment.rating}
                      count={5}
                      size={20}
                      edit={false}
                      isHalf={true}
                      emptyIcon={<IoStarOutline />}
                      halfIcon={<IoStarHalf />}
                      filledIcon={<IoStar />}
                      activeColor="#ffd700"
                    />
                  </span>
                </div>
                <div className="mt-4 flex justify-between gap-2">
                  <Link
                    to={`/detail/${equipment._id}`}
                    className="btn h-auto w-max transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 py-3 text-lg font-semibold text-white hover:shadow-lg"
                  >
                    See Details
                  </Link>
                  <Link
                    to={`/update/${equipment._id}`}
                    className="btn h-auto w-max transform rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 py-3 text-lg font-semibold text-white hover:shadow-lg"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(equipment._id)}
                    className="btn h-auto w-max transform rounded-lg bg-red-700 py-3 text-lg font-semibold text-white hover:bg-red-900 hover:shadow-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyEquipments;
