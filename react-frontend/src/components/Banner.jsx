import '../styles/banner.css';
import bannerImage from '/BANNER.png';

const BannerComponent = () => {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Banner" />
        </div>
    );
};

export default BannerComponent;