import { useContext } from "react";
import { AuthContext } from "../Providers/Contexts";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { signUpWithEmail, updateNameAndPhoto, setUser, signInWithGmail } =
    useContext(AuthContext);
  const handleSignUpEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value.trim();
    signUpWithEmail(email, password)
      .then((p) => {
        // Signed up
        setUser(p.user);
        updateNameAndPhoto(name, photo)
          .then(() => {
            // console.log(user);
          })
          .catch((error) => console.log(error));
      })
      .catch(
        (error) => console.log(error.message),
        // ..
      );
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 py-10 shadow-2xl">
          <form className="card-body py-0" onSubmit={handleSignUpEmail}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="flex flex-col items-center">
            <p className="my-3">Or</p>
            <button
              className="flex items-center gap-2 rounded-full border border-blue-800 px-4 py-2 text-blue-800"
              onClick={() => {
                signInWithGmail()
                  .then((u) => console.log(u))
                  .catch((err) => console.log(err));
              }}
            >
              <FcGoogle size={20} />
              <p className="text-lg">Login With Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
