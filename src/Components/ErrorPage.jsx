import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-5 text-white">
      <div className="w-full max-w-md rounded-lg bg-gray-800 bg-opacity-90 px-6 py-12 text-center shadow-lg">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-6 text-2xl">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="mb-8 text-lg">
          We can’t find the page you’re looking for. It might have been removed
          or the URL could be incorrect.
        </p>
        <button
          onClick={handleGoHome}
          className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-8 py-3 text-xl font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-500"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
