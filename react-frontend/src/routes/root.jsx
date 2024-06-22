import '../styles/sidebar.css'; // Importando o arquivo CSS
import { Outlet } from "react-router-dom";
import { useState } from 'react';

export default function Root() {

    const [showListagem, setShowListagem] = useState(false);
    const [showCadastro, setShowCadastro] = useState(false);

    const toggleListagem = () => {
        setShowListagem(!showListagem)
    } 

    const toggleCadastro = () => {
        setShowCadastro(!showCadastro)
    }

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h1 className="sidebar-logo">Dashboard</h1>
                <ul className="sidebar-menu">
                    <li><a href="/dashboard">Home</a></li>
                    <li><a href="#" onClick={toggleCadastro}>Cadastro</a>
                        {showCadastro && (
                            <div className="second-container">
                                <ul>
                                    <li><a href="/dashboard/cadastro/produtos">Produtos</a></li>
                                    <li><a href="/dashboard/cadastro/servicos">Serviços</a></li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li><a href="#" onClick={toggleListagem}>Listagem</a>
                        {showListagem && (
                            <div className="second-container">
                                <ul>
                                    <li><a href="/dashboard/listagem/produtos">Produtos</a></li>
                                    <li><a href="/dashboard/listagem/servicos">Serviços</a></li>
                                </ul>
                            </div>
                        )}  
                    </li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </div>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
}