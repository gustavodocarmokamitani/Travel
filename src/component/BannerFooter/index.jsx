import svgFooter from '../../assets/bannerFooter.png';
import ios from '../../assets/ios.png';
import googleapp from '../../assets/googleapp.png';
import styles from "./styles.module.scss";

const BannerFooter = () => {
  return (
    <>
    <div className={`row ${styles.bannerFooterContainer}`}>
      <div className={`col-6 ${styles.bannerFooterContent}`}>
        <h1>Try our Travel Together app</h1>
        <p>
          All your travel plans, in one place.You handle the booking.Access
          reservations, maps, and more on your favorite device!View trending
          destinations. Discover popular trips. Listen to your heart. Experience
          the world.Find or create your perfect trip. Meet fellow travellers.
          Experience different cultures. Create unforgettable memories.Keep
          up-to-date with active trips, view your favourites, visit previous
          adventures. Managing a trip has never been easier.
        </p>
        <div className="row">
            <div className="col-6">
                <img width={204} height={60} src={ios} alt="IOS Store" />                
            </div>
            <div className="col-6">
            <img width={204} height={60} src={googleapp} alt="Google Store" />
            </div>
        </div>
      </div>
      <div className="col-6 mt-5">
            <img width={550} height={472} src={svgFooter} alt="Svg Walking" />
      </div>
    </div>    
    </>
  );
};

export default BannerFooter;
