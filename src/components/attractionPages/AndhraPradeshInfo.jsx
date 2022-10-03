import "./images.css"
import Telangana from "../../Images/telangana andhra pradesh.jpg"
import Vizag from "../../Images/vizag- andhra pradesh.jpg"
import Vsk from "../../Images/visakhapatnam- andhra pradesh.jpg"
import Vijaywada from "../../Images/vijaywada andhra pradesh.jpg"
import Leepakshi from "../../Images/leepakshi temple- andhra pradesh.jpg"

const AndhraPradeshInfo = () => {
  return (
    <div>
        <h1>1.Andhra Pradesh</h1>
        <div className="featured">
        <div className="featuredItem">
            <img src={Telangana} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Telangana</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Vizag} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Vizag</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Vsk} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Vishaka</h1>
                <h1>patnam</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Vijaywada} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Vijaywada</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Leepakshi} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Leepakshi</h1>
            </div>
        </div>
        </div>
        <p> Andhra Pradesh has a variety of tourist attractions including beaches, hills, caves, wildlife, forests and temples.
Visakhapatnam city has many tourist attractions such as Kailasagiri park near the sea, Visakha Museum, Indira Gandhi Zoological Park, the INS Kursura (S20) Submarine museum, City Central Park, VUDA Park, the Dolphin's Nose, and the Lighthouse.
Visakhapatnam has many beautiful beaches along the Bay of Bengal namely R.K. Beach, Yarada Beach, Rushikonda Beach, Lawsons Bay Beach, etc. There are other beaches too along the long coastline of the state, such as Mypadu beach in Nellore, Suryalanka Beach, located 9 km from Bapatla in Bapatla district.
This state is well known for a lot of items. Exotic perfumes, Kalamkari works, bidri works, jewels, pearls, diamonds, clothes, Kondapalli wood dolls and so on.
Hyderabad is known for pearls, performs and embroidery sarees like Mangalagiri sareers.</p>
    </div>
  )
}

export default AndhraPradeshInfo