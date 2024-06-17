/* eslint-disable react/prop-types */
import '../styles/modal.css';

const Modal = ({ isOpen, onClose, product }) => {
    if (!isOpen) {
      return null;
    }

    const formatImagePath = (path) => {
        return path.replace('public\\', '');
    };

    const imageUrl = (imagePath) => {
        const url = "http://localhost:3000/"
        const path = formatImagePath(imagePath)
        return `${url}${path}`
    }
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
          <img src={imageUrl("")} alt={product.name} className="modal-banner" />
          <div className="modal-content">
            <h2>Produto: {product.name}</h2>
            <p>Estoque: {product.estoque}</p>
            <p>Preço: {product.preco}</p>
            <button onClick={onClose}>Fechar</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
