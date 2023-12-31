import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
    
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({
            type: types.logout,
            payload: { logged: false }
        });

        navigate('login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-5">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse w-100">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/search"
                    >
                        Search Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info line'>{user.name}</span>

                    <button className="nav-item nav-link" onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
}