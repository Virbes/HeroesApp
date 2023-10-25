import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PrivateRouter = ({ user }) => {
    
    localStorage.setItem('lastpath', useLocation().pathname);

    return user.logged ? <Outlet /> : <Navigate to="/login" />;
}