import React from 'react';
import { useFirebase } from '../FirebaseContext';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user , loading } = useFirebase();
  const location = useLocation();

  if (loading) {
      return <span className="loading loading-infinity loading-lg"></span>
  }

  if (user) {
      return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;

};

export default PrivateRoute;
