import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Contexts";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
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
    <div className="px-5 py-6 sm:py-12">
      {/* header line part  */}
      <Helmet>
        <title>{`My Equipments | EquiSports`}</title>
      </Helmet>
      <div className="mb-6 text-center text-black dark:text-white sm:mb-10">
        <h2 className="text-2xl font-bold text-primary-0 dark:text-white sm:text-3xl md:text-4xl">
          My All Equipment
        </h2>
        <p className="mt-2 opacity-80 sm:mt-4">
          Browse through my collection of top-rated sports equipment and find
          the perfect gear for your game!
        </p>
      </div>

      <div className="grid gap-4 md:container sm:grid-cols-2 sm:gap-6 md:mx-auto lg:grid-cols-3 xl:grid-cols-4">
        {equipments &&
          equipments.map((product) => (
            <div
              key={product._id}
              className="border-secondary dark:border-darkSecondary-0 card mx-auto w-full max-w-sm border-2 transition-shadow duration-200 hover:shadow-2xl hover:shadow-white sm:mx-0 sm:max-w-md"
            >
              <figure className="h-56 bg-white dark:bg-transparent md:h-64">
                <img
                  src={product.image}
                  alt={product.itemName}
                  className="h-full object-contain object-center"
                />
              </figure>
              <div className="dark:bg-darkPrimary-0 card-body rounded-b-2xl bg-primary-0 bg-opacity-25 p-4 px-2 pb-5">
                <h2 className="card-title text-xl font-bold text-primary-0 dark:text-white">
                  {product.itemName}
                </h2>
                <p className="text-lg font-medium opacity-80">
                  {product.price} $
                </p>

                <div className="flex items-center gap-2 text-base font-medium">
                  <p className="flex-grow-0">{product.rating}</p>
                  <span className="">
                    <ReactStars
                      value={product.rating}
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
                <div className="mt-4 flex flex-wrap justify-between gap-2">
                  <Link
                    to={`/detail/${product._id}`}
                    className="dark:bg-darkSecondary-0 btn h-auto w-max transform rounded-lg bg-secondary-0 px-2 py-3 text-lg font-semibold text-white hover:shadow-lg"
                    text-primary
                    dark:text-darkPrimary-0
                  >
                    See Details
                  </Link>
                  <Link
                    to={`/update/${product._id}`}
                    className="dark:bg-darkSecondary-0 btn h-auto w-max transform rounded-lg bg-secondary-0 px-2 py-3 text-lg font-semibold text-white hover:shadow-lg"
                    text-primary
                    dark:text-darkPrimary-0
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn h-auto w-max transform rounded-lg bg-red-400 px-2 py-3 text-lg font-semibold text-white hover:shadow-lg"
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
