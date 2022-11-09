import styles from "./styles.module.scss";
import logo from "../../assets/logoTextosvg.svg";
import chat from "../../assets/chat.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <Navbar bg="Dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className={styles.logo} height={85} width={118} src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="mx-1" href="#destinations">
                Destinations
              </Nav.Link>
              <Nav.Link className="mx-1" href="#deals">
                Deals
              </Nav.Link>
              <Nav.Link className="mx-1" href="#travelStyles">
                Travel Styles
              </Nav.Link>
              <Nav.Link className="mx-1" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="mx-1" href="#getInspired">
                Get Inspired
              </Nav.Link>
            </Nav>
            <Nav>
              <div className={styles.inputGroup}>
                <input
                  className={styles.navbarInput}
                  placeholder="Find your adventure"
                />
                <button className={styles.inputButton}>
                  <FontAwesomeIcon icon={faSearch}/>
                </button>
              </div>
              <div className={`navbarContact d-flex flex-column ${styles.contact}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <img
                    src={chat}
                    alt="Contact Chat"
                    width={"18px"}
                    height={"18px"}
                  />
                  <span>24/7 Support</span>
                </div>
                <p>00 41 22 626 1692</p>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
