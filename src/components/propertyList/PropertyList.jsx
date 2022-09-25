import "./propertyList.css"
import star5Hotel from "../../Images/Hotel.jpg"
import star4Hotel from "../../Images/4starHotel.jpg"
import star3Hotel from "../../Images/3starHotel.jpg"
import resortHotel from "../../Images/ResortHotel.jpg"
import Lodge from "../../Images/Lodge.jpg"

const propertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src={star5Hotel} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>5 Star Hotels</h1>
                <h2>200 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={star4Hotel} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>4 Star Hotels</h1>
                <h2>233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={star3Hotel} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>3 Star Hotels</h1>
                <h2>300 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={resortHotel} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resort Hotels</h1>
                <h2>400 Resort Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Lodge} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Lodge</h1>
                <h2>500 Lodges</h2>
            </div>
        </div>
    </div>
  )
}

export default propertyList