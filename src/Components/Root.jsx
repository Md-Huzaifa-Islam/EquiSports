import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="font-roboto flex min-h-screen flex-col justify-between bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
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
  );
};

export default Root;
