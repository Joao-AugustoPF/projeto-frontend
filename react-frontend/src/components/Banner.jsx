import '../styles/banner.css'; // Certifique-se de que o caminho está correto
import bannerImage from '/BANNER.png';

const BannerComponent = () => {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Banner" />
        </div>
    );
};

export default BannerComponent;