import SmallCard from "../SmallCard/index";
import MiddleCard from "../MiddleCard/index";
import OptionsTravel from "../OptionsTravel/index";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import options1 from "../../assets/options1.png";
import options2 from "../../assets/options2.png";
import options3 from "../../assets/options3.png";
import options4 from "../../assets/options4.png";
import options5 from "../../assets/options5.png";
import options6 from "../../assets/options6.png";
import LargeCard1 from "../../assets/LargeCard1.png";
import LargeCard2 from "../../assets/LargeCard2.png";
import LargeCard3 from "../../assets/LargeCard3.png";
import LargeCard4 from "../../assets/LargeCard4.png";
import LargeCard5 from "../../assets/LargeCard5.png";
import LargeCard6 from "../../assets/LargeCard6.png";
import LargeCard7 from "../../assets/LargeCard7.png";
import LargeCard8 from "../../assets/LargeCard8.png";
import Travellers from "../Travellers";
import LargeCard from "../LargeCard";
import BannerFooter from "../BannerFooter";
import Footer from "../Footer";

const Body = () => {
  return (
    <>
    <Container>
      <div className={`row text-center ${styles.title}`}>
        <h1>Popular Searches</h1>
        <div className="col-2">
          <button>Trips under 2 weeks</button>
        </div>
        <div className="col-2">
          <button>Best-Selling trips</button>
        </div>
        <div className="col-2">
          <button>Best-Selling trips</button>
        </div>
        <div className="col-2">
          <button>National parks USA</button>
        </div>
        <div className="col-2">
          <button>Trips under 800$</button>
        </div>
        <div className="col-2">
          <button>Scandinavian trio</button>
        </div>
      </div>
      <div className={`row text-center ${styles.title}`}>
        <h1>Popular Searches</h1>
        <div className="col-4">
          <SmallCard
            image={card1}
            city={"Scadinavia"}
            price={"1900$"}
            resume={
              "From colourful Copenhagen to sophisticated Stockholm, this trip gives you 12 days of pure Scandinavian magic."
            }
          />
        </div>
        <div className="col-4">
          <SmallCard
            image={card2}
            city={"Barcelona"}
            price={"2256$"}
            resume={
              "The one that gives you the best of Spanish culture, from beaches to palaces to tapas"
            }
          />
        </div>
        <div className="col-4">
          <SmallCard
            image={card3}
            city={"Yellowstone and Grand Tetons"}
            price={"995$"}
            resume={
              "From the peaks of the Grand Tetons to Yellowstone, for 2 days of adventure in the world's oldest National Park"
            }
          />
        </div>
      </div>
      <div className={`row text-center ${styles.title}`}>
        <h1>Most popular trips</h1>

        <div className="col-6">
          <MiddleCard
            image={card4}
            city={"European whirl"}
            price={"2303$"}
            resume={
              "Dreaming of your European adventure, but doеn't know where to start? Welcome to the European Whirl. ."
            }
          />
        </div>
        <div className="col-6">
          <MiddleCard
            image={card5}
            city={"Greek Island Hopping"}
            price={"1900$"}
            resume={
              "You'll be living your best Greek island life on this sun, sea & culture-rich trip in Mykonos, Paros, Santorini, Ios & Athens. Stopping in at each of Greece's most popular islands."
            }
          />
        </div>
      </div>
      <div className="row">
        <div className={styles.allTrips}>
          <button className={styles.buttonAllTrips}>All trips</button>
        </div>
      </div>
      <div className={`row ${styles.title}`}>
        <h1 className="text-center mb-0">Why choose Travel Together</h1>
        <div className="row">
          <div className="col-4">
            <OptionsTravel
              image={options1}
              title={"Diverse Destinations"}
              text={"Richly varied landscapes, luxury accommodation Travel."}
            />
          </div>
          <div className="col-4">
            <OptionsTravel
              image={options2}
              title={"Value for Money"}
              text={"Richly varied landscapes, luxury accommodation Travel."}
            />
          </div>
          <div className="col-4">
            <OptionsTravel
              image={options3}
              title={"Beautiful Places"}
              text={"Richly varied landscapes, luxury accommodation Travel."}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <OptionsTravel
              image={options4}
              title={"Fast Booking"}
              text={"Richly varied landscapes, luxury accommodation Travel."}
            />
          </div>
          <div className="col-4">
            <OptionsTravel
              image={options5}
              title={"Passionate Travel"}
              text={"Richly varied landscapes, luxury accommodation Travel."}
            />
          </div>
          <div className="col-4">
            <OptionsTravel
              image={options6}
              title={"Support Team"}
              text={"Richly varied landscapes, luxury accommodation Travel."}
            />
          </div>
        </div>
        <div className={`row mt-5 ${styles.title}`}>
          <h1 className="text-center mt-5">What travellers are saying</h1>
          <Travellers/>
        </div>
        <div className="row mt-5">
        <h1 className="text-center mt-5">Where are we go</h1>
            <div className="col-6">
                <LargeCard image={LargeCard1} title={"USA"}/>
            </div>
            <div className="col-6">
                <LargeCard image={LargeCard2} title={"Canada"}/>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <LargeCard image={LargeCard3} title={"Europe"}/>
            </div>
            <div className="col-6">
                <LargeCard image={LargeCard4} title={"Asia"}/>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <LargeCard image={LargeCard5} title={"Latin America"}/>
            </div>
            <div className="col-6">
                <LargeCard image={LargeCard6} title={"Australia"}/>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <LargeCard image={LargeCard7} title={"Africa"}/>
            </div>
            <div className="col-6">
                <LargeCard image={LargeCard8} title={"View all places >"}/>
            </div>
        </div>
        <div className="row">
            <BannerFooter/>
        </div>
      </div>     
    </Container>
    <Footer/>
    </>
  );
};

export default Body;
