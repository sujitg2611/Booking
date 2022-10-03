import "./images.css"
import Agra from "../../Images/agra - uttar pradesh.jpg"
import Mathura from "../../Images/mathura - uttar pradesh.jpg"
import Lucknow from "../../Images/lucknow - uttar pradesh.jpg"
import Varanasi from "../../Images/Varanasi - uttar pradesh.jpg"
import Vrindavan from "../../Images/vrindavan - uttar pradesh.jpg"
const UttarPradesh = () => {
  return (
    <div className="something">
        <h1>UttarPradesh</h1>
        <p>Uttar Pradesh conjures an image of acres and acres wide swaying fields; ancient Hindu temples on the bank of meandering rivers; and towns and cities with narrow alleys where a rich culture inhabits. Home to one of the world’s ancient most cities, and that of the iconic Taj Mahal; the origin place of two most prominent religions as well as of one of the important classical dance forms in India, Uttar Pradesh in North India is an unmissable holiday destination.<br/>
BEST TIME TO VISIT UTTARPRADESH:<br/>
The months between November and February are ideal for visiting Uttar Pradesh.<br/>
Things to Buy in Uttar Pradesh:<br/> Chikan Embroidery<br/> Banarasi Saree<br/> Brass and Metalware<br/> Perfumes or Attar<br/> Zardozi<br/> Bangles<br/> Jewelry</p>
    
        <div className="featured">
        <div className="featuredItem">
            <img src={Agra} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Agra</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Mathura} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Mathura</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Lucknow} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Lucknow</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Varanasi} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Varanasi</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Vrindavan} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Vrindavan</h1>
            </div>
        </div>
        </div>
        <p>1.Agra - uttar pradesh
It was once the capital of Mughal Empire. Since Shah Jahan could not stay in the land after the death of his beloved wife, he shifted the capital to Delhi. Agra is located on the western banks of the river, Yamuna. It is about 200 km away from the capital of the country, New Delhi.
People think Agra is just for Taj Mahal. But, it is an enthusiast place that would put you in awe. Agra was the capital of the great Akbar. Thus, there are a lot of architectural marvels to enjoy here that are related to Persian style. The iconic tourism destination is the world wonder, Taj Mahal. Apart from this, you can find tombs of various kinds, religious places, Yamuna River and water related activities in the river.
It is Agra is a colourful place. It still has the colourful medieval look. The narrow lanes, modern era hustle and local amusement would attract the visitors. With fast trains, it is easier to visit Agra from Delhi. People usually visit Agra for a day or two to enjoy all the attractions. Starting from the local relishing cuisine to Indo-Persian architecture, there are a lot of awe-factors in this land.
Agra is situated in the state of Uttar Pradesh and gets the most amounts of tourists every year.</p>
    </div>
  )
}

export default UttarPradesh