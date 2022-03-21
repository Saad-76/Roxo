import React from "react";
import "./play.css";
import playImagae from "../Assests/PlayImage.jpg";
import Mobilephoto from "../Assests/Mobile photo.png";
import AppStore from "../Assests/AppStore.png"
import PlayStore from "../Assests/PlayStore.png"



const Play = () => {
  return (
    <div className="col-sm-12 mt-5">

      <div className="row" >
        <div className="col-sm-6">
          <div className="col-sm-12">
          <img  className="img-fluid" src={Mobilephoto} alt="playImagae"   />
          </div>
        </div>
        <div className="col-sm-6 m-auto">
          <div className="col-sm-12 text">
          <h3 style={{color:"white"}}>Get it Now</h3>
          <p style={{color:"white"}} >The experience on any device(ios, android, desktop)</p>
        
          </div>
          <div className="row ">
            <div className="col-sm-6">
              <div className="col-sm-12 text-left pl-0">
              <img src={AppStore} alt="appstore" className="img-fluid apple-button"/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="col-sm-12 text-left pl-0">
              <img   src={PlayStore} alt="playstore" className="img-fluid playstore-button"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Play;
