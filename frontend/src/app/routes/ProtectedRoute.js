import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectTo, children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};
export default ProtectedRoute;
