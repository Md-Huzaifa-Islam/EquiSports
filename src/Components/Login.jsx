import { useContext } from "react";
import { AuthContext } from "../Providers/Contexts";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Login = () => {
  const { signInWithEmail, signInWithGmail } = useContext(AuthContext);
  const location = useLocation().state;
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    signInWithEmail(email, password)
      .then(() => {
        navigate(location || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignInWithG = () => {
    signInWithGmail()
      .then(() => {
        navigate(location || "/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-auto my-16 flex items-center justify-center md:container sm:my-12 md:my-16">
      <div className="flex w-11/12 flex-col items-center justify-between gap-12 sm:gap-6 md:gap-12 lg:flex-row">
        {/* Left Section */}
        <Slide direction="left" duration={800} triggerOnce>
          <div className="text-center md:mx-auto md:w-8/12 lg:mx-0 lg:w-1/2 lg:text-left">
            <h1 className="mb-6 text-5xl font-extrabold text-white sm:mb-3 sm:text-4xl md:mb-6 md:text-5xl">
              Welcome Back!
            </h1>
            <p className="text-textLight md:text-lg">
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
          <div className="card w-full rounded-lg bg-white shadow-lg">
            <form className="card-body pb-0" onSubmit={handleSignIn}>
              <h2 className="text-center text-3xl font-bold text-primary">
                Login
              </h2>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-gray-700">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-gray-700">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn rounded-full bg-primary text-white transition-colors duration-300 hover:bg-secondary">
                  Login
                </button>
              </div>
            </form>

            <div className="my-4 flex items-center justify-center">
              <p className="mx-2 text-xl font-bold text-primary">Or</p>
            </div>

            <div className="mb-12 flex flex-col items-center">
              <button
                className="flex items-center gap-2 rounded-full border border-primary bg-white px-6 py-2 text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
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
