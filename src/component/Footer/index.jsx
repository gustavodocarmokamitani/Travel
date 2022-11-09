import logo from "../../assets/footerLogo.png";
import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import twitter from "../../assets/twit.png";
import visa from "../../assets/visa.png";
import master from "../../assets/master.png";
import pay from "../../assets/pay.png";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <Container>
          <div className={`row ${styles.footerContent}`}>
            <div className="col-3">
              <img width={180} height={120} src={logo} alt="" />
            </div>
            <div className="col-3">
              <ul>
                <li className={styles.bannerTitle}>About us</li>
                <li>About Travel Together</li>
                <li>Contact us</li>
                <li>Features</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li className={styles.bannerTitle}>Resources</li>
                <li>Help center</li>
                <li>Blog</li>
                <li>Partnership</li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li className={styles.bannerTitle}>Get in touch</li>
                <li>Question or Feedback?</li>
                <li>We’d love to hear from you</li>
                <li>
                  <img className={styles.footerIconsInsta} src={insta} alt="" />
                  <img className={styles.footerIconsFace} src={face} alt="" />
                  <img
                    className={styles.footerIconsTwitter}
                    src={twitter}
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="row mt-5">
                <div className="d-flex justify-content-center">
                    <img className="mx-5" height={40} src={visa} alt="" />
                    <img className="mx-5" height={40} src={master} alt="" />
                    <img className="mx-5" height={40} src={pay} alt="" />
                </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
