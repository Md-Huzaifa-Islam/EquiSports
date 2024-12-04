import { useContext } from "react";
import { AuthContext } from "../Providers/Contexts";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInWithEmail, signInWithGmail } = useContext(AuthContext);
  const location = useLocation().state;
  const navigate = useNavigate();
  console.log(location);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    signInWithEmail(email, password)
      .then((p) => {
        console.log(p.user);
        navigate(location || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignInWithG = () => {
    signInWithGmail()
      .then((p) => {
        console.log(p);
        navigate(location || "/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 py-10 shadow-2xl">
          <form className="card-body py-0" onSubmit={handleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex flex-col items-center">
            <p className="my-3">Or</p>
            <button
              className="flex items-center gap-2 rounded-full border border-blue-800 px-4 py-2 text-blue-800"
              onClick={handleSignInWithG}
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

export default Login;
