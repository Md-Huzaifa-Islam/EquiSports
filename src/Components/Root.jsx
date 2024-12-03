import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
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
