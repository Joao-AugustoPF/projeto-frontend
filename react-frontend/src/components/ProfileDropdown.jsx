import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/profiledropdown.css';

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserName(storedUser.name);
    }

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const logout = () => {
    localStorage.removeItem('user');
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <div ref={ref} className="profile-dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>{userName || 'Perfil'}</button>
      {isOpen && (
        <div className="dropdown">
          <button onClick={logout}>Deslogar</button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
