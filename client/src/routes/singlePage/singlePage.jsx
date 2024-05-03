import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Restaurant Information</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/website.png" alt="" />
              <div className="featureText">
              <span>
                <a href="https://www.goldiefalafel.com/" target="_blank" rel="noopener noreferrer">Webpage</a>
              </span>
              </div>
            </div>
            <div className="feature">
              <img src="/phone.png" alt="" />
              <div className="featureText">
                <span>(267) 239-0777</span>
              </div>
            </div>
            <div className="feature">
              <img src="/order.png" alt="" />
              <div className="featureText">
              <span>
                <a href="https://www.yelp.com/menu/goldie-philadelphia-3" target="_blank" rel="noopener noreferrer">Menu</a>
              </span>
              </div>
            </div>
          </div>
          <p className="title">Amenities</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/delivery.png" alt="" />
              <div className="featureText">
                <span>Offers Delivery</span>
              </div>
            </div>
            <div className="feature">
              <img src="/takeout.png" alt="" />
              <div className="featureText">
                <span>Offers Takeout</span>
              </div>
            </div>
            <div className="feature">
              <img src="/health.png" alt="" />
              <div className="featureText">
                <span>Estimated Health Score</span>
                <p>97 out of 100</p>
              </div>
            </div>
            <div className="feature">
              <img src="/wifi.png" alt="" />
              <div className="featureText">
                <span>Free Wifi</span>
              </div>
            </div>
            <div className="feature">
              <img src="/vegan.png" alt="" />
              <div className="featureText">
                <span>Vegan Options Available</span>
              </div>
            </div>
            <div className="feature">
              <img src="/dress.png" alt="" />
              <div className="featureText">
                <span>Casual Dress</span>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;