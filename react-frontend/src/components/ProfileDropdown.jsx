import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/profiledropdown.css'

const ProfileDropdown = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    // Fechar o dropdown ao clicar fora
    useEffect(() => {
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
        setIsOpen(false); // Fechar o dropdown
        navigate('/login'); // Redirecionar para a página de login
    };

    return (
        <div ref={ref}>
            <button onClick={() => setIsOpen(!isOpen)}>Perfil</button>
            {isOpen && (
                <div className="dropdown">
                    <button onClick={logout}>Deslogar</button>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
