import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../Providers/Contexts";
const Root = () => {
  const { theme } = useContext(AuthContext);
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 font-roboto dark:bg-gradient-to-r dark:from-gray-800 dark:via-purple-900 dark:to-black">
        <div>
          <header>
            <Navbar></Navbar>
          </header>
          <section>
            <Outlet></Outlet>
          </section>
        </div>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </>
  );
};

export default Root;
