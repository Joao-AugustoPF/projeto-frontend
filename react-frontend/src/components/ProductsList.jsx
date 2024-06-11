/* eslint-disable react/prop-types */
import '../styles/products-list.css';

export default function ProductsList({ products, onDelete, onEdit }) {
    // Função para remover "public\\" do caminho e preparar o caminho correto para o src da tag img
    const formatImagePath = (path) => {
        return path.replace('public\\', '');
    };

    const imageUrl = (imagePath) => {
        const url = "http://localhost:3000/"
        const path = formatImagePath(imagePath)
        return `${url}${path}`
    }

    return (
        <>
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
                                <button onClick={() => onEdit(product.id)}>Editar</button>
                                <button onClick={() => onDelete(product.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
