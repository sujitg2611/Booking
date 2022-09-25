import { faCircleArrowLeft, faCircleRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import TajMahal1 from "../../Images/TajMahalroom1.jpg"
import TajMahal2 from "../../Images/TajMahalroom2.jpg"
import TajMahal3 from "../../Images/TajMahalroom3.jpg"
import TajMahal4 from "../../Images/TajMahalroom4.jpg"
import TajMahal5 from "../../Images/TajMahalroom5.jpg"
import TajMahal6 from "../../Images/TajMahalroom6.jpg"
import "./hotel.css"

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: TajMahal1
    },
    {
      src: TajMahal2
    },
    {
      src: TajMahal3
    },
    {
      src: TajMahal4
    },
    {
      src: TajMahal5
    },
    {
      src: TajMahal6
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction==="l") {
      newSlideNumber = slideNumber ===0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
       { open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber.src]} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleRight}className="arrow" onClick={()=>handleMove("r")} />
        </div>}
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
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
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