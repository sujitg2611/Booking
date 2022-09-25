import "./featuredProperties.css"
import Udaivilas from "../../Images/Udaivilas.jpg"
import Amanbagh from "../../Images/Amanbagh.jpg"
import TajMahal from "../../Images/TajMahal.jpg"
import TajFalaknuma from "../../Images/TajFalaknuma.jpg"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src={Udaivilas} alt="" className="fpImg" />
            <span className="fpName">The Oberoi Udaivilas</span>
            <span className="fpCity">Udaipur</span>
            <span className="fpPrice">Starting from Rs10000</span>
            <div className="fpRating">
                <button>9.4</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
        <img src={Amanbagh} alt="" className="fpImg" />
        <span className="fpName">Amanbagh</span>
        <span className="fpCity">Rajasthan</span>
        <span className="fpPrice">Starting from Rs10000</span>
        <div className="fpRating">
            <button>9.4</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={TajMahal} alt="" className="fpImg" />
        <span className="fpName">Taj Mahal Palace</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from Rs10000</span>
        <div className="fpRating">
            <button>9.4</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={TajFalaknuma} alt="" className="fpImg" />
        <span className="fpName">Taj Falaknuma</span>
        <span className="fpCity">Hyderabad</span>
        <span className="fpPrice">Starting from Rs10000</span>
        <div className="fpRating">
            <button>9.4</button>
            <span>Excellent</span>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProperties