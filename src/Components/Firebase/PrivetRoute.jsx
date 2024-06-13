import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const location= useLocation()
  console.log(location.pathname);
  
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div><div className="text-7xl flex justify-center p-10 w-[100vh]"><span className="loading loading-spinner items-center loading-lg"></span></div>
    {/* <div className="h-48 rounded-t dark:bg-gray-300"></div>
    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
      <div className="w-full h-6 rounded dark:bg-gray-300"></div>
      <div className="w-full h-6 rounded dark:bg-gray-300"></div>
      <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
    </div> */}
  </div>   
  }
  
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
