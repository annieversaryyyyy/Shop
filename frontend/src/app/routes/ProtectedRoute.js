import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectTo, ...props }) => {
  return isAllowed ? <Route {...props} /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
