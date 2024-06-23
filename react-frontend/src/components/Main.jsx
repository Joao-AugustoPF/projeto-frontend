import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import '../styles/MainPage.css';
import BannerComponent from './Banner';
import ModalProduct from './ModalProduct';
import { imageUrl } from '../utils/formatUrlImage';
import ModalService from './ModalService';
import Service from './Service';

const MainPage = () => {
    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

    const handleBuyClick = () => {
      setIsModalOpen(true);
    };

    const handleHireClick = () => {
        setIsServiceModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const handleCloseServiceModal = () => {
        setIsServiceModalOpen(false);
    };

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error('Erro ao buscar produtos:', error));

        axios.get('http://localhost:3000/services')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => console.error('Erro ao buscar serviços:', error));
    }, []);

    return (
        <div>
            <BannerComponent />
            <div className="product-list">
                <h2 className="main-title">Produtos</h2>
                {products.map(product => (
                    <>
                        <Product
                            key={product.id}
                            name={product.name}
                            price={product.preco}
                            stock={product.estoque}
                            onClickBuy={handleBuyClick}
                            imageUrl={imageUrl(product.imagePath)}
                        />
                        <ModalProduct isOpen={isModalOpen} onClose={handleCloseModal} product={product}/>
                    </>
                ))}
            </div>

            <div className="service-list">
                <h2 className="main-title">Serviços</h2>
                {services.map(service => (
                    <>
                        <Service
                            key={service.id}
                            name={service.name}
                            price={service.preco}
                            onClickHire={() => handleHireClick(service)}
                            imageUrl={imageUrl(service.imagePath)}
                        />
                        <ModalService isOpen={isServiceModalOpen} onClose={handleCloseServiceModal} service={service} />
                    </>
                ))}
            </div>
        </div>
    );
};

export default MainPage;
