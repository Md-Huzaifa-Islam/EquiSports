import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/Contexts";

const Navbar = () => {
  const { signout, user } = useContext(AuthContext);
  console.log(user?.photoURL);
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative bg-transparent transition-colors hover:text-hovertext ${
              isActive
                ? "text-hovertext after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-100 after:bg-white after:transition-transform after:duration-300 after:content-['']"
                : "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allequipments"}
          className={({ isActive }) =>
            `relative bg-transparent transition-colors hover:text-hovertext ${
              isActive
                ? "text-hovertext after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-100 after:bg-white after:transition-transform after:duration-300 after:content-['']"
                : "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
            }`
          }
        >
          All Sports Equipment
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={"/addequipments"}
            className={({ isActive }) =>
              `relative bg-transparent transition-colors hover:text-hovertext ${
                isActive
                  ? "text-hovertext after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-100 after:bg-white after:transition-transform after:duration-300 after:content-['']"
                  : "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
              }`
            }
          >
            Add Equipment
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to={"/myequipments"}
            className={({ isActive }) =>
              `relative bg-transparent transition-colors hover:text-hovertext ${
                isActive
                  ? "text-hovertext after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-100 after:bg-white after:transition-transform after:duration-300 after:content-['']"
                  : "after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
              }`
            }
          >
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
    <div className="navbar z-10 pt-5 text-white">
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
        <Link to={"/"} className="btn btn-ghost text-2xl hover:text-hovertext">
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
