import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/Contexts";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
const Navbar = () => {
  const { signout, user, theme, setTheme } = useContext(AuthContext);

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

  // handle theme
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  const handleSignOut = () => {
    signout()
      .then(() => {
        toast.success(`Good bye! ${user.displayName}`);
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar z-10 mx-auto pt-5 text-white md:container">
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
            className="menu dropdown-content menu-sm z-20 mt-3 w-52 rounded-box bg-base-100 p-2 text-black shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost hidden text-2xl hover:text-hovertext sm:inline-flex"
        >
          EquiSports
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {user?.email ? (
        <div className="navbar-end gap-4">
          <div
            className="avatar"
            data-tooltip-content={user?.displayName}
            data-tooltip-place="bottom"
            data-tooltip-id="my-name"
          >
            <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img src={user?.photoURL} />
            </div>
          </div>

          <Tooltip id="my-name" className="z-50" />
          <button
            className="hover:bg-primary-dark btn bg-primary text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="theme-controller toggle"
              checked={theme === "dark"}
              data-tooltip-content="Click here to change theme"
              data-tooltip-place="bottom"
              data-tooltip-id="theme"
              onChange={handleChangeTheme}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <Tooltip id="theme" className="z-50" />
          </label>
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

          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="theme-controller toggle"
              checked={theme === "dark"}
              data-tooltip-content="Click here to change theme"
              data-tooltip-place="bottom"
              data-tooltip-id="theme"
              onChange={handleChangeTheme}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            {/* Tooltip component */}
            <Tooltip id="theme" className="z-50" />
          </label>
        </div>
      )}
    </div>
  );
};

export default Navbar;
