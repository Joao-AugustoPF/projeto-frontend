/* eslint-disable react/prop-types */
import '../styles/modal.css';
import { imageUrl } from '../utils/formatUrlImage';

const ModalService = ({ isOpen, onClose, service }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <img src={imageUrl(service.imagePath)} alt={service.name} className="modal-banner" />
        <div className="modal-content">
          <h2>{service.name}</h2>
          <p>Descrição: {service.descricao}</p>
          <p>Preço: R${service.preco}</p>
          <button onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalService;