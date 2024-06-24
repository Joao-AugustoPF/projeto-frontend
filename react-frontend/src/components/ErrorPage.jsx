import { Link } from 'react-router-dom';
import '../styles/errorPage.css';

const ErrorPage = () => {
    return (
        <div className="error-container">
            <h1 className="error-title">404</h1>
            <p className="error-message">Desculpe, a página que você está procurando não foi encontrada.</p>
            <Link to="/" className="error-link">Voltar para a página inicial</Link>
        </div>
    );
};

export default ErrorPage;
