import { useState, useEffect } from 'react';
import '../styles/settings.css';

const Settings = () => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      setNewName(storedUser.name);
      setNewPassword(storedUser.password);
    }
  }, []);

  const handleSave = () => {
    // Update user data
    const updatedUser = { ...user, name: newName, password: newPassword };

    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        setSuccessMessage('Informações atualizadas com sucesso!');
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="settings-container">
      <h2>Configurações de Usuário</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
      </div>
      <div className="password-container">
        <label>
          Senha:
          <input
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={toggleShowPassword}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            disabled
          />
        </label>
      </div>
      <div>
        <label>
          Role:
          <input
            type="text"
            value={user.role}
            disabled
          />
        </label>
      </div>
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default Settings;
