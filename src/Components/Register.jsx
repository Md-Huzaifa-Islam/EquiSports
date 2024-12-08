import { useContext } from "react";
import { AuthContext } from "../Providers/Contexts";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { toast } from "react-toastify";

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
    const newUser = {
      username: name,
      email: email,
    };
    if (password.length < 6) {
      toast.alert("Password must be at least 6 characters long.");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.alert("Password must contain at least one lowercase letter.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.alert("Password must contain at least one uppercase letter.");
      return;
    }

    signUpWithEmail(email, password)
      .then((userCredential) => {
        updateNameAndPhoto(name, photo)
          .then(() => {
            setUser({
              ...userCredential.user,
              displayName: name,
              photoURL: photo,
            });
            navigate("/");
            toast.success(`Your account is registered ${name}`);
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
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="mx-auto my-16 flex items-center justify-center md:container sm:my-12 md:my-16">
      <div className="flex w-11/12 flex-col items-center justify-between gap-12 sm:gap-6 md:gap-12 lg:flex-row">
        {/* Left Section */}
        <Slide direction="left" duration={800} triggerOnce>
          <div className="text-center md:mx-auto md:w-8/12 lg:mx-0 lg:w-1/2 lg:text-left">
            <h1 className="mb-6 text-5xl font-extrabold text-white sm:mb-3 sm:text-3xl md:mb-6 lg:text-5xl">
              Join Us Today!
            </h1>
            <p className="text-textLight md:text-lg">
              Register now and get access to exclusive offers, explore sports
              equipment, and much more!
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
          <div className="card w-full rounded-lg bg-white p-8 shadow-lg dark:bg-black">
            <form className="card-body pb-0" onSubmit={handleSignUpEmail}>
              <h2 className="mb-6 text-center text-3xl font-bold text-primary">
                Create an Account
              </h2>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-gray-700 dark:text-white">
                    Name
                  </span>
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

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-gray-700 dark:text-white">
                    Photo URL
                  </span>
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
                  <span className="label-text text-gray-700 dark:text-white">
                    Password
                  </span>
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
                <button className="btn rounded-full bg-primary text-white transition-colors duration-300 hover:bg-secondary dark:bg-[#275f5a]">
                  Register
                </button>
              </div>
            </form>

            <div className="my-4 flex items-center justify-center">
              <p className="mx-2 text-xl font-bold text-primary">Or</p>
            </div>

            <div className="mb-4 flex flex-col items-center">
              <button
                className="flex items-center gap-2 rounded-full border border-primary bg-white px-6 py-2 text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white dark:bg-gray-700"
                onClick={() => {
                  signInWithGmail()
                    .then((p) => {
                      toast.success("You account is created ");
                      const newUser = {
                        username: p.user.displayName,
                        email: p.user.email,
                      };
                      fetch(
                        `https://equipment-store-huzaifa.vercel.app/users`,
                        {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(newUser),
                        },
                      )
                        .then((res) => res.json())
                        .then(() => {
                          // toast.success("Equipment updated successfully");
                        })
                        .catch((error) => {
                          toast.error("Error updating equipment:", error);
                        });
                      navigate("/");
                    })
                    .catch((err) => toast.error(err.message));
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
