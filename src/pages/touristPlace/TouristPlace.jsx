import Attraction from "../../components/attraction/Attraction"
import Attraction1 from "../../components/attraction/Attraction1"
import Attraction2 from "../../components/attraction/Attraction2"
import Attraction3 from "../../components/attraction/Attraction3"
import Attraction4 from "../../components/attraction/Attraction4"
import Attraction5 from "../../components/attraction/Attraction5"
import Attraction6 from "../../components/attraction/Attraction6"
import Attraction7 from "../../components/attraction/Attraction7"
import Attraction8 from "../../components/attraction/Attraction8"
import Featured from "../../components/featured/Featured"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import "./touristPlace.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <Attraction/>
          <Attraction1/>
          <Attraction2/>
          <Attraction3/>
          <Attraction4/>
          <Attraction5/>
          <Attraction6/>
          <Attraction7/>
          <Attraction8/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home