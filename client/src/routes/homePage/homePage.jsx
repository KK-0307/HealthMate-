import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss"
import { AuthContext } from "../../context /AuthContext";


function HomePage() {
  

  const {currUser} = useContext(AuthContext);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Navigate Your Health Path: We Guide, You Thrive!</h1>
          <p className="paragraph">
          Embark on your wellness journey knowing you are not alone. At HealthMate, we are 
          here to guide and support you every step of the way. Whether you are seeking motivation, 
          companionship, or expert advice, find it all in one vibrant community. Ready to eat well 
          and live better? Select your city, budget, preferred ratings and discover healthy dining 
          options that cater to your needs and tastes. With HealthMate, healthier choices are just 
          a click away!
          </p>
          <SearchBar />
        </div>
      </div>
      <div className="imgContainer">
        <img src="/front.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
