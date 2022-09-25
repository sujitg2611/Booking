import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"

const Hotel = () => {

  const photos = [
    {
      src: {}
    },
    {
      src: {}
    },
    {
      src: {}
    },
    {
      src: {}
    },
    {
      src: {}
    },
    {
      src: {}
    }
  ];
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Apollo Bandar, Colaba, Mumbai, Maharashtra 400001</span>
          </div>
          <span className="hotelDistance">
            Excellent Location
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over 10000Rs at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map(photo=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Mumbai</h1>
              <p className="hotelDesc">
              The Taj Mahal Palace, Mumbai is conveniently located within touching distance to prominent tourist attractions in and around Mumbai. Our hotel in Mumbai is also the perfect destination for a blissful getaway from Ahmedabad. Enjoy our warm hospitality and service that make you feel at home. Explore the all meals inclusive 4D Travel offer to plan your next stay.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 7-night stay!</h1>
              <span>
                Located in the real heart of Mumbai, this property has an excellent location score for 9.6!
              </span>
              <h2>
                <b>40,000Rs</b> (7 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel