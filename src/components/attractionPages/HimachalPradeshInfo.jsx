import "./images.css"
import Beas from "../../Images/beas river - himachal pradesh.jpg"
import Dharamsala from "../../Images/dharamsala - himachal pradesh.jpg"
import Dalhousie from "../../Images/dalhousie - himachal pradesh.jpg"
import Jogini from "../../Images/jogini waterfall - himachal pradesh.jpg"
import Shimla from "../../Images/shimla - himachal pradesh.jpg"
const HimachalPradeshInfo = () => {
  return (
    <div>
        <h1>Himachal Pradesh</h1>
        <p>Located in North India amidst the Western Himalayas, Himachal Pradesh is India’s favourite outdoor adventure destination. Spread across hills and valleys and crisscrossed by magnificent rivers, the region abounds in natural beauty. It has a vast forest area and is considered one of the richest reservoirs of biological diversity. Apart from adventure seekers, Himachal Pradesh is popular with nature lovers, wildlife enthusiasts, pilgrims and history buffs.
Tourism is a large contributor to the state economy. In 2018, Himachal Pradesh was visited by 16.09 million domestic and 356,000 international tourists. This tourist friendly state has over 5,000 properties that cater to the needs of domestic and international tourists. This includes government-run properties and can be categorized as luxury hotels, heritage resorts, star hotels, budget hotels and campsites. Many of these hotels are in popular tourist destinations such as Shimla, Kasauli, Kullu, Dalhousie, Dharamshala, Khajjiar, Chamba and Manali.
Shopping in Himachal Pradesh is a heaven for everyone. Be it handicrafts, shawls, pullovers, local tweeds, Tibetan carpets and handicrafts, wood, metalwork, wooden articles, toys, Kullu shawls, caps, pickles and jams and squashes, basketry, beads or trendy artificial jewelry.
</p>
        <div className="featured">
        <div className="featuredItem">
            <img src={Beas} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Beas</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Dharamsala} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Dharam</h1>
                <h1>sala</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Dalhousie} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Dalhousie</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Jogini} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Jogini</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Shimla} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Shimla</h1>
            </div>
        </div>
        </div>
        <p>1.Beas river - himachal pradesh
The Rohtang pass at 13,050 feet ( 4,350 metres ), 51 km. North of Manali gateway to the valleys of Lahaul and Spiti lies on the main Manali-Leh highway. It has remained the main attraction for all tourists visiting this picturesque hill resort. During the season from early June to mid-October, thousands of tourists visit the pass eavery day.
Besides affording a magnificent view of the snow-clad mountains of Lahaul, this pass is also the source of the river Beas. This river while fulfilling the thirst of many local travellers, also quenches the thirst of the fields of Punjab and Pakistan before flowing into the Arabian Sea. Thr river emerges from a cavern at the Rohtang pass and assume different identities as the seasons go by.
        </p>
    </div>
  )
}

export default HimachalPradeshInfo