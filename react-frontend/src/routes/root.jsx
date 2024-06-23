import '../styles/sidebar.css'; // Importando o arquivo CSS
import { Outlet, useLocation, Link } from "react-router-dom";
import { useState } from 'react';

export default function Root() {
    const [openSubmenus, setOpenSubmenus] = useState({
        cadastro: false,
        listagem: false,
    });

    const toggleSubmenu = (submenu) => {
        setOpenSubmenus(prevState => ({
            ...prevState,
            [submenu]: !prevState[submenu]
        }));
    };

    const location = useLocation();

    const getMenuItemClass = (path) => {
        return location.pathname === path ? 'sidebar-menu-active' : '';
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h1 className="sidebar-logo">Dashboard</h1>
                <ul className="sidebar-menu">
                    <li className={getMenuItemClass("/dashboard")}><Link to="/dashboard">Home</Link></li>
                    <li className={`${getMenuItemClass("/dashboard/cadastro")} ${openSubmenus.cadastro ? 'open' : ''}`}>
                        <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu('cadastro'); }}>
                            Cadastro <span className={`arrow ${openSubmenus.cadastro ? 'down' : 'right'}`}></span>
                        </a>
                        {openSubmenus.cadastro && (
                            <div className="second-container">
                                <ul>
                                    <li className={getMenuItemClass("/dashboard/cadastro/produtos")}><Link to="/dashboard/cadastro/produtos">Produtos</Link></li>
                                    <li className={getMenuItemClass("/dashboard/cadastro/servicos")}><Link to="/dashboard/cadastro/servicos">Serviços</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={`${getMenuItemClass("/dashboard/listagem")} ${openSubmenus.listagem ? 'open' : ''}`}>
                        <a href="#" onClick={(e) => { e.preventDefault(); toggleSubmenu('listagem'); }}>
                            Listagem <span className={`arrow ${openSubmenus.listagem ? 'down' : 'right'}`}></span>
                        </a>
                        {openSubmenus.listagem && (
                            <div className="second-container">
                                <ul>
                                    <li className={getMenuItemClass("/dashboard/listagem/produtos")}><Link to="/dashboard/listagem/produtos">Produtos</Link></li>
                                    <li className={getMenuItemClass("/dashboard/listagem/servicos")}><Link to="/dashboard/listagem/servicos">Serviços</Link></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className={getMenuItemClass("/settings")}><Link to="/settings">Settings</Link></li>
                </ul>
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
}
