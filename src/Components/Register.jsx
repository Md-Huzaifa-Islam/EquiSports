import { useContext } from "react";
import { AuthContext } from "../Providers/Contexts";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Register = () => {
  const { signUpWithEmail, updateNameAndPhoto, setUser, signInWithGmail } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUpEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value.trim();
    signUpWithEmail(email, password)
      .then((p) => {
        setUser(p.user);
        updateNameAndPhoto(name, photo)
          .then(() => {
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-primary to-secondary">
      <div className="flex w-11/12 flex-col items-center gap-12 lg:flex-row">
        {/* Left Section */}
        <Slide direction="left" duration={800} triggerOnce>
          <div className="text-center lg:w-1/2 lg:text-left">
            <h1 className="mb-6 text-5xl font-extrabold text-white">
              Join Us Today!
            </h1>
            <p className="text-textLight text-lg">
              Register now and get access to exclusive offers, explore sports
              equipment, and much more!
            </p>
          </div>
        </Slide>

        {/* Right Section */}
        <Fade cascade className="flex-grow" triggerOnce duration={800}>
          <div className="card w-full rounded-lg bg-white p-8 shadow-lg">
            <form className="card-body" onSubmit={handleSignUpEmail}>
              <h2 className="mb-6 text-center text-3xl font-bold text-primary">
                Create an Account
              </h2>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-gray-700">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>

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
                  <span className="label-text text-gray-700">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Profile Photo URL"
                  className="input input-bordered rounded-lg"
                  name="photo"
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
                  Register
                </button>
              </div>
            </form>

            <div className="my-4 flex items-center justify-center">
              <p className="mx-2 text-gray-500">or</p>
            </div>

            <div className="mb-4 flex flex-col items-center">
              <button
                className="flex items-center gap-2 rounded-full border border-primary bg-white px-6 py-2 text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white"
                onClick={() => {
                  signInWithGmail()
                    .then((u) => {
                      console.log(u);
                      navigate("/");
                    })
                    .catch((err) => console.log(err));
                }}
              >
                <FcGoogle size={24} />
                <span className="text-lg font-medium">Sign Up with Google</span>
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Register;
