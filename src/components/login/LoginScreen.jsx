import React, { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastpath') || '/';

        dispatch({
            type: types.login,
            payload: { name: 'Francisco', logged: true }
        });

        navigate(lastPath);
    }

    return (
        <div className='container mt-5'>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}
