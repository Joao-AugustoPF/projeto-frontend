import '../styles/sidebar.css'; // Importando o arquivo CSS
import { Outlet } from "react-router-dom";
export default function Root() {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h1 className="sidebar-logo">Dashboard</h1>
                <ul className="sidebar-menu">
                    <li><a href="/dashboard">Home</a></li>
                    <li><a href="/dashboard/cadastro">Cadastro</a></li>
                    <li><a href="/dashboard/listagem">Listagem</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
}