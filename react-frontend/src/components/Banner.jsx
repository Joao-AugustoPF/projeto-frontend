import '../styles/banner.css'; // Certifique-se de que o caminho está correto

const BannerComponent = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Bem-vindo ao Nosso Site!</h1>
                <p>Descubra nossa gama de produtos e ofertas exclusivas agora.</p>
                <button className="banner-btn">Veja Mais</button>
            </div>
        </div>
    );
};

export default BannerComponent;