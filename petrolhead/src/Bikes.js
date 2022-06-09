import "./style.css";
import Menu from "./Menu.js";
import SingleBike from "./SingleBike";
import Header from "./Header";
import Footer from './Footer'
const App = () => {
  return (
    <>
      <Header />
      <div class="parallax">
        <div class="parallax__group">
          <div class="parallax__layer parallax__layer--back">
            <div class="row2">
              {" "}
              <img src={require("./images/banner.jpg")} />
              <div class="innercontent">
                <p class="mainhead">Builds</p>
                <p class="shorthead"></p>
              </div>
            </div>
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div className="listrow">
              <div class="bikelistrow">
                <SingleBike
                  img={require("./images/Photos/Black Panther/Black Panther.jpg")}
                  text={"Black Panther"}
                />
                <SingleBike
                  img={require("./images/Photos/Bull/Bull1.jpg")}
                  text={"Bull"}
                />
                <SingleBike
                  img={require("./images/Photos/KB135/KB135.jpg")}
                  text={"KB135"}
                />
                <SingleBike
                  img={require("./images/Photos/Maverick/Maverick1.jpg")}
                  text={"Maverick"}
                />
              </div>{" "}
              <div class="bikelistrow">
              <SingleBike
                  img={require("./images/Photos/MiG07/MiG07-2.jpg")}
                  text={"MiG07"}
                />
                <SingleBike
                  img={require("./images/Photos/Play,Burn & Bull/PBB-1.jpg")}
                  text={"Play,Burn & Bull"}
                />
                <SingleBike
                  img={require("./images/Photos/RD350/RD350.jpg")}
                  text={"RD350"}
                />
                <SingleBike
                  img={require("./images/Photos/Roadking/Roadking.jpg")}
                  text={"Roadking"}
                />
              </div>{" "}
              <div class="bikelistrow">
              <SingleBike
                  img={require("./images/Photos/Scram/Scram.jpg")}
                  text={"Scram"}
                />
                <SingleBike
                  img={require("./images/Photos/Suvega/Suvega.jpg")}
                  text={"Suvega"}
                />
                <SingleBike
                  img={require("./images/Photos/Tiger/Tiger.jpg")}
                  text={"Tiger"}
                />
                <SingleBike
                  img={require("./images/Photos/Wildcat/Wildcat-1.jpg")}
                  text={"Wildcat"}
                />
              </div>
            </div>
          </div>
        </div>

       <Footer />
      </div>
    </>
  );
};
export default App;
