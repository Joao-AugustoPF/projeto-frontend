// MainPage.jsx
import Product from './Product';
import '../styles/MainPage.css';

const MainPage = () => {
    const products = [
        {
            id: 1,
            name: "Produto 1",
            description: "Descrição do Produto 1",
            price: 19.99,
            stock: 15,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            name: "Produto 2",
            description: "Descrição do Produto 2",
            price: 29.99,
            stock: 20,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            name: "Produto 3",
            description: "Descrição do Produto 3",
            price: 34.99,
            stock: 10,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 4,
            name: "Produto 4",
            description: "Descrição do Produto 4",
            price: 22.99,
            stock: 5,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 5,
            name: "Produto 5",
            description: "Descrição do Produto 5",
            price: 15.99,
            stock: 8,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 6,
            name: "Produto 6",
            description: "Descrição do Produto 6",
            price: 9.99,
            stock: 30,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 7,
            name: "Produto 7",
            description: "Descrição do Produto 7",
            price: 49.99,
            stock: 12,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 8,
            name: "Produto 8",
            description: "Descrição do Produto 8",
            price: 27.50,
            stock: 7,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 9,
            name: "Produto 9",
            description: "Descrição do Produto 9",
            price: 32.99,
            stock: 14,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 10,
            name: "Produto 10",
            description: "Descrição do Produto 10",
            price: 25.99,
            stock: 11,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 11,
            name: "Produto 11",
            description: "Descrição do Produto 11",
            price: 18.99,
            stock: 20,
            imageUrl: "https://via.placeholder.com/150"
        },
        {
            id: 12,
            name: "Produto 12",
            description: "Descrição do Produto 12",
            price: 21.99,
            stock: 16,
            imageUrl: "https://via.placeholder.com/150"
        }
    ];
    

    return (
        <div className="product-list">
            {products.map(product => (
                <Product
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    stock={product.stock}
                    imageUrl={product.imageUrl}
                />
            ))}
        </div>
    );
};

export default MainPage;
