import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                <Route path='/login' element={<PublicRouter user={user} />}>
                    <Route path='/login' element={<LoginScreen />} />
                </Route>

                <Route path='*' element={<PrivateRouter user={user} />}>
                    <Route path='*' element={<DashboardRoutes />} />
                </Route>
            </Routes>
        </Router>
    );
}
