import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Contexts";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const MyEquipments = () => {
  const { user, theme } = useContext(AuthContext);
  const [equipments, setEquipments] = useState(null);
  useEffect(() => {
    fetch(
      `https://equipment-store-huzaifa.vercel.app/equipments/filtered/${user.email}`,
    )
      .then((res) => res.json())
      .then((data) => setEquipments(data));
  }, [user]);

  // delete a item handler
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: theme === "light" ? "#fff" : "#000",
      color: theme === "light" ? "#000" : "#fff",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://equipment-store-huzaifa.vercel.app/equipments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your equipment has been deleted.",
              icon: "success",
              background: theme === "light" ? "#fff" : "#000",
              color: theme === "light" ? "#000" : "#fff",
            });
            const newList = equipments.filter(
              (equipment) => equipment._id != id,
            );
            setEquipments(newList);
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-5 py-6 dark:bg-gradient-to-r dark:from-gray-800 dark:via-purple-900 dark:to-black sm:py-12">
      {/* header line part  */}
      <div className="mb-6 text-center text-white sm:mb-10">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          My All Equipment
        </h2>
        <p className="mt-2 opacity-80 sm:mt-4">
          Browse through my collection of top-rated sports equipment and find
          the perfect gear for your game!
        </p>
      </div>

      <div className="grid gap-4 md:container sm:grid-cols-2 sm:gap-6 md:mx-auto md:grid-cols-2 lg:grid-cols-3">
        {equipments &&
          equipments.map((equipment) => (
            <div
              key={equipment._id}
              className="card mx-auto w-full max-w-sm border-2 border-blue-800 bg-white p-5 transition-shadow duration-200 hover:shadow-2xl hover:shadow-white dark:bg-black sm:mx-0 sm:max-w-md"
            >
              <figure className="h-60 rounded-xl bg-blue-800 dark:bg-[#22283C] sm:h-60 md:h-72">
                <img
                  src={equipment.image}
                  alt={equipment.itemName}
                  className="h-full object-contain object-center"
                />
              </figure>
              <div className="card-body p-4 px-2 pb-0">
                <h2 className="card-title bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-xl font-bold text-transparent dark:text-white">
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
                <div className="flex w-max items-center gap-2 text-base font-medium text-[#4F46E5]">
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
                    className="btn h-auto transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-3 font-semibold text-white hover:shadow-lg dark:from-gray-800 dark:to-black sm:w-max sm:px-[6px] sm:py-1 sm:text-base md:px-2 md:py-[6px] md:text-lg lg:px-2 lg:py-[6px]"
                  >
                    See Details
                  </Link>
                  <Link
                    to={`/update/${equipment._id}`}
                    className="btn h-auto transform rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-3 font-semibold text-white hover:shadow-lg dark:from-gray-800 dark:via-purple-900 sm:w-max sm:px-[6px] sm:py-1 sm:text-base md:px-2 md:py-[6px] md:text-lg lg:px-2 lg:py-[6px]"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(equipment._id)}
                    className="btn h-auto transform rounded-lg bg-red-700 px-4 py-3 font-semibold text-white hover:bg-red-900 hover:shadow-lg sm:w-max sm:px-[6px] sm:py-1 sm:text-base md:px-2 md:py-[6px] md:text-lg lg:px-2 lg:py-[6px]"
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
