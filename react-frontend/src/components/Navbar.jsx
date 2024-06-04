import  { useState, useEffect } from 'react';
import ProfileDropdown from './ProfileDropdown';
import { Link, Outlet } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user);
    }, []);

    return (
        <div>
            <div className="navbar">
                <Link className='logo' to="/">Frontend</Link>
                <nav>
                    {isLoggedIn ? (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <ProfileDropdown />
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/registro">Registro</Link>
                        </>
                    )}
                </nav>
            </div>

            <Outlet />
        </div>
    );
}

export default Navbar;
