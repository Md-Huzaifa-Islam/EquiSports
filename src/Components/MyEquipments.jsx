import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Contexts";
import { Link } from "react-router-dom";

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
    <div>
      {/* header section  */}
      <div></div>
      {/* main section  */}
      <div className="grid grid-cols-3 gap-6">
        {equipments &&
          equipments.map((equipment) => (
            <div
              key={equipment._id}
              className="card w-full bg-base-100 shadow-lg transition-shadow duration-200 hover:shadow-xl"
            >
              <figure>
                <img
                  src={equipment.image}
                  alt={equipment.itemName}
                  className="h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-bold">
                  {equipment.itemName}
                </h2>
                <p className="text-sm text-gray-600">
                  Price:{" "}
                  <span className="font-semibold">${equipment.price}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Stock:{" "}
                  <span className="font-semibold">
                    {equipment.stockStatus} available
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  Rating:{" "}
                  <span className="font-semibold">{equipment.rating} ★</span>
                </p>
                <div className="mt-4 flex justify-between gap-2">
                  <button className="btn btn-outline btn-sm hover:btn-primary">
                    Show Details
                  </button>
                  <Link
                    to={`/update/${equipment._id}`}
                    className="btn btn-outline btn-sm hover:btn-secondary"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(equipment._id)}
                    className="btn btn-outline btn-sm hover:btn-error"
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
