import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRouter = ({ user }) => {
    return !user.logged ? <Outlet /> : <Navigate to="/" />;
}