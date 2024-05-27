import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className='logo' to="/">Frontend</Link>
            <nav>
                <Link to="/cadastro-produtos">Cadastrar</Link>
                <Link to="/login">Login</Link>
                <Link to="/registro">Registro</Link>
            </nav>
      </div>
    )
}

export default Navbar