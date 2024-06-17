/* eslint-disable react/prop-types */
import '../styles/product.css';

const Product = ({ name, description, price, stock, imageUrl, onClickBuy }) => {
    return (
        <div className="product">
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">Preço: ${price}</p>
                <p className="product-stock">Quantidade em estoque: {stock}</p>
                <button className="btn-buy" onClick={onClickBuy}>Comprar</button>
            </div>
        </div>
    );
};

export default Product;
