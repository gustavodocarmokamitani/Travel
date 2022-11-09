import styles from "./styles.module.scss";
import star from "../../assets/star.png";
import icon1 from "../../assets/icon1.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const MiddleCard = ({ city, resume, price, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={image} width={600} alt="Scadinavia" />
        <div className="price">
          <p>From {price}</p>
        </div>
      </div>
      <div className={styles.body}>
        <h5>{city}</h5>
        <div className="d-flex">
          <img src={star} width={20} height={19} alt="star quality" />
          <img src={star} width={20} height={19} alt="star quality" />
          <img src={star} width={20} height={19} alt="star quality" />
          <img src={star} width={20} height={19} alt="star quality" />
          <img src={star} width={20} height={19} alt="star quality" />
          <p>5.0</p>
        </div>
        <div className={`row mt-0 ${styles.headerText}`}>
          <div className="col-4 mt-0 ">
            <div className="d-flex">
              <img src={icon3} width={20} height={22} alt="icon calendar" />
              <p>12 Days</p>
            </div>
          </div>
          <div className="col-4 mt-0 ">
            <div className="d-flex">
              <img src={icon1} width={18} height={22} alt="icon" />
              <p>9 Places</p>
            </div>
          </div>
          <div className="col-4 mt-0 px-0">
            <div className="d-flex">
              <img src={icon4} width={22} height={22} alt="" />
              <p>3 Countries</p>
            </div>
          </div>
          <p className={styles.resume}>{resume}</p>
        </div>
        <div className={styles.details}>
          <button>View details</button>
        </div>        
      </div>
    </div>
  );
};

export default MiddleCard;
