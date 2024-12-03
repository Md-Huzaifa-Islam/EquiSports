import { useContext } from "react";
import { AuthContext } from "./Contexts";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  return user ? children : <Navigate to="/login" />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
