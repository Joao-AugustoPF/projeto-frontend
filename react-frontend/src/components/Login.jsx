import { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';
import Navbar from './Navbar'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/users?email=${email}`);
      const users = response.data;

      if (users.length === 0) {
        setErrorMessage('Usuário não encontrado');
      } else {
        const user = users[0];
        if (password === user.password) {
          console.log('Login bem-sucedido! Usuário:', user);

          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('isLoggedIn', 'true');

          setErrorMessage('');
          window.location.href = '/dashboard';
        } else {
          setErrorMessage('Senha incorreta');
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Erro ao fazer login');
    }
  };

  const handleRegisterRedirect = () => {
    window.location.href = '/registro'
  }

  return (
    <div>
    <Navbar />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Entrar</button>
          <button type="submit" className="register-button" onClick={handleRegisterRedirect}>Registre agora</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
