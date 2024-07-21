import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from './useAuth';

export default function PrivateRoutes() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>; // Show loading indicator while checking authentication
      }

    let  userid = localStorage.getItem("token") == null ? false : true;
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
