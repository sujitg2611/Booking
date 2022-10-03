import "./images.css"
import Churachandpur from "../../Images/churachandpur - manipur.jpg"
import Imphal from "../../Images/imphal - manipur.jpg"
import Loktak from "../../Images/loktak-lake - manipur.jpg"
import Ukhrul from "../../Images/ukhrul - manipur.jpg"
import Thoubal from "../../Images/thoubal - manipur.jpg"
const Manipur = () => {
  return (
    <div>
        <h1>Manipur</h1>
        <p>Nestled in the slopes of the south-flowing sub-Himalayan ranges in the northeast of India, Manipur is a beautiful land where mother nature is extra generous in her bounty. The state boasts of picturesque landscapes with misty hills, gleaming lakes, lush green valleys, splashing rivers and carpeted with dense forests. Not just this, Manipur is also renowned for its graceful classical dance tradition and rich art and culture which could be clearly seen in its exquisite handicrafts and intricate art forms. Manipur being lesser explored land promises to be one of the best tourist destinations in India offering endless enjoyment and pleasure with its blue lakes, and undulating hills. It is the beautiful, calm and serene, ecstatic simplicity along with the moderate climate that makes Manipur a must visit place in Northeast India.
A trip to Manipur can be planned during the winter season and the onset of the summer season. Considering the months between September and April would be an ideal choice as the climate remains pleasant offering the best holiday experience.
Stone-carved bowls, grinders, plates, and candle stands are absolutely the things to buy in Manipur. Wooden items like a spoon, try, bowl, buckets, and mugs can also make some nice shopping items which will also be quite useful in your household. Pottery is another trait, people of Manipur are extremely skilled at.
</p>
        <div className="featured">
        <div className="featuredItem">
            <img src={Churachandpur} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Chura</h1>
                <h1>chandpur</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Imphal} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Imphal</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Loktak} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Loktak</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Ukhrul} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Ukhrul</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Thoubal} alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Thoubal</h1>
            </div>
        </div>
        </div>
        <p>1.Churachandrapur - manipur
Surrounded by small hills and narrow valleys, Churachandpur which is locally called Lamka, has a deep historical significance. Located at a distance of approx 63 km from the capital of the state, Imphal, Churachandpur is believed to have witnessed a lot of bombarding when the Japanese entered India. The town was then left devastated which today is visited by tourists coming from different parts of the world and considered to be the peaceful town of Manipur.
Being the second largest town of Manipur, tourist can get the opportunity to witness a number of tourist attractions that can be spotted all around the town. Right from the rich culture to the historical sites, shopping and sightseeing, Churachandpur is sure to let the tourists make the most out of their visit to the town by exploring the town wholeheartedly. Also, visiting Tribal Museum will let one come across the history of the town and get an eye on the decent collection of the antique pieces.</p>
    
    </div>
  )
}

export default Manipur