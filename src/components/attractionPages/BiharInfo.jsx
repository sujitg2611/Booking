import "./images.css"
import Rajgir from "../../Images/rajgir bihar.jpg"
import Nalanda from "../../Images/nalanda bihar.jpg"
import Mahabodhi from "../../Images/mahabodhi temple - bihar.jpg"
import Kakolat from "../../Images/kakolat bihar.jpg"
import BodhGaya from "../../Images/bodh gaya- bihar.jpg"
const BiharInfo = () => {
  return (
    <div>
        <h1>Bihar</h1>
        <p>Bihar is located in the eastern part of India. Once considered as India’s most important seat of learning, culture, and power, today Bihar is an important tourist and pilgrimage destination. Best known for its Buddhist circuit, the state has several fascinating destinations waiting to be explored.  
Temples: Bodh Gaya, Mahabodhi Temple, Giant Buddha, Patna Sahib Gurudwara – JanhitGurbaani, Dungeshwari, Jal Mandir, Saptaparni Cave, Kesaria Stupa
Gardens and Parks: Sanjay Gandhi Jaivik Udyan, Kanwar Lake Bird Sanctuary, Kaimur Wildlife Sanctuary, Valmiki Nagar, Bhimbandh Wildlife Sanctuary
Museums: Patna Museum, Bihar Museum, Buddha Smriti Park, Shrikrishna Science Centre, Jalan Museum, Gandhi Sangrahalaya, Nalanda Archaeological Museum
Waterfall: Kakolat Falls<br/>
Historical Places: Golghar, Tomb of Sher Shah Suri, Rohtasgarh Fort, Munger Fort, Nalanda
Others: Barabar Caves, Mahatma Gandhi Setu, Royal Bhutan Monastery
Quick Jumplinks to Navigate in Bihar:<br/>
1. Madhubani Paintings<br/>
2. Tea leaves <br/>
3. Silk Sarees <br/>
4. Lacquer Art from Muzaffarpur<br/>
5. Bamboo Works <br/>
6. Metal Craft</p>
        <div className="featured">
        <div className="featuredItem">
            <img src={Rajgir} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Rajgir</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Nalanda} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Nalanda</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Mahabodhi} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Mahabodhi</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Kakolat} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Kakloat</h1>

            </div>
        </div>
        <div className="featuredItem">
            <img src={BodhGaya} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>BodhGaya</h1>

            </div>
        </div>
        </div>
        <p>5.Bodh gaya - bihar
Bodh Gaya is a Buddhist pilgrimage site in Gaya District of Bihar. Famous for the Mahabodhi Temple, It was here under the Bodhi tree that Gautama Buddha attained enlightenment.
It is now one of the UNESCO World Heritage Sites, and a lot of foreign countries, including Japan and China, have helped the Indian government in building facilities for the Buddhist pilgrims. The place is bustling with pilgrims all through the year from India and abroad who come to pay their homage in monasteries, temples and remnants of Bodhi Tree.
Located near the river Neranjana, Bodh Gaya was earlier known as Uruwela. It was also known as Sambodhi, Vajrasana or Mahabodhi until the 18th century CE. It is one of the four important Buddhist sites that include: Kushinagar, Lumbini and Sarnath.</p>
    </div>
  )
}

export default BiharInfo