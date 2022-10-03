import "./images.css"
import Bhilwara from "../../Images/bhilwara - rajasthan.jpg"
import Pushkar from "../../Images/pushkar - rajasthan.jpg"
import Shekhawati from "../../Images/shekhawati - rajasthan.jpg"
import Udaipur from "../../Images/udaipur - rajasthan.jpg"
import Tonk from "../../Images/tonk - rajasthan.jpg"
const Rajasthan = () => {
  return (
    <div>
        <h1>Rajasthan</h1>
        <p>Rajasthan is a state of vibrant folk dance and music, gigantic forts and palaces, spicy food, colourful and large turbans, extensive golden sand desert, camels and rich handicraft. It is therefore, an incredible place to visit in India for enjoying unforgettable holidays. Sprawling in an area of 342239 sq km, Rajasthan is perfect for history buffs, culture aficionados, adventure lovers, wildlife enthusiasts, family vacations, honeymoon, and more.
The major tourist attraction of Rajasthan are its havelis, palaces and forts that add to the experience of exploring one of the historically wealthy states in India. Some of the most famous and most visited forts in Rajasthan are Chittorgarh, Mehrangarh, Jaisalmer, Jaigarh and Junagadh Forts. Of these, the Mehrangarh Fort in Jodhpur is spread over 5 kilometers and stands on a hill almost 125 kilometers high. Chittorgarh Fort is also a must visited tourist attraction, as it’s the largest fort in Asia. It is spread over an area of 700 acres, extending to 3 km in length and 13 km in peripheral length. The exquisite architecture isn’t only confined to the palaces and forts as Rajasthan also boasts impressive Hindu & Jain temples like Dilwara Jain Temples and Eklingji Temple.<br/>
Jewelry and Gemstones <br/>
Paintings <br/>
Carpets<br/>
Pottery<br/>
Puppets, Stuffed Dolls, and toys<br/>
Fabric Work <br/>
Metal Work<br/>
Spices.

</p>
        <div className="featured">
        <div className="featuredItem">
            <img src={Bhilwara} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Bhilwara</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Pushkar} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Pushkar</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Shekhawati} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Shekhawati</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Udaipur} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Udaipur</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Tonk} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Tonk</h1>
            </div>
        </div>
        </div>
        <p>1.Bhilwara - rajasthan
Famous as the ‘city of textiles and looms’, Bhilwara is home to the world renowned Ramdwara of Ramsnehi Sampraday. The founder Guru of the Sampraday, Swami Ramcharanji Maharaj, preached to his followers here and later decided to move to Shahpura. The present day headquarters of the Ram Snehi Sampraday, known as Ram Niwas Dham are located in Shahpura.
Some people say that Bhilwara got its name from the Bhils (tribal people) who lived there during the days of yore. As per a story, the city of Bhilwara had a mint that minted coins known as ‘bhiladi’. This is supposedly the origin of the district’s name. Bhilwara's cultural history can also be traced back to the Nagar Brahmins mentioned in the Skanda Purana.</p>
    </div>
  )
}

export default Rajasthan