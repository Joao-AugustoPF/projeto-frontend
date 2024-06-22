import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import '../styles/MainPage.css';
import BannerComponent from './Banner';
import Modal from './Modal';

const MainPage = () => {
    // Estado para armazenar os produtos
    const [products, setProducts] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBuyClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const formatImagePath = (path) => {
        if (!path) return '';
        return path.replace('public\\', '');
    };

    const imageUrl = (imagePath) => {
        const url = "http://localhost:3000/"
        const path = formatImagePath(imagePath)
        return `${url}${path}`
    }

    // Função para buscar produtos
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                setProducts(response.data); // Atualizar o estado com os produtos recebidos
            })
            .catch(error => console.error('Erro ao buscar produtos:', error));
    }, []); // O array vazio garante que o efeito será executado apenas uma vez após o render inicial

    return (
        <div>
            <BannerComponent />
            <div className="product-list">
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
                        <Modal isOpen={isModalOpen} onClose={handleCloseModal} product={product}/>
                    </>
                ))}
            </div>
        </div>
    );
};

export default MainPage;
