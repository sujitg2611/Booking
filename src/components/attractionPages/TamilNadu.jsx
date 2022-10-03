import "./images.css"
import Coimbatore from "../../Images/coimbatore- tamil nadu.jpg"
import Kodikanal from "../../Images/kodikanal - tamil nadu.jpg"
import Pondicherry from "../../Images/pondicherry - tamil nadu.jpg"
import Ooty from "../../Images/ooty - tamil nadu.jpg"
import Chennai from "../../Images/chennai - tamil nadu.jpg"
const TamilNadu = () => {
  return (
    <div>
        <h1>Tamil Nadu</h1>
        <p>Situated along the Bay of Bengal in south India, Tamil Nadu is one of India's most well-known tourist destinations owing to its natural splendour, unique culture as well as religious significance. The state boasts of a plethora of religious sites that attract pilgrims, historical attractions, vast plantations, mesmerising hill stations, diverse wildlife, delicious cuisine and loads of festivities.
A visit to Tamil Nadu surely warrants a trip to its capital, Chennai, the 'Detroit of India'. A metropolitan with a rich colonial heritage, it is best known for Marina Beach, Fort St. George, Ashtalakshmi Temple etc. One of Tamil Nadu's treasures is the stunning hill station of Ooty, the "Queen of the Nilgiris," which is famous for the Ooty Lake, Botanical Gardens.
Mahabalipuram is an ideal destination to experience Tamil Nadu's religious glory; it is home to the Shore Temple, Five Rathas which are a set of rock temples, Krishna Cave Temple and Ganesh Ratha Temple.
Popular Shopping Items in Tamil Nadu:<br/>
Woodcraft<br/>
Musical Instruments<br/>
Textiles<br/>
Pottery<br/>
Jewellery<br/>
Stone Carving<br/>
Tanjore Paintings<br/>
Metalwork.

</p>
        <div className="featured">
        <div className="featuredItem">
            <img src={Coimbatore} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Coimbatore</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Kodikanal} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Kodikanal</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Pondicherry} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Pondicherry</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Ooty} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Ooty</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Chennai} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Chennai</h1>
            </div>
        </div>
        </div>
        <p>5.Chennai - tamil nadu 
Chennai is the capital city of Tamil Nadu. It is the political and cultural hub of Tamil Nadu and epitome of Dravidian movement in India.
Chennai is referred as gateway to South India. It may not have a Red Fort or a Marine Drive or a Victoria Memorial, but it is India’s oldest modern city. There are several temples, churches, forts, mosques, palaces and natural attractions in Chennai. It is one of the four metropolitan cities of India and is the capital of Tamilnadu. This state is famous for its beach, temples, fabrics, monuments, Carnatic music, classical dances, and food. It’s an ancient city known for its culture, trade and architecture. Chennai have its mark during the colonial times of British and French. It’s a small Asia where you can witness different kinds of people, cultures, and traditions.</p>
    </div>
  )
}

export default TamilNadu