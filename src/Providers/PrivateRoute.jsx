import { useContext } from "react";
import { AuthContext } from "./Contexts";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex h-full min-h-[50vh] items-center justify-center">
        <span className="loading loading-infinity loading-lg text-white"></span>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" state={location?.pathname} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
