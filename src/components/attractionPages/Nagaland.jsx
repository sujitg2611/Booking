import "./images.css"
import Dinapur from "../../Images/dimapur - nagaland.jpg"
import Khonama from "../../Images/khonama village - nagaland.jpg"
import Kohima from "../../Images/kohima - nagaland.jpg"
import kohima from "../../Images/kohima- nagaland.jpg"
import Wokha from "../../Images/wokha - nagaland.jpg"
const Nagaland = () => {
  return (
    <div>
        <h1>Nagaland</h1>
        <div className="featured">
        <div className="featuredItem">
            <img src={Dinapur} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Dinapur</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Khonama} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Khonama</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Kohima} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Kohima</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={kohima} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Kohima</h1> 
        </div>
        </div>
        <div className="featuredItem">
            <img src={Wokha} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Wokha</h1>
            </div>
        </div>
        </div>
        <p>Nagaland offers unending exploration possibilities from heritage villages to wildlife sanctuaries. Beautifully nestled amidst the lush and verdant sub-tropical and sub-alpine climate, Nagaland treasures an overabundance of wild flora and fauna and even some medicinal plants. Nagaland is a beautiful destination in India and it stores some popular places to visit. You can soak in the freshness of fine scent in the air, the calming yet buzzing sound of wild cicadas and beautiful rolling ranch lands and white fluffy clouds hovering above.
Winters from October to February are an ideal time to visit Nagaland.
Nagaland is famous for its Naga shawls, cane carpets, Naga silk Mekhela and bamboo mugs and other such items.
</p>
    </div>
  )
}

export default Nagaland