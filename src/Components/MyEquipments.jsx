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
      <div className="">
        {equipments &&
          equipments.map((equipment) => (
            <div
              key={equipment._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={equipment.photo} alt={equipment.itemName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{equipment.itemName}</h2>
                <p>{equipment.description}</p>
                <div className="card-actions justify-center gap-4">
                  <Link
                    to={`/update/${equipment._id}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(`${equipment._id}`)}
                    className="btn btn-primary"
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
