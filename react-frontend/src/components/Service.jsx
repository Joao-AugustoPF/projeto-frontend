/* eslint-disable react/prop-types */
import '../styles/service.css';

const Service = ({ name, description, price, imageUrl, onClickHire }) => {
    return (
        <div className="service">
            <img src={imageUrl} alt={name} className="service-image" />
            <div className="service-details">
                <h3 className="service-name">{name}</h3>
                <p className="service-description">{description}</p>
                <p className="service-price">Preço: ${price}</p>
                <button className="btn-hire" onClick={onClickHire}>Contratar</button>
            </div>
        </div>
    );
};

export default Service;