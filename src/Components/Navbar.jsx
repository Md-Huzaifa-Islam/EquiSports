import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/Contexts";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { signout, user } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"} className="hover:text-hovertext">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/allequipments"} className="hover:text-hovertext">
          All Sports Equipment
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/addequipments"} className="hover:text-hovertext">
            Add Equipment
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to={"/myequipments"} className="hover:text-hovertext">
            My Equipment List
          </NavLink>
        </li>
      )}
    </>
  );

  const handleSignOut = () => {
    signout()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="bg-navbarbg navbar text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="hover:text-hovertext btn btn-ghost text-xl">
          EquiSports
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {user?.email ? (
        <div className="navbar-end gap-4">
          <div
            className="avatar tooltip tooltip-bottom"
            data-tip={user?.displayName}
          >
            <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img src={user?.photoURL} />
            </div>
          </div>
          <button
            className="hover:bg-primary-dark btn bg-primary text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="navbar-end gap-4">
          <Link
            to={"/login"}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
