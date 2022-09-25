import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Mumbai</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/region/square250/68606.webp?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Goa</h1>
                <h2>223 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="featuredImg" />
            <div className="featuredTitle">
                <h1>Bangalore</h1>
                <h2>323 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured