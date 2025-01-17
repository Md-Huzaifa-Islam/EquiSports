import { useContext, useState } from "react";
import { AuthContext } from "../Providers/Contexts";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInWithEmail, signInWithGmail } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const location = useLocation().state;
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    signInWithEmail(email, password)
      .then(() => {
        navigate(location || "/");
        toast.success("Welcome back !");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleSignInWithG = () => {
    signInWithGmail()
      .then((p) => {
        toast.success("Welcome back !");
        const newUser = {
          username: p.user.displayName,
          email: p.user.email,
        };
        fetch(`https://equipment-store-huzaifa.vercel.app/users`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then(() => {
            // toast.success("Equipment updated successfully");
          })
          .catch((error) => {
            toast.error("Error updating equipment:", error);
          });
        navigate(location || "/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="mx-auto my-16 flex items-center justify-center md:container sm:my-12 md:my-16">
      <Helmet>
        <title>{`Login | EquiSports`}</title>
      </Helmet>
      <div className="flex w-11/12 flex-col items-center justify-between gap-12 sm:gap-6 md:gap-12 lg:flex-row">
        {/* Left Section */}
        <Slide direction="left" duration={800} triggerOnce>
          <div className="text-center md:mx-auto md:w-8/12 lg:mx-0 lg:w-1/2 lg:text-left">
            <h1 className="mb-6 text-5xl font-extrabold text-primary-0 dark:text-white sm:mb-3 sm:text-4xl md:mb-6 md:text-5xl">
              Welcome Back!
            </h1>
            <p className="md:text-lg">
              Sign in to your account and continue your journey with us. Access
              your personalized dashboard <br /> explore sports equipment, and
              more!
            </p>
          </div>
        </Slide>

        {/* Right Section */}
        <Fade
          cascade
          className="flex-grow sm:w-full sm:max-w-md md:max-w-lg lg:max-w-md"
          triggerOnce
          duration={800}
        >
          <div className="card w-full rounded-lg bg-white shadow-lg dark:bg-black">
            <form className="card-body pb-0" onSubmit={handleSignIn}>
              <h2 className="text-center text-3xl font-bold text-primary-0 dark:text-white">
                Login
              </h2>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-gray-700 dark:text-white">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>
              <div className="form-control relative mt-4">
                <label className="label">
                  <span className="label-text text-gray-700 dark:text-white">
                    Password
                  </span>
                </label>
                <input
                  type={!show ? "password" : "text"}
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered rounded-lg"
                  required
                />
                <div
                  onClick={() => setShow((p) => !p)}
                  className="absolute bottom-3 right-1 cursor-pointer px-2"
                >
                  {show ? <FaRegEyeSlash size={25} /> : <FaRegEye size={25} />}
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn rounded-full bg-primary-0 text-white transition-colors duration-300 hover:bg-primary-0">
                  Login
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center py-4">
              <p className="mx-2 text-xl font-bold">Or</p>
            </div>

            <div className="flex flex-col items-center pb-12">
              <button
                className="flex items-center gap-2 rounded-full border border-primary-0 bg-white px-6 py-2 shadow-sm transition-all duration-300 dark:bg-black"
                onClick={handleSignInWithG}
              >
                <FcGoogle size={24} />
                <span className="text-lg font-medium">Login with Google</span>
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Login;
