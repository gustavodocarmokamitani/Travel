import Slider from "react-slick";

import traveller from "../../assets/traveller.png";
import traveller2 from "../../assets/traveller2.png";
import traveller3 from "../../assets/traveller3.png";
import styles from "./styles.module.scss";

const Travellers = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.slideContainer}>
        <div className={styles.slickSlide}>
          <Slider {...settings}>
            <div className={styles.slideCardContainer}>
              <div className={styles.slideCard}>
                <img src={traveller} width={64} alt="" />
                <h5>Melanie L.</h5>
                <p>
                  Dreaming of your European adventure, but doеn't know where to
                  start? Welcome to the European Whirl. .
                </p>
              </div>
            </div>
            <div className={styles.slideCardContainer}>
              <div className={styles.slideCard}>
                <img src={traveller2} width={64} alt="" />
                <h5>Melanie L.</h5>
                <p>
                  Dreaming of your European adventure, but doеn't know where to
                  start? Welcome to the European Whirl. .
                </p>
              </div>
            </div>
            <div className={styles.slideCardContainer}>
              <div className={styles.slideCard}>
                <img src={traveller3} width={64} alt="" />
                <h5>Louis Jabeth</h5>
                <p>
                  Dreaming of your European adventure, but don't know where to
                  start? Welcome to the European Whirl. .
                </p>
              </div>
            </div>
            <div className={styles.slideCardContainer}>
              <div className={styles.slideCard}>
                <img src={traveller} width={64} alt="" />
                <h5>Robin Doe</h5>
                <p>
                  Dreaming of your European adventure, but doеn't know where to
                  start? Welcome to the European Whirl. .
                </p>
              </div>
            </div>           
            <div className={styles.slideCardContainer}>
              <div className={styles.slideCard}>
                <img src={traveller2} width={64} alt="" />
                <h5>Melanie L.</h5>
                <p>
                  Dreaming of your European adventure, but doеn't know where to
                  start? Welcome to the European Whirl. .
                </p>
              </div>
            </div>
            <div className={styles.slideCardContainer}>
              <div className={styles.slideCard}>
                <img src={traveller3} width={64} alt="" />
                <h5>Louis Jabeth</h5>
                <p>
                  Dreaming of your European adventure, but don't know where to
                  start? Welcome to the European Whirl. .
                </p>
              </div>
            </div>
            <div className={styles.slideCardContainer}>
              <div className={styles.slideCard}>
                <img src={traveller} width={64} alt="" />
                <h5>Robin Doe</h5>
                <p>
                  Dreaming of your European adventure, but doеn't know where to
                  start? Welcome to the European Whirl. .
                </p>
              </div>
            </div>           
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Travellers;
