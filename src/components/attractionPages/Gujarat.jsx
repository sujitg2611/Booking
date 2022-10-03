import "./images.css"
import GirNP from "../../Images/gir national park - gujarat.jpg"
import Gandhinagar from "../../Images/gandhinagar - gujarat.jpg"
import JhultaMinar from "../../Images/jhulta  minar gujarat.jpg"
import KankariaLake from "../../Images/kankaria lake gujarat.jpg"
import Somnath from "../../Images/somnath - gujarat.jpg"
const Gujarat = () => {
  return (
    <div>
        <h1>Gujarat</h1>
        <div className="featured">
        <div className="featuredItem">
            <img src={GirNP} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Gir</h1>
                <h1>National</h1>
                <h1>Park</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Gandhinagar} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Gandhi</h1>
                <h1>Nagar</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={JhultaMinar} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Jhulta</h1>
                <h1>Minar</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={KankariaLake} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Kankaria</h1>
                <h1>Lake</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Somnath} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Somnath</h1>
            </div>
        </div>
        </div>
        <p>The places to visit in Gujarat include UNESCO sites, religious sites, wildlife sanctuaries with Asiatic lions, Jyotirlinga, Char Dham Temples, museums, the large white desert Rann of Kutch, Statue of Unity and Gandhian heritage sites. There are numerous opportunities for a sightseeing tour. The richness in history, heritage and culture will overwhelm you on your first visit!
Gujarat borders Pakistan to the north-west, the Arabian Sea to the south-west, Rajasthan to the north, Maharashtra to the south, Madhya Pradesh to the east; Gujarat is the seventh largest state of India by area. The state is an electric mixture of different cultures and traditions, showcasing the traditions of the real India.
Gujarat is the birthplace of Mahatma Gandhi, fondly called the Father of the Nation. There are several points of tourist interest in Gujarat connected with Mahatma Gandhi. These include statues, museums and ashrams. There's something called a Gandhi Tourism Circuit which lets you follow the life of the Mahatma. Some of the best places to see related to Gandhi's life are Sabarmati Ashram, National Salt Satyagraha Museum, Kochrab Ashram and Gandhi Smriti.<br/>
Some of Gujarat's specialties are:<br/>
Patola Silk Sarees.<br/>
Bandhnis and traditional Gagra-Cholis.<br/>
Embroidered, Appliquéd Quilts.<br/>
Bangles.<br/>
Khadi.<br/>
Jewelry.<br/>
Handlooms and Handicrafts.</p>
    </div>
  )
}

export default Gujarat