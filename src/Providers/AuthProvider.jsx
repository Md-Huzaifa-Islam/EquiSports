import { AuthContext } from "./Contexts";

import PropTypes from "prop-types";

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "huzaifa",
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
