import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">Frontend</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro-produtos">Cadastrar</Link>
                <Link to="/contact">Contact</Link>
            </nav>
      </div>
    )
}

export default Navbar