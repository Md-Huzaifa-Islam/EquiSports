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
      <div className="dark:bg-darkBackground-0 relative flex min-h-screen flex-col justify-between bg-background-0 bg-opacity-50 font-roboto">
        <div>
          <header className="dark:bg-darkPrimary-0 sticky top-0 z-[200] bg-primary-0">
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
