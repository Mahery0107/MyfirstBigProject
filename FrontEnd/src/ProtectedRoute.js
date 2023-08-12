import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ token, children}) => {
  if(localStorage.getItem('auth_token')){
    return children
  }

    return   <Navigate  to= "/Login" replace/>
};

export default ProtectedRoute;