import React from "react";
import { Carousel } from "react-bootstrap";
import banner from "../../assets/banner.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import styles from "./styles.module.scss";

const Banner = () => {
  return (
    <>
      <Carousel className={styles.slides}>        
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" height={800} src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" height={800} src={banner3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" height={800} src={banner4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className={styles.bannerContent}>
        <div
          className={`${styles.bannerText} w-100 d-flex flex-column align-items-center justify-content-center`}
        >
          <h1>DREAMY SUMMER HOLIDAYS</h1>
          <button className={styles.buttonTrips}>See trips</button>
          <div
            className={` ${styles.bannerSearch} d-flex align-items-center justify-content-between`}
          >
            <div>
              <img src={icon1} width={29} alt="icon location" />
              <input type="text" placeholder="Where do you want to go?" />
            </div>
            <div>
              <img src={icon2} width={29} alt="icon location" />
              <input type="text" placeholder="Where do you want to go?" />
            </div>
            <div>
              <img src={icon3} width={29} alt="icon location" />
              <input type="text" placeholder="Where do you want to go?" />
            </div>
            <div>
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
