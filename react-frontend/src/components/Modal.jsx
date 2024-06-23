/* eslint-disable react/prop-types */
import '../styles/modal.css';
import { imageUrl } from '../utils/formatUrlImage';

const Modal = ({ isOpen, onClose, product }) => {
    if (!isOpen) {
      return null;
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
