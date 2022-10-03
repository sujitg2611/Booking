import "./images.css"
import Ellora from "../../Images/ellora caves - maharashtra.jpg"
import Marine from "../../Images/marine drive - maharashtra.jpg"
import MahalaxmiTemple from "../../Images/mahalaxmi temple - maharashtra.jpg"
import Mahabaleshwar from "../../Images/mahabaleshwar - maharashtra.jpg"
import Lonavala from "../../Images/lonavala - maharashtra.jpg"
const Maharashtra = () => {
  return (
    <div>
        <h1>Maharashtra</h1>
        <div className="featured">
        <div className="featuredItem">
            <img src={Ellora} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Ellora</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Marine} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Marine</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={MahalaxmiTemple} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Maha</h1>
                <h1>Laxmi</h1>
                <h1>Temple</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Mahabaleshwar} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Maha</h1>
                <h1>baleshwar</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Lonavala} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Lonavala</h1>
            </div>
        </div>
        </div>
        <p>The third largest state and the second most populous state in India - Maharashtra - is brimming with an array of colorful shrines; a remarkable collection of caves; golden beaches lined with swaying palm trees; historic hotspots with strong past connection; and oodles of emerald hill stations under the canopy of lush western ghats. With an incredible mashup of everything, there's is no better place to go for a holiday in India than Maharashtra.The state is primarily known for its ancient Ellora and Ajanta caves, and pilgrim destinations.<br/>
Things to buy from maharashtra: <br/>
Decor items<br/>
Jewellery<br/>
Sarees or block-printed fabric<br/>
Art<br/>
Retro Bollywood Posters<br/>
Gateway of India Photographs and Postcards<br/>
Lampshades<br/>
Spices.
</p>
    </div>
  )
}

export default Maharashtra