/* eslint-disable react/prop-types */
import '../styles/products-list.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function ProductsList() {
    
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    const handleEdit = (productId) => {
        navigate(`/dashboard/edit/${productId}`, { replace: true });
    };

    const handleDelete = async (productId) => {
        await axios.delete(`http://localhost:3000/products/${productId}`);
        setProducts(products.filter( product => product.id !== productId));
    }
    
    // Função para remover "public\\" do caminho e preparar o caminho correto para o src da tag img
    const formatImagePath = (path) => {
        if (!path) return ''; //Verificação se o path está vazio
        return path.replace('public\\', '');
    };

    const imageUrl = (imagePath) => {
        const url = "http://localhost:3000/"
        const path = formatImagePath(imagePath)
        return `${url}${path}`
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("http://localhost:3000/products")
            setProducts(response.data)
        }
        fetchProducts()
    }, [])

    return (
        <>
            <h1>Produtos</h1>
            <table className='table'>
                <thead className="t-header">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Imagem</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>R$ {product.preco}</td>
                            <td>{product.estoque}</td>
                            <td>
                                <img src={imageUrl(product.imagePath)} alt={product.name} style={{ width: '100px', height: '100px' }} />
                            </td>
                            <td className="actions">
                                <button onClick={() => handleEdit(product.id)}>Editar</button>
                                <button onClick={() => handleDelete(product.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}